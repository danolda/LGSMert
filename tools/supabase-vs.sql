-- LGSMert · VS (düello) modu. Tüm zamanlama sunucu saatiyle (ms) yürür.
create table if not exists public.vs_rooms (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  host_hash text not null, guest_hash text,
  host jsonb not null, guest jsonb,
  status text not null default 'wait',          -- wait | play | end | closed
  cfg jsonb not null default '{}'::jsonb,
  qs jsonb not null default '[]'::jsonb,         -- [{tid,key,a,t,sb}]
  st jsonb not null default '{}'::jsonb,
  host_seen bigint not null default 0, guest_seen bigint not null default 0
);
alter table public.vs_rooms enable row level security;
revoke all on public.vs_rooms from anon, authenticated;
create index if not exists vs_rooms_status on public.vs_rooms(status, host_seen);

create or replace function public.vs_now() returns bigint language sql volatile as $$
  select (extract(epoch from clock_timestamp()) * 1000)::bigint $$;
create or replace function public.vs_h(p text) returns text language sql immutable as $$
  select encode(extensions.digest(p, 'sha256'), 'hex') $$;

create or replace function public.vs_create(p_token text, p_me jsonb) returns uuid
language plpgsql security definer set search_path = public as $$
declare h text := public.vs_h(p_token); rid uuid;
begin
  if char_length(coalesce(p_token,'')) < 20 then return null; end if;
  update vs_rooms set status = 'closed' where host_hash = h and status = 'wait';
  delete from vs_rooms where created_at < now() - interval '1 day';
  insert into vs_rooms(host_hash, host, host_seen) values (h, p_me, public.vs_now()) returning id into rid;
  return rid;
end $$;

create or replace function public.vs_list() returns jsonb
language sql security definer set search_path = public stable as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', id, 'host', host, 'cfg', cfg) order by created_at desc), '[]'::jsonb)
  from vs_rooms where status = 'wait' and guest_hash is null and host_seen > public.vs_now() - 15000 $$;

create or replace function public.vs_join(p_room uuid, p_token text, p_me jsonb) returns text
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token);
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found or r.status <> 'wait' then return 'gone'; end if;
  if r.host_hash = h then return 'host'; end if;
  if r.guest_hash is not null and r.guest_hash <> h then return 'full'; end if;
  update vs_rooms set guest_hash = h, guest = p_me, guest_seen = public.vs_now() where id = p_room;
  return 'ok';
end $$;

create or replace function public.vs_setup(p_room uuid, p_token text, p_cfg jsonb) returns text
language plpgsql security definer set search_path = public as $$
begin
  update vs_rooms set cfg = p_cfg where id = p_room and host_hash = public.vs_h(p_token) and status = 'wait';
  return case when found then 'ok' else 'no' end;
end $$;

create or replace function public.vs_kick(p_room uuid, p_token text) returns text
language plpgsql security definer set search_path = public as $$
begin
  update vs_rooms set guest_hash = null, guest = null where id = p_room and host_hash = public.vs_h(p_token) and status = 'wait';
  return 'ok';
end $$;

create or replace function public.vs_start(p_room uuid, p_token text, p_qs jsonb) returns text
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; n bigint := public.vs_now(); t int;
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found or r.host_hash <> public.vs_h(p_token) or r.status <> 'wait' then return 'no'; end if;
  if r.guest_hash is null then return 'noguest'; end if;
  if r.host->>'ch' is null or r.guest->>'ch' is null then return 'nochar'; end if;
  if jsonb_typeof(p_qs) <> 'array' or jsonb_array_length(p_qs) < 2 or jsonb_array_length(p_qs) > 100 then return 'bad'; end if;
  t := greatest(5, least(600, coalesce((p_qs->0->>'t')::int, 30)));
  update vs_rooms set qs = p_qs, status = 'play', host_seen = n, guest_seen = n,
    st = jsonb_build_object('ph', 'q', 'i', 0, 's', n + 3800, 'e', n + 3800 + t * 1000,
      'hp', jsonb_build_object('h', 100, 'g', 100), 'ans', '{}'::jsonb, 'fl', '{}'::jsonb)
    where id = p_room;
  return 'ok';
