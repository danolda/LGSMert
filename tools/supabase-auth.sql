-- LGS Kışlası · Google ile giriş (Supabase Auth) ve profil bağlama
-- Profil hâlâ cihaz token'ıyla yazılır (save_profile, deneme_*, vs_*). Google'a bağlı profilin
-- "hesap token'ı" (acct_token) sunucuda saklanır ve yalnız o Google kullanıcısına verilir;
-- böylece aynı hesapla giriş yapan her cihaz aynı profile yazar.
alter table public.profiles add column if not exists auth_user_id uuid unique;
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists acct_token text;
alter table public.profiles add column if not exists backup jsonb;
alter table public.profiles add column if not exists linked_at timestamptz;
create index if not exists profiles_email_ci on public.profiles (lower(email));
-- profiles tablosuna anon/authenticated doğrudan erişemez (RLS açık, yetki yok); public_profiles görünümü
-- yalnız herkese açık sütunları gösterir (acct_token/email/backup görünmez).

create or replace function public.account_sync(p_token text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare uid uuid := auth.uid(); em text; p profiles%rowtype; h text; tok text; old_h text; owner bigint;
begin
  if uid is null then return jsonb_build_object('status', 'no_auth'); end if;
  em := lower(coalesce(auth.jwt()->>'email', (select email from auth.users where id = uid)));
  h := case when char_length(coalesce(p_token, '')) >= 20 then encode(digest(p_token, 'sha256'), 'hex') end;
  -- 1) bu Google kullanıcısına bağlı profil  2) e-postayla önceden bağlanmış profil  3) bu cihazın bağsız profili
  select * into p from profiles where auth_user_id = uid;
  if not found and em is not null then
    select * into p from profiles where auth_user_id is null and lower(email) = em order by xp_total desc limit 1;
  end if;
  if not found and h is not null then
    select * into p from profiles where auth_user_id is null and token_hash = h;
  end if;
  if not found then return jsonb_build_object('status', 'none', 'email', em); end if;
  if p.auth_user_id is null then
    update profiles set auth_user_id = uid, email = coalesce(em, email), linked_at = now() where id = p.id;
  end if;
  tok := p.acct_token;
  if tok is null then
    old_h := p.token_hash;
    if h is not null and h = p.token_hash then
      tok := p_token;                                   -- bu cihaz zaten profilin sahibi
    else
      select id into owner from profiles where token_hash = h;
      if h is not null and owner is null then tok := p_token;  -- profilsiz cihaz: token'ı hesap token'ı olur
      else tok := encode(gen_random_bytes(24), 'hex'); end if;
      update profiles set token_hash = encode(digest(tok, 'sha256'), 'hex') where id = p.id;
      update denemes set owner_hash = encode(digest(tok, 'sha256'), 'hex') where owner_hash = old_h;
    end if;
    update profiles set acct_token = tok where id = p.id;
  end if;
  select * into p from profiles where id = p.id;
  return jsonb_build_object('status', 'ok', 'token', tok, 'username', p.username, 'photo', p.photo, 'thumb', p.thumb,
    'stats', p.stats, 'xp_total', p.xp_total, 'xp_days', p.xp_days, 'backup', p.backup, 'email', em);
end $$;
revoke all on function public.account_sync(text) from public, anon;
grant execute on function public.account_sync(text) to authenticated;

-- tam yerel yedek (EXP soru geçmişi, istatistik, görevler); yalnız profilin sahibi yazar, EXP asla düşmez
create or replace function public.account_backup(p_backup jsonb) returns text
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); t int;
begin
  if uid is null then return 'no_auth'; end if;
  if p_backup is null or octet_length(p_backup::text) > 1500000 then return 'too_big'; end if;
  t := least(greatest(coalesce((p_backup->'xp'->>'total')::int, 0), 0), 100000000);
  update profiles set backup = p_backup, xp_total = greatest(xp_total, t), updated_at = now() where auth_user_id = uid;
  if not found then return 'none'; end if;
  return 'ok';
end $$;
revoke all on function public.account_backup(jsonb) from public, anon;
grant execute on function public.account_backup(jsonb) to authenticated;

-- Mert'in profili ilk Google girişinde e-postayla bağlanır
update public.profiles set email = 'merterenkarakose@gmail.com' where lower(username) = 'mertbabaking' and auth_user_id is null;
