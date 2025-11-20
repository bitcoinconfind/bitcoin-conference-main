# Database Migration Instructions

## Recent Changes (January 2025)

### Sponsorship Type Field Made Optional

**Date:** January 12, 2025

**Reason:** The sponsorship type field has been removed from the sponsor application form to simplify the application process. Sponsors can now specify their needs directly in the message field.

### How to Apply This Migration

If you have an **existing database**, run the migration script:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the migration file: `04_alter_sponsorship_type.sql`

```sql
-- Make sponsorship_type nullable
ALTER TABLE sponsorship_inquiries 
ALTER COLUMN sponsorship_type DROP NOT NULL;
```

### For New Deployments

The main schema file (`01_schema_tables.sql`) has been updated. New deployments will automatically have the correct schema.

### Changes Made

**Files Updated:**
- ✅ `database/01_schema_tables.sql` - Updated base schema
- ✅ `database/04_alter_sponsorship_type.sql` - Migration script for existing databases
- ✅ `src/pages/ApplySponsor.jsx` - Removed sponsorship type field from form
- ✅ `src/lib/supabase.js` - Updated to handle null sponsorship_type
- ✅ Added more industry options (Bitcoin Mining, Hardware Wallet, etc.)

### Industry Options Added

New industry options for better categorization:
- Bitcoin Mining
- Hardware Wallet
- Crypto Exchange
- Payment Processor
- Custody & Security
- Banking & Traditional Finance
- Asset Management
- Software Development
- Infrastructure Provider
- Legal & Compliance
- Consulting

### Budget Ranges (Unchanged)

The budget ranges remain the same:
- $5,000 - $10,000
- $10,000 - $25,000
- $25,000 - $50,000
- $50,000 - $100,000
- $100,000+
- Custom Budget
- Prefer not to specify

