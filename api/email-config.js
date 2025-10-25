// Email configuration for all form types
// This centralizes all email templates and makes them easily maintainable

export const EMAIL_CONFIG = {
  // Contact form configuration
  contact: {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['contact@btcindia.media'],
    getSubject: (formData) => `Contact Form: ${formData.subject}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFBF00;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #FFBF00; text-decoration: none;">${formData.email}</a></p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        <div style="background: #FFBF00; color: #000; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
          <strong>📧 REPLY TO: ${formData.email}</strong>
        </div>
        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Bitcoin Conference India website.
        </p>
      </div>
    `
  },

  // Speaker application configuration
  speaker: {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['speakers@btcindia.media'],
    getSubject: (formData) => `Speaker Application: ${formData.topicTitle || formData.name || 'New Application'}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFBF00;">New Speaker Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Job Title:</strong> ${formData.jobTitle || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Speaker Bio</h3>
          <p style="white-space: pre-wrap;">${formData.bio}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Speaking Topic</h3>
          <p><strong>Title:</strong> ${formData.topicTitle}</p>
          <h4>Abstract:</h4>
          <p style="white-space: pre-wrap;">${formData.topicAbstract}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Experience & Audience</h3>
          <h4>Speaking Experience:</h4>
          <p style="white-space: pre-wrap;">${formData.experience}</p>
          <h4>Target Audience:</h4>
          <p style="white-space: pre-wrap;">${formData.audience}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Additional Information</h3>
          <p><strong>Previous Speaking Engagements:</strong></p>
          <p style="white-space: pre-wrap;">${formData.previousSpeaking || 'Not provided'}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</p>
          <p><strong>Twitter:</strong> ${formData.twitter || 'Not provided'}</p>
          <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
        </div>

        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Submitted: ${new Date().toLocaleString()}<br>
          This email was sent from the Bitcoin Conference India website.
        </p>
      </div>
    `
  },

  // Sponsor application configuration
  sponsor: {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['sponsors@btcindia.media'],
    getSubject: (formData) => `Sponsor Application: ${formData.companyName || formData.contactName || 'New Application'}`,
    getReplyTo: (formData) => formData.contactEmail,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFBF00;">New Sponsor Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Company Information</h3>
          <p><strong>Company Name:</strong> ${formData.companyName}</p>
          <p><strong>Contact Name:</strong> ${formData.contactName}</p>
          <p><strong>Contact Email:</strong> ${formData.contactEmail}</p>
          <p><strong>Contact Phone:</strong> ${formData.contactPhone}</p>
          <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Sponsorship Details</h3>
          <p><strong>Sponsorship Type:</strong> ${formData.sponsorshipType}</p>
          <p><strong>Budget Range:</strong> ${formData.budgetRange}</p>
          <p><strong>Company Size:</strong> ${formData.companySize || 'Not provided'}</p>
          <p><strong>Industry:</strong> ${formData.industry || 'Not provided'}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Additional Information</h3>
          <p><strong>Previous Sponsorship Experience:</strong></p>
          <p style="white-space: pre-wrap;">${formData.previousSponsorship || 'Not provided'}</p>
          <p><strong>Goals:</strong></p>
          <p style="white-space: pre-wrap;">${formData.goals || 'Not provided'}</p>
        </div>

        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Submitted: ${new Date().toLocaleString()}<br>
          This email was sent from the Bitcoin Conference India website.
        </p>
      </div>
    `
  },

  // Student/Volunteer application configuration
  'student-volunteer': {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['satoshi@btcindia.media'],
    getSubject: (formData) => `Student/Volunteer Application: ${formData.name}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFBF00;">New Student/Volunteer Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>University:</strong> ${formData.university || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Application Details</h3>
          <p><strong>Role Interest:</strong> ${formData.roleInterest || 'Not provided'}</p>
          <p><strong>Availability:</strong> ${formData.availability || 'Not provided'}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>

        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Submitted: ${new Date().toLocaleString()}<br>
          This email was sent from the Bitcoin Conference India website.
        </p>
      </div>
    `
  },

  // Media partnership configuration
  'media-partnership': {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['partnerships@btcindia.media'],
    getSubject: (formData) => `Media Partnership Inquiry: ${formData.organization}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFBF00;">New Media Partnership Inquiry</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Organization Details</h3>
          <p><strong>Organization:</strong> ${formData.organization || 'Not provided'}</p>
          <p><strong>Website:</strong> ${formData.website || 'Not provided'}</p>
          <p><strong>Partnership Type:</strong> ${formData.partnershipType || 'Not provided'}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message</h3>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>

        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Submitted: ${new Date().toLocaleString()}<br>
          This email was sent from the Bitcoin Conference India website.
        </p>
      </div>
    `
  }
};

// Validation configuration for different form types
export const VALIDATION_CONFIG = {
  'sponsor': {
    emailField: 'contactEmail',
    nameField: 'contactName'
  },
  'student-volunteer': {
    emailField: 'email',
    nameField: 'name'
  },
  'default': {
    emailField: 'email',
    nameField: 'name'
  }
};
