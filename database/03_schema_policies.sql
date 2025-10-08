-- Policies and grants (no destructive statements)

-- Public INSERT only
DROP POLICY IF EXISTS anon_insert_contact ON contact_queries;
CREATE POLICY anon_insert_contact ON contact_queries FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS anon_insert_speaker ON speaker_applications;
CREATE POLICY anon_insert_speaker ON speaker_applications FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS anon_insert_sponsorship ON sponsorship_inquiries;
CREATE POLICY anon_insert_sponsorship ON sponsorship_inquiries FOR INSERT TO anon WITH CHECK (true);

-- Admin self-check
DROP POLICY IF EXISTS admins_select_self ON admins;
CREATE POLICY admins_select_self ON admins FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- Admin READ policies for submissions
DROP POLICY IF EXISTS select_admin_contact ON contact_queries;
CREATE POLICY select_admin_contact ON contact_queries FOR SELECT TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS select_admin_speaker ON speaker_applications;
CREATE POLICY select_admin_speaker ON speaker_applications FOR SELECT TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS select_admin_sponsor ON sponsorship_inquiries;
CREATE POLICY select_admin_sponsor ON sponsorship_inquiries FOR SELECT TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()));

-- Admin UPDATE policies for submissions
DROP POLICY IF EXISTS update_admin_contact ON contact_queries;
CREATE POLICY update_admin_contact ON contact_queries FOR UPDATE TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS update_admin_speaker ON speaker_applications;
CREATE POLICY update_admin_speaker ON speaker_applications FOR UPDATE TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

DROP POLICY IF EXISTS update_admin_sponsor ON sponsorship_inquiries;
CREATE POLICY update_admin_sponsor ON sponsorship_inquiries FOR UPDATE TO authenticated
USING (exists (select 1 from admins a where a.user_id = auth.uid()))
WITH CHECK (exists (select 1 from admins a where a.user_id = auth.uid()));

-- Grants
REVOKE ALL ON contact_queries FROM anon;
REVOKE ALL ON speaker_applications FROM anon;
REVOKE ALL ON sponsorship_inquiries FROM anon;
REVOKE ALL ON admins FROM anon;

GRANT INSERT ON contact_queries TO anon;
GRANT INSERT ON speaker_applications TO anon;
GRANT INSERT ON sponsorship_inquiries TO anon;

GRANT SELECT, UPDATE ON contact_queries TO authenticated;
GRANT SELECT, UPDATE ON speaker_applications TO authenticated;
GRANT SELECT, UPDATE ON sponsorship_inquiries TO authenticated;
GRANT SELECT ON admins TO authenticated;


