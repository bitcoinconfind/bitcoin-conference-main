# Bitcoin Conference Forms Database Schema

This directory contains the complete database schema for the Bitcoin Conference forms system.

## 📁 Files

### Migration Files (Run in Order)
1. **`01_schema_tables.sql`** - Creates all tables and enables RLS
2. **`02_schema_functions.sql`** - Creates functions and triggers
3. **`03_schema_policies.sql`** - Creates RLS policies and grants

### Features:
- ✅ Complete table structure
- ✅ Working RLS policies with admin access
- ✅ Admin dashboard functionality
- ✅ Data migration safe (uses IF NOT EXISTS)
- ✅ Handles existing tables gracefully

## 🚀 Quick Start

### For New Projects
1. **Create Supabase project**
2. **Go to SQL Editor**
3. **Run files in order**: 01 → 02 → 03
4. **Done!** Your forms and admin dashboard are ready

### For Existing Projects (Migration)
1. **Backup your data first!**
2. **Run files in order**: 01 → 02 → 03
3. **Data is preserved** - no tables are dropped
4. **Admin access is fixed** - dashboard will work

## 📊 Database Structure

### Tables Created

1. **`contact_queries`** - Contact form submissions
2. **`speaker_applications`** - Speaker application forms
3. **`sponsorship_inquiries`** - Sponsorship inquiry forms

### Key Features

- **UUID Primary Keys** - Secure, unique identifiers
- **Automatic Timestamps** - Created/updated tracking
- **Data Validation** - Email, phone, length validation
- **Status Tracking** - New, pending, accepted, etc.
- **Priority Levels** - Low, medium, high, urgent
- **Row Level Security** - Secure data access
- **Performance Indexes** - Fast queries

## 🔧 Environment Variables

Add to your `.env.local`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 🎯 Usage

After running the schema:

1. **Contact Form** - `http://localhost:5173/contact`
2. **Speaker Application** - `http://localhost:5173/apply/speaker`
3. **Sponsor Inquiry** - `http://localhost:5173/apply/sponsor`

## 🛠️ Data Access

### Admin Dashboard
- **URL**: `https://yourdomain.com/admin`
- **Features**: View all submissions, mark as handled, filter by status
- **Authentication**: Only users in `admins` table can access

### Direct Database Access
1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. View `contact_queries`, `speaker_applications`, `sponsorship_inquiries`

### Adding Admin Users
```sql
-- Add admin user (replace with actual user_id and email)
INSERT INTO admins (user_id, email) 
VALUES ('user-uuid-here', 'admin@example.com');
```

## 📈 Monitoring

Check your Supabase dashboard to see:
- Form submissions in real-time
- Data validation errors
- Performance metrics
- Security logs

## 🔒 Security

- **RLS Enabled** - Data is protected at the database level
- **Input Validation** - Client and server-side validation
- **Email Validation** - Proper email format checking
- **Phone Validation** - International phone number support
- **SQL Injection Protection** - Parameterized queries

## 🚨 Troubleshooting

### Common Issues

1. **"Admin can't see data"** - Run `03_schema_policies.sql` (missing SELECT policies)
2. **"RLS policy violation"** - Run all 3 files in order
3. **"Table doesn't exist"** - Run `01_schema_tables.sql`
4. **"Permission denied"** - Run `03_schema_policies.sql`

### Quick Fix

- **Admin dashboard not working?** → Run `03_schema_policies.sql`
- **Any other issue?** → Run all 3 files in order: 01 → 02 → 03

## 📝 Migration Notes

- **Data Safe**: All files use `IF NOT EXISTS` and `CREATE OR REPLACE`
- **No Data Loss**: Tables are never dropped, only created or updated
- **Admin Ready**: Dashboard works immediately after running all 3 files
- **Backward Compatible**: Works with existing data and tables

---

**Ready to migrate!** Run the 3 files in order and your admin dashboard will work! 🚀