# Bitcoin Conference Forms Database Schema

This directory contains the complete database schema for the Bitcoin Conference forms system.

## 📁 Files

### `complete_schema.sql` - Complete Setup
**This is the ONLY schema file you need**

Features:
- ✅ Complete table structure
- ✅ Working RLS policies
- ✅ No admin complexity
- ✅ Just forms working
- ✅ Handles existing tables gracefully

## 🚀 Quick Start

### For Any Project (New or Existing)

1. **Create Supabase project** (if new)
2. **Go to SQL Editor**
3. **Copy and paste** `complete_schema.sql`
4. **Click "Run"**
5. **Done!** Your forms are ready

**This works for both new projects and fixing existing ones!**

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

To view form submissions:
1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. View `contact_queries`, `speaker_applications`, `sponsorship_inquiries`

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

1. **"RLS policy violation"** - Run `complete_schema.sql`
2. **"Table doesn't exist"** - Run `complete_schema.sql`
3. **"Permission denied"** - Run `complete_schema.sql`

### Quick Fix

- **Any issue?** → Run `complete_schema.sql` (it handles everything!)

## 📝 Notes

- Simple and clean approach
- No admin complexity
- Just forms working
- Perfect for form collection websites

---

**Ready to use!** Choose your schema and get started! 🚀