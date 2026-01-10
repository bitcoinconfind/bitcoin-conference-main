-- Tables only (no destructive drops)

-- Admins table (holds admin identity and OTP allowlist)
CREATE TABLE IF NOT EXISTS admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
ALTER TABLE admins ADD COLUMN IF NOT EXISTS email TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS admins_email_unique ON admins (lower(email));

-- Contact Queries
CREATE TABLE IF NOT EXISTS contact_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  phone TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Speaker Applications
CREATE TABLE IF NOT EXISTS speaker_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  job_title TEXT,
  bio TEXT NOT NULL,
  topic_title TEXT NOT NULL,
  topic_abstract TEXT NOT NULL,
  linkedin TEXT,
  telegram TEXT,
  website TEXT,
  experience TEXT,
  audience TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sponsorship Inquiries
CREATE TABLE IF NOT EXISTS sponsorship_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  website TEXT,
  linkedin TEXT,
  sponsorship_type TEXT,
  budget_range TEXT,
  message TEXT NOT NULL,
  company_size TEXT,
  industry TEXT,
  previous_sponsorship TEXT,
  goals TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE speaker_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsorship_inquiries ENABLE ROW LEVEL SECURITY;


-- Student/Volunteer Queries
CREATE TABLE IF NOT EXISTS student_volunteer_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  university TEXT,
  role_interest TEXT,
  availability TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media & Partnership Queries
CREATE TABLE IF NOT EXISTS media_partnership_queries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  website TEXT,
  partnership_type TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for new tables
ALTER TABLE student_volunteer_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_partnership_queries ENABLE ROW LEVEL SECURITY;

