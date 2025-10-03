# Admin Guide: Managing Form Submissions

This guide explains how to access, view, and manage all form submissions from your Bitcoin Conference India website.

## 🚀 **Quick Access Methods**

### **Method 1: Supabase Dashboard (Recommended)**
1. **Go to**: [supabase.com](https://supabase.com)
2. **Sign in** to your account
3. **Select** your Bitcoin Conference project
4. **Click** "Table Editor" in the sidebar
5. **View tables**:
   - `contact_queries` - Contact Us submissions
   - `speaker_applications` - Speaker applications
   - `sponsorship_inquiries` - Sponsor inquiries

### **Method 2: Admin Dashboard (Custom)**
1. **Go to**: `http://localhost:5173/admin`
2. **View** all submissions in one place
3. **Filter** by type (Contact, Speaker, Sponsor)
4. **See** statistics and counts

### **Method 3: SQL Queries (Advanced)**
1. **Go to** Supabase SQL Editor
2. **Run queries** to get specific data

## 📊 **Understanding Your Data**

### **Contact Queries Table**
- **Purpose**: General inquiries and questions
- **Key Fields**: name, email, subject, message, phone
- **Status**: Always "pending" (no approval needed)

### **Speaker Applications Table**
- **Purpose**: People applying to speak at the conference
- **Key Fields**: name, email, bio, topic_title, topic_abstract, experience
- **Status**: pending, approved, rejected
- **Action Required**: Review and approve/reject applications

### **Sponsorship Inquiries Table**
- **Purpose**: Companies interested in sponsoring
- **Key Fields**: company_name, contact_name, sponsorship_type, budget_range
- **Status**: pending, approved, rejected
- **Action Required**: Follow up with potential sponsors

## 🔍 **Common Queries for Management**

### **View All Recent Submissions**
```sql
SELECT * FROM admin_dashboard 
ORDER BY created_at DESC 
LIMIT 50;
```

### **Count Submissions by Type**
```sql
SELECT 
  'Contact Queries' as type, COUNT(*) as count FROM contact_queries
UNION ALL
SELECT 
  'Speaker Applications' as type, COUNT(*) as count FROM speaker_applications
UNION ALL
SELECT 
  'Sponsorship Inquiries' as type, COUNT(*) as count FROM sponsorship_inquiries;
```

### **View Pending Speaker Applications**
```sql
SELECT * FROM speaker_applications 
WHERE status = 'pending' 
ORDER BY created_at DESC;
```

### **View Pending Sponsorship Inquiries**
```sql
SELECT * FROM sponsorship_inquiries 
WHERE status = 'pending' 
ORDER BY created_at DESC;
```

### **View Submissions from Last 7 Days**
```sql
SELECT * FROM admin_dashboard 
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

## 📧 **Managing Submissions**

### **For Contact Queries**
1. **Read** the message and subject
2. **Reply** via email to the provided email address
3. **No status change** needed (these are just inquiries)

### **For Speaker Applications**
1. **Review** the bio and topic details
2. **Check** their experience and audience description
3. **Update status** to "approved" or "rejected"
4. **Contact** them with your decision

### **For Sponsorship Inquiries**
1. **Review** company details and budget range
2. **Check** sponsorship type and goals
3. **Update status** to "approved" or "rejected"
4. **Follow up** with next steps

## 🔄 **Updating Submission Status**

### **In Supabase Dashboard**
1. **Click** on the table (e.g., `speaker_applications`)
2. **Find** the submission you want to update
3. **Click** on the status field
4. **Change** from "pending" to "approved" or "rejected"
5. **Save** the changes

### **Using SQL (Advanced)**
```sql
-- Approve a speaker application
UPDATE speaker_applications 
SET status = 'approved' 
WHERE id = 'your-submission-id';

-- Reject a sponsorship inquiry
UPDATE sponsorship_inquiries 
SET status = 'rejected' 
WHERE id = 'your-submission-id';
```

## 📈 **Monitoring and Analytics**

### **Daily Check**
- **Check** new submissions in the morning
- **Review** pending applications
- **Follow up** on approved submissions

### **Weekly Review**
- **Count** total submissions by type
- **Identify** trends in applications
- **Plan** follow-up actions

### **Monthly Analysis**
- **Track** conversion rates (pending → approved)
- **Analyze** popular sponsorship types
- **Review** speaker application quality

## 🚨 **Important Notes**

### **Data Security**
- **Only authenticated users** can view submissions
- **Public users** can only submit forms
- **Never share** your Supabase credentials

### **Backup**
- **Export data** regularly from Supabase
- **Download** important submissions
- **Keep** records of decisions made

### **Privacy**
- **Handle personal data** according to privacy laws
- **Secure** email addresses and phone numbers
- **Delete** old submissions if needed

## 🛠️ **Troubleshooting**

### **Can't See Submissions**
- **Check** if you're signed in to Supabase
- **Verify** RLS policies are set correctly
- **Ensure** you have the right permissions

### **Forms Not Submitting**
- **Check** browser console for errors
- **Verify** Supabase credentials are correct
- **Test** with a simple form submission

### **Missing Data**
- **Check** if validation is blocking submissions
- **Verify** all required fields are filled
- **Look** for error messages in console

## 📞 **Support**

If you need help with managing submissions:
1. **Check** this guide first
2. **Review** Supabase documentation
3. **Contact** the development team

## 🎯 **Next Steps**

1. **Set up** your Supabase project
2. **Run** the database schema
3. **Test** form submissions
4. **Access** your admin dashboard
5. **Start** managing submissions!

Remember: The key to good form management is regular checking and timely follow-up with applicants and potential sponsors.