end $$;

-- terk: terk edenin canı sıfırlanır, kalan oyuncuya fatality seçimi açılır
create or replace function public.vs_forfeit(x jsonb, p_loser text, n bigint) returns jsonb
language sql immutable as $$
  select (x || jsonb_build_object('left', p_loser, 'ph', 'pk', 'u', n + 9000,
    'hp', jsonb_set(coalesce(x->'hp', '{"h":100,"g":100}'::jsonb), array[p_loser], '0'::jsonb),
    'pk', jsonb_build_object('att', case when p_loser = 'h' then 'g' else 'h' end, 'def', p_loser, 'tier', 'f', 'left', true))) - 'mv' - 'seen';
$$;

-- durum makinesi: zamanı gelen geçişleri uygular
create or replace function public.vs_adv(p_room uuid) returns void
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; x jsonb; n bigint; ph text; i int; cnt int; q jsonb; k int := 0;
  hc text; gc text; ht bigint; gt bigint; hok bool; gok bool; hit text; kind text; dmg numeric; hp jsonb;
  def text; att text; tier text; hpd numeric; fl jsonb; t int; mv int; dur int; win text;
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found or r.status <> 'play' then return; end if;
  x := r.st; n := public.vs_now(); cnt := jsonb_array_length(r.qs);
  -- bağlantısı kopan kaybeder: canı sıfırlanır, kalan oyuncu fatality yapar
  if not (x ? 'left') and (n - r.host_seen > 25000 or n - r.guest_seen > 25000) then
    win := case when r.host_seen >= r.guest_seen then 'h' else 'g' end;
    x := public.vs_forfeit(x, case when win = 'h' then 'g' else 'h' end, n);
  end if;
  loop
    k := k + 1; exit when k > 6;
    ph := x->>'ph'; i := (x->>'i')::int;
    if ph = 'q' then
      exit when not ((x->'ans' ? 'h' and x->'ans' ? 'g') or n >= (x->>'e')::bigint);
      q := r.qs->i;
      hc := x->'ans'->'h'->>'c'; gc := x->'ans'->'g'->>'c';
      ht := coalesce((x->'ans'->'h'->>'t')::bigint, 999999999); gt := coalesce((x->'ans'->'g'->>'t')::bigint, 999999999);
      hok := hc is not null and hc = q->>'a'; gok := gc is not null and gc = q->>'a';
      hit := null; kind := null; dmg := 0;
      if hok and not gok then hit := 'g'; kind := 'crit'; dmg := 200.0 / cnt;
      elsif gok and not hok then hit := 'h'; kind := 'crit'; dmg := 200.0 / cnt;
      elsif hok and gok and ht <> gt then hit := case when ht < gt then 'g' else 'h' end; kind := 'fast'; dmg := 100.0 / cnt;
      end if;
      hp := x->'hp';
      if hit is not null then hp := jsonb_set(hp, array[hit], to_jsonb(round(greatest(0, (hp->>hit)::numeric - dmg), 2))); end if;
      x := x || jsonb_build_object('ph', 'rv', 'u', n + 3400, 'hp0', x->'hp', 'hp', hp,
        'res', jsonb_build_object('i', i, 'a', q->>'a', 'hc', hc, 'gc', gc, 'ht', x->'ans'->'h'->'t', 'gt', x->'ans'->'g'->'t',
          'hok', hok, 'gok', gok, 'hit', hit, 'kind', kind, 'dmg', round(dmg, 2)));
    elsif ph = 'rv' then
      exit when n < (x->>'u')::bigint;
      -- her isabette saldıran hareketini seçer
      def := x->'res'->>'hit'; tier := null;
      if def is not null then
        att := case when def = 'h' then 'g' else 'h' end; hpd := (x->'hp'->>def)::numeric;
        tier := case when hpd <= 0 then 'f' when hpd < 30 then 'h' else 'l' end;
      end if;
      if tier is not null then
        x := x || jsonb_build_object('ph', 'pk', 'pk', jsonb_build_object('att', att, 'def', def, 'tier', tier), 'u', n + 9000) - 'mv';
      elsif i + 1 >= cnt then
        ph := 'fin';
      else
        t := greatest(5, least(600, coalesce((r.qs->(i+1)->>'t')::int, 30)));
        x := x || jsonb_build_object('ph', 'q', 'i', i + 1, 's', n + 2000, 'e', n + 2000 + t * 1000, 'ans', '{}'::jsonb);
      end if;
    elsif ph = 'pk' then
      exit when not (x ? 'mv' or n >= (x->>'u')::bigint);
      mv := coalesce((x->>'mv')::int, floor(random() * 3)::int);
      tier := x->'pk'->>'tier';
      dur := case tier when 'l' then 2600 when 'h' then 3300 else 5200 end;
      x := (x || jsonb_build_object('ph', 'an', 'mv', mv, 'as', n + 700, 'u', n + 700 + dur)) - 'seen';
    elsif ph = 'an' then
      -- özel hareketi iki oyuncu da sonuna kadar izlemeden devam edilmez (en fazla 15 sn ek bekleme)
      exit when n < (x->>'u')::bigint;
      exit when not ((coalesce(x->'seen' ? 'h', false) or x->>'left' = 'h') and (coalesce(x->'seen' ? 'g', false) or x->>'left' = 'g')) and n < (x->>'u')::bigint + 15000;
      if x->'pk'->>'tier' = 'f' then
        x := x || jsonb_build_object('ph', 'end', 'win', x->'pk'->>'att', 'why', case when x ? 'left' then 'left' else 'ko' end, 'at', n);
      elsif i + 1 >= cnt then
        ph := 'fin';
      else
        t := greatest(5, least(600, coalesce((r.qs->(i+1)->>'t')::int, 30)));
        x := x || jsonb_build_object('ph', 'q', 'i', i + 1, 's', n + 3800, 'e', n + 3800 + t * 1000, 'ans', '{}'::jsonb);
      end if;
    else
      exit;
    end if;
    if ph = 'fin' then
      if (x->'hp'->>'h')::numeric > (x->'hp'->>'g')::numeric then win := 'h';
      elsif (x->'hp'->>'g')::numeric > (x->'hp'->>'h')::numeric then win := 'g'; else win := null; end if;
      if win is null then
        x := x || jsonb_build_object('ph', 'end', 'win', null, 'why', 'draw', 'at', n);
      else
        x := x || jsonb_build_object('ph', 'pk', 'pk', jsonb_build_object('att', win, 'def', case when win = 'h' then 'g' else 'h' end, 'tier', 'f', 'fin', true), 'u', n + 10000) - 'mv';
      end if;
    end if;
  end loop;
  update vs_rooms set st = x, status = case when x->>'ph' = 'end' then 'end' else status end where id = p_room;
