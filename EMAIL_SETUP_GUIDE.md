# Email Integration Setup Guide

This guide will help you set up email notifications for all form submissions to be sent to your Google Workspace email using Resend.

## 📧 What This Does

When users submit any form on your website, you'll receive a beautifully formatted email notification with all the form details to your Google Workspace email. This includes:

- **General Contact** → `contact@btcindia.media`
- **Speaker Applications** → `speakers@btcindia.media`
- **Sponsor Applications** → `sponsors@btcindia.media`
- **Student/Volunteer Applications** → `volunteer@btcindia.media`
- **Media Partnership Inquiries** → `partnerships@btcindia.media`

## 🚀 Setup Steps

### 1. Create Resend Account

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Get API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Bitcoin Conference Website")
4. Copy the API key (starts with `re_`)

### 3. Add Your Domain (Optional but Recommended)

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Add your domain (e.g., `btcindia.media`)
4. Follow the DNS setup instructions
5. This improves email deliverability

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Add your Resend credentials to `.env.local`:
   ```env
   # Resend Configuration
   VITE_RESEND_API_KEY=re_your_api_key_here
   VITE_FROM_EMAIL=noreply@btcindia.media
   ```

### 5. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:5174/contact/general` (note: port 5174)
3. Fill out and submit the form
4. Check your email for the notification

## 📋 Email Features

### Beautiful HTML Emails
- **Professional formatting** with your brand colors (#FFBF00)
- **Responsive design** that looks great on all devices
- **Structured sections** for easy reading
- **Reply-to functionality** - you can reply directly to the user

### Email Routing by Form Type
- **General Contact** → `contact@btcindia.media`
- **Speaker Applications** → `speakers@btcindia.media`
- **Sponsor Applications** → `sponsors@btcindia.media`
- **Student/Volunteer** → `volunteer@btcindia.media`
- **Media Partnership** → `partnerships@btcindia.media`

### Rich Content
Each email includes:
- **Complete form data** in organized sections
- **Timestamp** of submission
- **Direct reply** to the user's email
- **Professional branding** with your colors

## 🔧 Troubleshooting

### Email Not Sending
1. Check browser console for errors
2. Verify `VITE_RESEND_API_KEY` is set correctly
3. Ensure API key has proper permissions
4. Check Resend dashboard for delivery status

### Wrong Email Address
- Update the email addresses in `src/lib/emailService.js`
- Change the `to` parameter in each function

### Domain Issues
- If using custom domain, ensure DNS records are set up correctly
- Check domain verification status in Resend dashboard

## 📊 Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- No domain restrictions
- Full API access

For higher volume, consider upgrading to a paid plan.

## 🚀 Production Deployment

1. Add the same environment variables to your production environment (Vercel, Netlify, etc.)
2. Test all forms in production
3. Monitor email delivery in Resend dashboard
4. Set up domain authentication for better deliverability

## 📞 Support

If you need help:
1. Check Resend documentation: [https://resend.com/docs](https://resend.com/docs)
2. Review browser console for error messages
3. Check Resend dashboard for delivery logs
4. Test with a simple form first

---

**Note:** This integration works alongside your existing Supabase database storage. Forms are still saved to the database AND you receive email notifications.

## 🎨 Email Preview

The emails will look professional with:
- Your brand colors (#FFBF00)
- Clean, organized sections
- All form data clearly displayed
- Easy-to-read formatting
- Direct reply capability