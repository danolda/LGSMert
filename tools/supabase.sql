-- LGSMert kullanıcı profilleri (Supabase)
create extension if not exists pgcrypto;
create table if not exists public.profiles (
  id bigint generated always as identity primary key,
  username text not null,
  token_hash text not null unique,
  photo text,
  thumb text,
  stats jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint username_len check (char_length(username) between 2 and 24),
  constraint photo_len check (photo is null or char_length(photo) < 300000),
  constraint thumb_len check (thumb is null or char_length(thumb) < 30000)
);
create unique index if not exists profiles_username_ci on public.profiles (lower(username));
alter table public.profiles enable row level security;
revoke all on public.profiles from anon, authenticated;

create or replace view public.public_profiles with (security_invoker = false) as
  select username, photo, thumb, stats, updated_at from public.profiles;
revoke all on public.public_profiles from anon, authenticated, public;
grant select on public.public_profiles to anon, authenticated;

create or replace function public.save_profile(p_token text, p_username text, p_photo text, p_thumb text, p_stats jsonb)
returns text language plpgsql security definer set search_path = public as $$
declare h text := encode(extensions.digest(p_token, 'sha256'), 'hex'); me bigint; other bigint; n text := btrim(p_username);
begin
  if p_token is null or char_length(p_token) < 20 then return 'bad_token'; end if;
  if n is null or char_length(n) < 2 or char_length(n) > 24 then return 'bad_name'; end if;
  select id into me from profiles where token_hash = h;
  select id into other from profiles where lower(username) = lower(n);
  if other is not null and (me is null or other <> me) then return 'taken'; end if;
  if me is null then
    insert into profiles(username, token_hash, photo, thumb, stats) values (n, h, p_photo, p_thumb, coalesce(p_stats, '{}'::jsonb));
  else
    update profiles set username = n, photo = p_photo, thumb = p_thumb, stats = coalesce(p_stats, stats), updated_at = now() where id = me;
  end if;
  return 'ok';
end $$;
revoke all on function public.save_profile(text, text, text, text, jsonb) from public;
grant execute on function public.save_profile(text, text, text, text, jsonb) to anon, authenticated;
