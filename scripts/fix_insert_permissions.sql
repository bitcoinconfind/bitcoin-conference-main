-- =============================================
-- Fix INSERT Permissions for Forms
-- =============================================
-- Run this in Supabase SQL Editor to fix the 403 error

-- Add INSERT policies for authenticated users
DROP POLICY IF EXISTS auth_insert_contact ON contact_queries;
CREATE POLICY auth_insert_contact ON contact_queries FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS auth_insert_speaker ON speaker_applications;
CREATE POLICY auth_insert_speaker ON speaker_applications FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS auth_insert_sponsorship ON sponsorship_inquiries;
CREATE POLICY auth_insert_sponsorship ON sponsorship_inquiries FOR INSERT TO authenticated WITH CHECK (true);

-- Grant INSERT permissions to authenticated users
GRANT INSERT ON contact_queries TO authenticated;
GRANT INSERT ON speaker_applications TO authenticated;
GRANT INSERT ON sponsorship_inquiries TO authenticated;

-- Verify the policies exist
SELECT 
  schemaname, 
  tablename, 
  policyname, 
  permissive, 
  roles, 
  cmd, 
  qual 
FROM pg_policies 
WHERE tablename IN ('contact_queries', 'speaker_applications', 'sponsorship_inquiries')
  AND policyname LIKE '%insert%'
ORDER BY tablename, policyname;
