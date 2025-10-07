// Supabase configuration
// Fail fast if env vars are missing in production to surface clear error to users
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  // Throwing here helps us catch misconfiguration quickly during deploy
  console.error('Missing Supabase env: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
}

// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database helper functions
export const dbHelpers = {
  // Contact queries
  async submitContactQuery(data) {
    const { data: result, error } = await supabase
      .from('contact_queries')
      .insert([{ 
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: data.phone || null,
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return result;
  },

  // Speaker applications
  async submitSpeakerApplication(data) {
    const { data: result, error } = await supabase
      .from('speaker_applications')
      .insert([{
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || null,
        job_title: data.jobTitle || null,
        bio: data.bio,
        topic_title: data.topicTitle,
        topic_abstract: data.topicAbstract,
        previous_speaking: data.previousSpeaking || null,
        linkedin: data.linkedin || null,
        twitter: data.twitter || null,
        website: data.website || null,
        experience: data.experience,
        audience: data.audience,
        status: 'pending',
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return result;
  },

  // Sponsorship inquiries
  async submitSponsorshipInquiry(data) {
    const { data: result, error } = await supabase
      .from('sponsorship_inquiries')
      .insert([{ 
        company_name: data.companyName,
        contact_name: data.contactName,
        contact_email: data.contactEmail,
        contact_phone: data.contactPhone,
        website: data.website || null,
        linkedin: data.linkedin || null,
        sponsorship_type: data.sponsorshipType,
        budget_range: data.budgetRange,
        message: data.message,
        company_size: data.companySize || null,
        industry: data.industry || null,
        previous_sponsorship: data.previousSponsorship || null,
        goals: data.goals || null,
        status: 'pending',
        created_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return result;
  }
};
