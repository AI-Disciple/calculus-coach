-- One progress object per account. The app reads and replaces the whole object, as it did with the local file.
create table if not exists public.progress (
  user_id uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  data jsonb not null default '{"attempts":[],"reviews":[]}'::jsonb,
  -- Raised by one on every save. A save only lands if it names the version it read, so two devices cannot overwrite each other.
  version bigint not null default 1,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "own progress: read" on public.progress
  for select to authenticated using (user_id = (select auth.uid()));

create policy "own progress: insert" on public.progress
  for insert to authenticated with check (user_id = (select auth.uid()));

create policy "own progress: update" on public.progress
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create policy "own progress: delete" on public.progress
  for delete to authenticated using (user_id = (select auth.uid()));
