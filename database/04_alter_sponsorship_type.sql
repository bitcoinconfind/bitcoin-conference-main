-- Migration: Make sponsorship_type optional in sponsorship_inquiries table
-- Date: 2025-01-12
-- Description: Remove NOT NULL constraint from sponsorship_type as it's no longer required in the form

-- Make sponsorship_type nullable
ALTER TABLE sponsorship_inquiries 
ALTER COLUMN sponsorship_type DROP NOT NULL;

-- Add comment to document the change
COMMENT ON COLUMN sponsorship_inquiries.sponsorship_type IS 'Optional field - sponsors can specify custom packages in the message field instead';

