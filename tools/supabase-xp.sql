-- LGSMert · EXP / seviye / lider tablosu
alter table public.profiles add column if not exists xp_total integer not null default 0;
alter table public.profiles add column if not exists xp_days jsonb not null default '{}'::jsonb;

create or replace function public.ist_today() returns date language sql stable as $$
  select (now() at time zone 'Europe/Istanbul')::date $$;

drop view if exists public.public_profiles;
create view public.public_profiles with (security_invoker = false) as
  select username, photo, thumb, stats, xp_total, updated_at from public.profiles;
revoke all on public.public_profiles from anon, authenticated, public;
grant select on public.public_profiles to anon, authenticated;

drop function if exists public.save_profile(text, text, text, text, jsonb);
create or replace function public.save_profile(p_token text, p_username text, p_photo text, p_thumb text, p_stats jsonb, p_xp jsonb default null)
returns text language plpgsql security definer set search_path = public as $$
declare h text := encode(extensions.digest(p_token, 'sha256'), 'hex'); me bigint; other bigint; n text := btrim(p_username);
  old_days jsonb := '{}'::jsonb; new_days jsonb; k text; v int; tot int; lim date := public.ist_today() - 1;
begin
  if p_token is null or char_length(p_token) < 20 then return 'bad_token'; end if;
  if n is null or char_length(n) < 2 or char_length(n) > 24 then return 'bad_name'; end if;
  select id, xp_days into me, old_days from profiles where token_hash = h;
  select id into other from profiles where lower(username) = lower(n);
  if other is not null and (me is null or other <> me) then return 'taken'; end if;
  old_days := coalesce(old_days, '{}'::jsonb);
  new_days := old_days;
  -- yalnız dün ve bugünün değerleri güncellenebilir; geçmiş günler kilitli
  if p_xp is not null and jsonb_typeof(p_xp->'days') = 'object' then
    for k, v in select key, least(greatest((value)::text::int, 0), 20000) from jsonb_each(p_xp->'days') where key ~ '^\d{4}-\d{2}-\d{2}$' and jsonb_typeof(value) = 'number' loop
      if k::date >= lim and k::date <= public.ist_today() then new_days := new_days || jsonb_build_object(k, v); end if;
    end loop;
  end if;
  tot := least(greatest(coalesce((p_xp->>'total')::int, 0), 0), 100000000);
  if me is null then
    insert into profiles(username, token_hash, photo, thumb, stats, xp_total, xp_days)
      values (n, h, p_photo, p_thumb, coalesce(p_stats, '{}'::jsonb), tot, new_days);
  else
    update profiles set username = n, photo = p_photo, thumb = p_thumb, stats = coalesce(p_stats, stats),
      xp_total = greatest(xp_total, tot), xp_days = new_days, updated_at = now() where id = me;
  end if;
  return 'ok';
end $$;
revoke all on function public.save_profile(text, text, text, text, jsonb, jsonb) from public;
grant execute on function public.save_profile(text, text, text, text, jsonb, jsonb) to anon, authenticated;

-- dönem puanı: day | week | all
create or replace function public.period_xp(p_days jsonb, p_total int, p_period text, p_ref date)
returns int language sql immutable as $$
  select case p_period
    when 'all' then p_total
    when 'day' then coalesce((p_days->>p_ref::text)::int, 0)
    else coalesce((select sum((value)::text::int) from jsonb_each(p_days)
                   where key::date >= date_trunc('week', p_ref)::date and key::date <= p_ref), 0)::int
  end $$;

create or replace function public.leaderboard(p_period text, p_token text default null)
returns jsonb language plpgsql security definer set search_path = public stable as $$
declare t date := public.ist_today(); h text; res jsonb; mine jsonb;
begin
  if p_period not in ('day', 'week', 'all') then p_period := 'all'; end if;
  with s as (
    select id, username, thumb, xp_total, token_hash, public.period_xp(xp_days, xp_total, p_period, t) as xp, updated_at from profiles
  ), r as (
    select *, rank() over (order by xp desc) as rk, row_number() over (order by xp desc, updated_at asc) as rn from s where xp > 0
  )
  select coalesce(jsonb_agg(jsonb_build_object('rank', rk, 'username', username, 'thumb', thumb, 'xp', xp, 'xp_total', xp_total) order by rn), '[]'::jsonb)
    into res from r where rn <= 10;
  if p_token is not null then
    h := encode(extensions.digest(p_token, 'sha256'), 'hex');
    with s as (
      select token_hash, username, xp_total, public.period_xp(xp_days, xp_total, p_period, t) as xp from profiles
    )
    select jsonb_build_object('username', me.username, 'xp', me.xp, 'xp_total', me.xp_total,
      'rank', case when me.xp > 0 then (select count(*) + 1 from s where s.xp > me.xp) else null end,
      'of', (select count(*) from s where s.xp > 0))
      into mine from s me where me.token_hash = h;
  end if;
  return jsonb_build_object('period', p_period, 'today', t, 'top', res, 'me', mine);
end $$;
grant execute on function public.leaderboard(text, text) to anon, authenticated;

-- tamamlanmış günlerin / haftaların şampiyonları
create or replace function public.champions(p_period text)
returns jsonb language plpgsql security definer set search_path = public stable as $$
declare t date := public.ist_today(); res jsonb;
begin
  with d as (
    select p.username, p.thumb, p.xp_total,
      case when p_period = 'week' then date_trunc('week', e.key::date)::date else e.key::date end as per,
      (e.value)::text::int as xp
    from profiles p, jsonb_each(p.xp_days) e
    where e.key ~ '^\d{4}-\d{2}-\d{2}$'
  ), g as (
    select username, thumb, xp_total, per, sum(xp) as xp from d
    where (p_period = 'week' and per < date_trunc('week', t)::date) or (p_period <> 'week' and per < t)
    group by username, thumb, xp_total, per having sum(xp) > 0
  ), w as (
    select distinct on (per) per, username, thumb, xp_total, xp from g order by per, xp desc, username
  ), c as (
    select username, max(thumb) as thumb, max(xp_total) as xp_total, count(*) as wins, max(per) as last from w group by username
  )
  select jsonb_build_object(
    'recent', coalesce((select jsonb_agg(jsonb_build_object('per', per, 'username', username, 'thumb', thumb, 'xp', xp, 'xp_total', xp_total) order by per desc) from (select * from w order by per desc limit 7) x), '[]'::jsonb),
    'counts', coalesce((select jsonb_agg(jsonb_build_object('username', username, 'thumb', thumb, 'wins', wins, 'xp_total', xp_total) order by wins desc, last desc) from (select * from c order by wins desc, last desc limit 10) y), '[]'::jsonb)
  ) into res;
  return res;
end $$;
grant execute on function public.champions(text) to anon, authenticated;
