import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lajovsczgfpcpucpxxhr.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxham92c2N6Z2ZwY3B1Y3B4eGhyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTA1MTYzMSwiZXhwIjoyMDc0NjI3NjMxfQ.5Pi7M4xDLZEAZBSGacs5v6BgmR2r55gbLPmKHAuBhEU';

const SITE_URL = 'https://btc-dashboard-shubhamms.vercel.app';
const REDIRECT_URLS = [
  'https://btc-main-shubhamms.vercel.app',
  'https://btc-dashboard-shubhamms.vercel.app',
  'https://btc-dashboard-shubhamms.vercel.app/verify-otp',
  'https://btc-dashboard-shubhamms.vercel.app/dashboard',
];

async function run() {
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

  try {
    const { data: settings1, error: err1 } = await supabase.auth.admin.updateSettings({
      site_url: SITE_URL,
    });
    if (err1) throw err1;
    console.log('Updated site_url:', settings1);
  } catch (e) {
    console.error('Failed to update site_url:', e?.message || e);
  }

  try {
    const { data: settings2, error: err2 } = await supabase.auth.admin.updateSettings({
      additional_redirect_urls: REDIRECT_URLS,
    });
    if (err2) throw err2;
    console.log('Updated additional_redirect_urls:', settings2);
  } catch (e) {
    console.error('Failed to update additional_redirect_urls:', e?.message || e);
  }
}

run();
