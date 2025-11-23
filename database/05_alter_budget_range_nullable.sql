-- Migration: Make budget_range optional in sponsorship_inquiries table
-- Date: 2025-11-23
-- Description: Remove NOT NULL constraint from budget_range as it's no longer required in the form

-- Make budget_range nullable
ALTER TABLE sponsorship_inquiries 
ALTER COLUMN budget_range DROP NOT NULL;

-- Add comment to document the change
COMMENT ON COLUMN sponsorship_inquiries.budget_range IS 'Optional field - removed from simplified sponsorship form';

