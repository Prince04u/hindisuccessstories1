
-- 1. article_views: prevent viewer_id spoofing
DROP POLICY IF EXISTS "Anyone records a view" ON public.article_views;
CREATE POLICY "Anyone records a view" ON public.article_views
  FOR INSERT TO anon, authenticated
  WITH CHECK (viewer_id IS NULL OR auth.uid() = viewer_id);

-- 2. guest_post_submissions: bind submitter_id to auth.uid() when signed in
DROP POLICY IF EXISTS "Anyone can submit" ON public.guest_post_submissions;
DROP POLICY IF EXISTS "Anyone submits" ON public.guest_post_submissions;
CREATE POLICY "Submit guest post" ON public.guest_post_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    (auth.uid() IS NULL AND submitter_id IS NULL)
    OR (auth.uid() IS NOT NULL AND submitter_id = auth.uid())
  );

-- 3. Fix mutable search_path on helper functions
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
begin new.updated_at = now(); return new; end;
$$;

CREATE OR REPLACE FUNCTION public.slugify(v text)
RETURNS text LANGUAGE sql IMMUTABLE SET search_path = public AS $$
  select trim(both '-' from regexp_replace(lower(coalesce(v,'')), '[^a-z0-9]+', '-', 'g'));
$$;

CREATE OR REPLACE FUNCTION public.articles_before_save()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
declare base_slug text; final_slug text; counter int := 1;
begin
  if new.slug is null or new.slug = '' then
    base_slug := public.slugify(new.title);
    if base_slug = '' then base_slug := substr(new.id::text, 1, 8); end if;
    final_slug := base_slug;
    while exists (select 1 from public.articles where slug = final_slug and id <> new.id) loop
      counter := counter + 1;
      final_slug := base_slug || '-' || counter;
    end loop;
    new.slug := final_slug;
  end if;
  new.reading_time := greatest(1, ceil(coalesce(array_length(regexp_split_to_array(coalesce(new.content,''), '\s+'), 1), 0) / 200.0)::int);
  if new.status = 'published' and new.published_at is null then
    new.published_at := now();
  end if;
  return new;
end;
$$;

-- 4. Revoke public EXECUTE on has_role (only server/SQL policies should call it)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;