end $$;

create or replace function public.vs_state(p_room uuid, p_token text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token); role text; n bigint := public.vs_now();
begin
  select * into r from vs_rooms where id = p_room;
  if not found then return jsonb_build_object('gone', true, 'now', n); end if;
  role := case when r.host_hash = h then 'h' when r.guest_hash = h then 'g' else null end;
  if role = 'h' then update vs_rooms set host_seen = n where id = p_room;
  elsif role = 'g' then update vs_rooms set guest_seen = n where id = p_room; end if;
  perform public.vs_adv(p_room);
  select * into r from vs_rooms where id = p_room;
  return jsonb_build_object('now', public.vs_now(), 'role', role, 'status', r.status, 'host', r.host, 'guest', r.guest,
    'cfg', r.cfg, 'qs', case when r.status = 'wait' then '[]'::jsonb else r.qs end, 'st', r.st,
    'hs', n - r.host_seen, 'gs', case when r.guest_hash is null then null else n - r.guest_seen end);
end $$;

create or replace function public.vs_answer(p_room uuid, p_token text, p_i int, p_c text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token); role text; n bigint := public.vs_now(); x jsonb;
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found or r.status <> 'play' then return null; end if;
  role := case when r.host_hash = h then 'h' when r.guest_hash = h then 'g' else null end;
  x := r.st;
  if role is null or x->>'ph' <> 'q' or (x->>'i')::int <> p_i or x->'ans' ? role
     or n < (x->>'s')::bigint or n > (x->>'e')::bigint or p_c not in ('A','B','C','D') then
    return public.vs_state(p_room, p_token);
  end if;
  x := jsonb_set(x, array['ans', role], jsonb_build_object('c', p_c, 't', n - (x->>'s')::bigint));
  update vs_rooms set st = x where id = p_room;
  return public.vs_state(p_room, p_token);
