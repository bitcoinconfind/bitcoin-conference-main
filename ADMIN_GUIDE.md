## Admin Access Setup (Supabase Auth + OTP)

Follow these steps to enable and manage the admin dashboard securely.

### 1) Configure Supabase Auth
- Authentication → Providers → Email
  - Enable Email OTP
  - Turn OFF “Allow new users to sign up” (no public signups)
- Optional: Authentication → Settings → Email domain allowlist → add org domains

### 2) Apply the Database Schema
Run these SQL files **in order** in the Supabase SQL editor:

1. `database/01_schema_tables.sql` - Creates tables (admins, contact_queries, speaker_applications, sponsorship_inquiries)
2. `database/02_schema_functions.sql` - Creates functions (is_allowed_admin, set_admin_email) and triggers
3. `database/03_schema_policies.sql` - Applies RLS policies (anon INSERT only, admin SELECT/UPDATE)

This setup:
- Enables RLS on all tables
- Allows public INSERT only
- Grants admins SELECT/UPDATE via RLS policies

### 3) Create Admin Users and Grant Admin Role
Create/invite users in Supabase → Authentication → Users. Then add each user to `admins`:

```sql
-- Add admin (email auto-fills from auth.users via trigger)
insert into admins (user_id)
select id from auth.users where email = 'admin@yourdomain.com';
```

**What happens:**
- The `set_admin_email()` trigger automatically populates the `email` column from `auth.users`
- The `is_allowed_admin(email)` function checks if the email exists in `admins` before sending OTP
- Only users in `admins` can read/update form submissions via RLS policies

### 4) App Environment Variables
Set these in `.env.local` (and in Vercel for production):

```
VITE_SUPABASE_URL=YOUR_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

### 5) Routes and Access
- Admin login: `/admin/login` (Email OTP)
- Admin dashboard: `/admin` (auto-redirects to login if unauthorized)

The app does not link these routes in the public UI. `robots.txt` blocks crawling. Pages also add `noindex` at runtime.

### 7) Admin Actions
- View latest submissions for Contact, Speakers, Sponsors
- Filter by status (All/Pending/Handled)
- Pagination (20 per page)
- Mark a record as handled (updates `status` via RLS policy)

### 8) Security Notes
- Service role key is NOT exposed; reads happen client-side under RLS allowing only admins
- Public can only INSERT; they cannot read or modify others’ data
- Only owners can edit `allowed_admin_emails` and `admins`

### 9) Troubleshooting
- Can’t send OTP: ensure email is in `allowed_admin_emails`
- Can’t access `/admin`: ensure user exists in `auth.users` AND their `user_id` is in `admins`
- Form submissions fail: confirm `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set and tables exist


