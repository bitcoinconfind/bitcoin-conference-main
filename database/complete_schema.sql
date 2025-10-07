-- =============================================
-- Bitcoin Conference Forms - Complete Schema
-- =============================================
-- This is the ONLY schema file you need
-- Run this entire file in Supabase SQL Editor

-- =============================================
-- 1. DO NOT DROP EXISTING TABLES IN PRODUCTION
-- =============================================

-- IMPORTANT: Dropping tables will permanently delete data.
-- These were previously used during development. Keep them commented out.
-- If you truly need to reset a dev database, uncomment carefully.
-- DROP TABLE IF EXISTS contact_queries CASCADE;
-- DROP TABLE IF EXISTS speaker_applications CASCADE;
-- DROP TABLE IF EXISTS sponsorship_inquiries CASCADE;
-- DROP TABLE IF EXISTS allowed_admin_emails CASCADE;
-- Note: admins is managed separately; do NOT drop in production.

-- =============================================
-- 2. CREATE TABLES
-- =============================================

-- Admins Table (who can read/update submissions and can request OTP)
CREATE TABLE IF NOT EXISTS admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
-- Ensure email column exists if upgrading and make it unique on lower(email)
ALTER TABLE admins ADD COLUMN IF NOT EXISTS email TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS admins_email_unique ON admins (lower(email));

-- Auto-fill admins.email from auth.users based on user_id
CREATE OR REPLACE FUNCTION set_admin_email()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  u_email text;
BEGIN
  SELECT email INTO u_email FROM auth.users WHERE id = NEW.user_id;
  IF u_email IS NULL THEN
    RAISE EXCEPTION 'No auth.users row for user_id=%', NEW.user_id;
  END IF;
  NEW.email := lower(u_email);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_admins_set_email ON admins;
CREATE TRIGGER trg_admins_set_email
BEFORE INSERT OR UPDATE OF user_id ON admins
FOR EACH ROW
EXECUTE FUNCTION set_admin_email();

-- Contact Queries Table
CREATE TABLE contact_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Speaker Applications Table
CREATE TABLE speaker_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  job_title TEXT,
  bio TEXT NOT NULL,
  topic_title TEXT NOT NULL,
  topic_abstract TEXT NOT NULL,
  previous_speaking TEXT,
  linkedin TEXT,
  twitter TEXT,
  website TEXT,
  experience TEXT NOT NULL,
  audience TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sponsorship Inquiries Table
CREATE TABLE sponsorship_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  website TEXT,
  linkedin TEXT,
  sponsorship_type TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  message TEXT NOT NULL,
  company_size TEXT,
  industry TEXT,
  previous_sponsorship TEXT,
  goals TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- 3. ENABLE ROW LEVEL SECURITY (LOCK DOWN BY DEFAULT)
-- =============================================

ALTER TABLE contact_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE speaker_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsorship_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Anonymous (public website) can only INSERT; no read/update/delete
DROP POLICY IF EXISTS anon_insert_contact ON contact_queries;
CREATE POLICY anon_insert_contact
ON contact_queries
FOR INSERT
TO anon
WITH CHECK (true);

DROP POLICY IF EXISTS anon_insert_speaker ON speaker_applications;
CREATE POLICY anon_insert_speaker
ON speaker_applications
FOR INSERT
TO anon
WITH CHECK (true);

DROP POLICY IF EXISTS anon_insert_sponsorship ON sponsorship_inquiries;
CREATE POLICY anon_insert_sponsorship
ON sponsorship_inquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Authenticated users may check if they are admin (self row only)
DROP POLICY IF EXISTS admins_select_self ON admins;
CREATE POLICY admins_select_self
ON admins
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Remove legacy allowlist table policy if present (ignore if table absent)
DO $$ BEGIN
  PERFORM 1 FROM pg_tables WHERE schemaname='public' AND tablename='allowed_admin_emails';
  IF FOUND THEN
    EXECUTE 'DROP POLICY IF EXISTS allowed_admin_emails_select_public ON allowed_admin_emails';
  END IF;
END $$;

-- =============================================
-- 4. ADMIN READ/UPDATE VIA RLS; PUBLIC INSERT ONLY
-- =============================================

-- Revoke any previous broad grants
REVOKE ALL ON contact_queries FROM anon;
REVOKE ALL ON speaker_applications FROM anon;
REVOKE ALL ON sponsorship_inquiries FROM anon;
REVOKE ALL ON admins FROM anon;
-- Legacy allowlist table grants cleanup (safe if table absent)
DO $$ BEGIN
  PERFORM 1 FROM pg_tables WHERE schemaname='public' AND tablename='allowed_admin_emails';
  IF FOUND THEN
    EXECUTE 'REVOKE ALL ON allowed_admin_emails FROM anon';
    EXECUTE 'REVOKE ALL ON allowed_admin_emails FROM authenticated';
  END IF;
END $$;

-- Allow only INSERT for anonymous users (no SELECT/UPDATE/DELETE)
GRANT INSERT ON contact_queries TO anon;
GRANT INSERT ON speaker_applications TO anon;
GRANT INSERT ON sponsorship_inquiries TO anon;

-- Grant necessary privileges to authenticated (admins), enforced by RLS policies
GRANT SELECT, UPDATE ON contact_queries TO authenticated;
GRANT SELECT, UPDATE ON speaker_applications TO authenticated;
GRANT SELECT, UPDATE ON sponsorship_inquiries TO authenticated;
GRANT SELECT ON admins TO authenticated;
-- Do NOT expose table rows; use a boolean function instead
-- GRANT SELECT ON allowed_admin_emails TO anon; -- removed

-- Boolean allowlist function for OTP gate (now checks admins by email)
CREATE OR REPLACE FUNCTION is_allowed_admin(email_input text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  select exists (
    select 1 from admins where lower(email) = lower(email_input)
  );
$$;

GRANT EXECUTE ON FUNCTION is_allowed_admin(text) TO anon;

-- Admin SELECT policies already created above for all three tables.
-- Add UPDATE policies restricted to admins
DROP POLICY IF EXISTS update_admin_contact ON contact_queries;
CREATE POLICY update_admin_contact
ON contact_queries FOR UPDATE
TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS update_admin_speaker ON speaker_applications;
CREATE POLICY update_admin_speaker
ON speaker_applications FOR UPDATE
TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS update_admin_sponsor ON sponsorship_inquiries;
CREATE POLICY update_admin_sponsor
ON sponsorship_inquiries FOR UPDATE
TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

-- =============================================
-- 5. SUCCESS MESSAGE
-- =============================================

SELECT 'WORKING SCHEMA APPLIED! RLS ENABLED. Public can INSERT only; admins can READ.' as status;
