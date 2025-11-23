-- Migration: Update speaker_applications table for simplified form
-- Date: 2025-11-23
-- Description: Add telegram field, make experience and audience nullable

-- Add telegram column if it doesn't exist
ALTER TABLE speaker_applications 
ADD COLUMN IF NOT EXISTS telegram TEXT;

-- Make experience nullable
ALTER TABLE speaker_applications 
ALTER COLUMN experience DROP NOT NULL;

-- Make audience nullable
ALTER TABLE speaker_applications 
ALTER COLUMN audience DROP NOT NULL;

-- Add comments to document the changes
COMMENT ON COLUMN speaker_applications.telegram IS 'Telegram handle/username';
COMMENT ON COLUMN speaker_applications.experience IS 'Optional field - removed from simplified form';
COMMENT ON COLUMN speaker_applications.audience IS 'Optional field - removed from simplified form';

