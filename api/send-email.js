import { Resend } from 'resend';
import { EMAIL_CONFIG, VALIDATION_CONFIG } from './email-config.js';

const resend = new Resend(process.env.RESEND_API_KEY);

// Check if Resend is configured
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY environment variable is not set');
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const { formType, formData } = req.body;

    if (!formType || !formData) {
      return res.status(400).json({ error: 'Missing formType or formData' });
    }

    // Get validation config for this form type
    const validationConfig = VALIDATION_CONFIG[formType] || VALIDATION_CONFIG.default;
    
    // Basic validation - check different field names based on form type
    const hasValidEmail = formData[validationConfig.emailField];
    const hasValidName = formData[validationConfig.nameField];
    
    if (!hasValidEmail || !hasValidName) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Get email configuration for this form type
    const emailConfig = EMAIL_CONFIG[formType];
    
    if (!emailConfig) {
      return res.status(400).json({ error: 'Invalid form type' });
    }

    // Build email configuration using the config functions
    const emailData = {
      from: emailConfig.from,
      to: emailConfig.to,
      subject: emailConfig.getSubject(formData),
      html: emailConfig.getHtml(formData),
      reply_to: emailConfig.getReplyTo(formData)
    };

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}