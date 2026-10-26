-- LGS Kışlası · Deneme sınavı geçmişi (cihaz token'ı ile)
create table if not exists public.denemes (
  id uuid primary key default gen_random_uuid(),
  owner_hash text not null,
  created_at timestamptz not null default now(),
  summary jsonb not null,
  data jsonb not null
);
create index if not exists denemes_owner on public.denemes(owner_hash, created_at desc);
alter table public.denemes enable row level security;
revoke all on public.denemes from anon, authenticated;

create or replace function public.deneme_save(p_token text, p_summary jsonb, p_data jsonb) returns uuid
language plpgsql security definer set search_path = public as $$
declare rid uuid;
begin
  if char_length(coalesce(p_token,'')) < 20 or octet_length(p_data::text) > 400000 then return null; end if;
  insert into denemes(owner_hash, summary, data) values (public.vs_h(p_token), p_summary, p_data) returning id into rid;
  return rid;
end $$;

create or replace function public.deneme_list(p_token text) returns jsonb
language sql security definer set search_path = public stable as $$
  select coalesce(jsonb_agg(jsonb_build_object('id', id, 'at', created_at, 'summary', summary) order by created_at desc), '[]'::jsonb)
  from (select id, created_at, summary from denemes where owner_hash = public.vs_h(p_token) order by created_at desc limit 200) d $$;

create or replace function public.deneme_get(p_token text, p_id uuid) returns jsonb
language sql security definer set search_path = public stable as $$
  select jsonb_build_object('id', id, 'at', created_at, 'summary', summary, 'data', data)
  from denemes where owner_hash = public.vs_h(p_token) and id = p_id $$;

create or replace function public.deneme_del(p_token text, p_id uuid) returns boolean
language sql security definer set search_path = public as $$
  with d as (delete from denemes where owner_hash = public.vs_h(p_token) and id = p_id returning 1) select exists(select 1 from d) $$;

grant execute on function public.deneme_save(text, jsonb, jsonb), public.deneme_list(text), public.deneme_get(text, uuid), public.deneme_del(text, uuid) to anon, authenticated;
