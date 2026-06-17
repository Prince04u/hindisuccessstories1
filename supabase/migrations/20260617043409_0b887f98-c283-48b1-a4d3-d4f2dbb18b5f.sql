
-- Revoke EXECUTE on trigger-only SECURITY DEFINER functions (they only run from triggers)
REVOKE EXECUTE ON FUNCTION public.likes_count_trg() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.comments_count_trg() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.articles_before_save() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- Find and replace any remaining permissive policies (USING true / WITH CHECK true on write ops)
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT schemaname, tablename, policyname, cmd, qual, with_check
    FROM pg_policies
    WHERE schemaname = 'public'
      AND cmd IN ('INSERT','UPDATE','DELETE')
      AND (qual = 'true' OR with_check = 'true')
  LOOP
    EXECUTE format('DROP POLICY %I ON public.%I', r.policyname, r.tablename);
  END LOOP;
END$$;