end $$;

create or replace function public.vs_move(p_room uuid, p_token text, p_m int) returns jsonb
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token); role text;
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found then return null; end if;
  role := case when r.host_hash = h then 'h' when r.guest_hash = h then 'g' else null end;
  if r.st->>'ph' = 'pk' and r.st->'pk'->>'att' = role and not (r.st ? 'mv') and p_m between 0 and 2 then
    update vs_rooms set st = st || jsonb_build_object('mv', p_m) where id = p_room;
  end if;
  return public.vs_state(p_room, p_token);
end $$;

create or replace function public.vs_leave(p_room uuid, p_token text) returns text
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token); n bigint := public.vs_now();
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found then return 'ok'; end if;
  if r.status = 'wait' then
    if r.host_hash = h then update vs_rooms set status = 'closed' where id = p_room;
    elsif r.guest_hash = h then update vs_rooms set guest_hash = null, guest = null where id = p_room; end if;
  elsif r.status = 'play' and (r.host_hash = h or r.guest_hash = h) and not (r.st ? 'left') then
    update vs_rooms set st = public.vs_forfeit(r.st, case when r.host_hash = h then 'h' else 'g' end, n) where id = p_room;
  end if;
  return 'ok';
end $$;

create or replace function public.vs_seen(p_room uuid, p_token text, p_as bigint) returns text
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token); role text;
begin
  select * into r from vs_rooms where id = p_room for update;
  if not found then return 'gone'; end if;
  role := case when r.host_hash = h then 'h' when r.guest_hash = h then 'g' else null end;
  if role is not null and r.st->>'ph' = 'an' and (r.st->>'as')::bigint = p_as then
    update vs_rooms set st = jsonb_set(st, '{seen}', coalesce(st->'seen', '{}'::jsonb) || jsonb_build_object(role, true)) where id = p_room;
  end if;
  return 'ok';
end $$;

create or replace function public.vs_char(p_room uuid, p_token text, p_ch text) returns text
language plpgsql security definer set search_path = public as $$
declare r vs_rooms; h text := public.vs_h(p_token);
begin
  if p_ch not in ('fatih','yavuz','alparslan','metehan','barbaros','osman') then return 'bad'; end if;
  select * into r from vs_rooms where id = p_room for update;
  if not found or r.status <> 'wait' then return 'gone'; end if;
  if r.host_hash = h then update vs_rooms set host = host || jsonb_build_object('ch', p_ch) where id = p_room;
  elsif r.guest_hash = h then update vs_rooms set guest = guest || jsonb_build_object('ch', p_ch) where id = p_room;
  else return 'no'; end if;
  return 'ok';
end $$;

revoke all on function public.vs_adv(uuid) from public, anon, authenticated;
grant execute on function public.vs_seen(uuid, text, bigint), public.vs_char(uuid, text, text) to anon, authenticated;
grant execute on function public.vs_create(text, jsonb), public.vs_list(), public.vs_join(uuid, text, jsonb),
  public.vs_setup(uuid, text, jsonb), public.vs_kick(uuid, text), public.vs_start(uuid, text, jsonb),
  public.vs_state(uuid, text), public.vs_answer(uuid, text, int, text), public.vs_move(uuid, text, int),
  public.vs_leave(uuid, text) to anon, authenticated;
