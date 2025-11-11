## Admin Access Setup (Supabase Auth + OTP)

Follow these steps to enable and manage the admin dashboard securely.

### 1) Configure Supabase Auth
- Authentication → Providers → Email
  - Enable Email OTP
  - Turn OFF “Allow new users to sign up” (no public signups)
- Optional: Authentication → Settings → Email domain allowlist → add org domains

### 2) Apply the Database Schema
Run the complete schema in `database/complete_schema.sql` in the Supabase SQL editor. It:
- Creates tables for forms
- Enables RLS
- Allows public INSERT only
- Creates `admins` and `allowed_admin_emails` tables
- Adds RLS policies so only admins can SELECT/UPDATE form data

### 3) Allowlist Admin Emails (who may request OTP)
Insert allowed emails into `allowed_admin_emails`:

```sql
insert into allowed_admin_emails(email) values
('admin1@yourdomain.com'),
('admin2@yourdomain.com');
```

Only project owners can modify this table. The login UI checks this table before sending an OTP.

### 4) Create Admin Users and Grant Admin Role
Create/invite users in Supabase → Authentication → Users. Then add each user’s UUID to `admins`:

```sql
insert into admins (user_id)
select id from auth.users where email = 'admin1@yourdomain.com';
```

Admins (present in `admins`) can read/update statuses; non-admins cannot.

### 5) App Environment Variables
Set these in `.env.local` (and in Vercel for production):

```
VITE_SUPABASE_URL=YOUR_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

### 6) Routes and Access
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


