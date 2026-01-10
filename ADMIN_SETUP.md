# Admin Setup Guide: How to Create Admin Users

This guide explains how to set up admin access for your Bitcoin Conference India forms.

## 🔐 **The Problem**

The admin dashboard was "unrestricted" because we didn't define who is an admin. Now we have a proper admin system that only allows designated users to access form submissions.

## 🚀 **Step-by-Step Setup**

### **Step 1: Set Up Supabase Authentication**

1. **Go to** your Supabase dashboard
2. **Navigate to** Authentication → Settings
3. **Enable** email authentication (if not already enabled)
4. **Configure** your site URL (e.g., `http://localhost:5173` for development)

### **Step 2: Create Your First Admin User**

#### **Option A: Sign Up Through Your App (Recommended)**
1. **Create a sign-up page** in your app (or use Supabase Auth UI)
2. **Sign up** with your admin email
3. **Note down** your user ID from the auth.users table

#### **Option B: Create User Directly in Supabase**
1. **Go to** Authentication → Users
2. **Click** "Add user"
3. **Enter** your email and password
4. **Click** "Create user"
5. **Copy** the User ID from the user details

### **Step 3: Add Yourself as Admin**

1. **Go to** SQL Editor in Supabase
2. **Run this query** (replace with your actual values):

```sql
-- Replace 'your-user-id' with the actual user ID from auth.users
-- Replace 'your-email@example.com' with your actual email
INSERT INTO admin_users (user_id, email, role) VALUES
('your-user-id-from-auth-users', 'your-email@example.com', 'super_admin');
```

### **Step 4: Verify Admin Access**

1. **Sign in** to your app with your admin email
2. **Go to** `/admin` dashboard
3. **You should now see** all form submissions
4. **Test** that you can view and update records

## 👥 **Adding More Admin Users**

### **Method 1: Through SQL (Quick)**
```sql
-- Add another admin user
INSERT INTO admin_users (user_id, email, role) VALUES
('another-user-id', 'admin2@example.com', 'admin');
```

### **Method 2: Through Your App (Future)**
Create an admin management page where super_admins can add new admins.

## 🔑 **Admin Roles**

| Role | Permissions |
|------|-------------|
| **super_admin** | Full access + can manage other admins |
| **admin** | Can view and update form submissions |

## 🛡️ **Security Features**

### **What's Protected Now**
- ✅ **Only admin users** can view form submissions
- ✅ **Public users** can only submit forms
- ✅ **Regular authenticated users** cannot access admin data
- ✅ **Admin dashboard** is restricted to designated admins

### **How It Works**
1. **User signs in** with their email/password
2. **System checks** if they're in the `admin_users` table
3. **If yes**: They can access admin dashboard
4. **If no**: They get "Access Denied" or redirected

## 🔧 **Troubleshooting**

### **"Access Denied" Error**
- **Check** if you're signed in with the correct email
- **Verify** your user ID is in the `admin_users` table
- **Ensure** you ran the SQL query correctly

### **Can't See Form Submissions**
- **Check** if RLS policies are applied correctly
- **Verify** your admin user record exists
- **Test** with a simple query: `SELECT * FROM admin_users;`

### **Admin Dashboard Shows "No Submissions"**
- **Check** if forms are actually submitting data
- **Verify** the Supabase connection is working
- **Test** with a direct database query

## 📋 **Quick Checklist**

- [ ] Supabase Authentication enabled
- [ ] Created admin user account
- [ ] Added user to `admin_users` table
- [ ] Tested admin dashboard access
- [ ] Verified form submissions are visible
- [ ] Tested updating submission status

## 🚨 **Important Security Notes**

1. **Never share** your Supabase service role key
2. **Use strong passwords** for admin accounts
3. **Regularly review** who has admin access
4. **Remove** admin access for users who no longer need it
5. **Monitor** admin activity in Supabase logs

## 🎯 **Next Steps After Setup**

1. **Test** all three forms (Contact, Speaker, Sponsor)
2. **Submit** test data to verify it appears in admin dashboard
3. **Practice** updating submission statuses
4. **Add** additional admin users as needed
5. **Set up** regular monitoring of submissions

## 📞 **Need Help?**

If you're still having issues:
1. **Check** the Supabase logs for errors
2. **Verify** all SQL queries ran successfully
3. **Test** with a simple admin user first
4. **Contact** the development team for support

Remember: The key is that only users in the `admin_users` table can access the form submissions. Everyone else gets blocked by Row Level Security (RLS) policies.
