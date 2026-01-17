// Email configuration for all form types
// This centralizes all email templates and makes them easily maintainable

export const EMAIL_CONFIG = {
  // Contact form configuration
  contact: {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['contact@bitcoinforumindia.com'],
    getSubject: (formData) => `Contact Form: ${formData.subject}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Email Header with Logos -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FFBF00;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/logo/BitLogo.png" alt="Bitcoin Conference India" style="height: 40px; margin-right: 20px;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/bimi/bimi-logo.svg" alt="BIMI" style="height: 40px;">
        </div>
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
    to: ['contact@bitcoinforumindia.com'],
    getSubject: (formData) => `Speaker Application: ${formData.topicTitle || formData.name || 'New Application'}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Email Header with Logos -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FFBF00;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/logo/BitLogo.png" alt="Bitcoin Conference India" style="height: 40px; margin-right: 20px;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/bimi/bimi-logo.svg" alt="BIMI" style="height: 40px;">
        </div>
        <h2 style="color: #FFBF00;">New Speaker Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Personal Information</h3>
          <p><strong>Full Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Ph.no:</strong> ${formData.phone}</p>
          <p><strong>Company/Org:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Title:</strong> ${formData.jobTitle || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Speaker Profile</h3>
          <p style="white-space: pre-wrap;">${formData.bio}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Speaking Topic</h3>
          <p><strong>Topic Title:</strong> ${formData.topicTitle}</p>
          <h4>Topic Abstract:</h4>
          <p style="white-space: pre-wrap;">${formData.topicAbstract}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Social Links</h3>
          <p><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</p>
          <p><strong>Telegram:</strong> ${formData.telegram || 'Not provided'}</p>
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
    to: ['contact@bitcoinforumindia.com'],
    getSubject: (formData) => `Sponsor Application: ${formData.companyName || formData.contactName || 'New Application'}`,
    getReplyTo: (formData) => formData.contactEmail,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Email Header with Logos -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FFBF00;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/logo/BitLogo.png" alt="Bitcoin Conference India" style="height: 40px; margin-right: 20px;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/bimi/bimi-logo.svg" alt="BIMI" style="height: 40px;">
        </div>
        <h2 style="color: #FFBF00;">New Sponsor Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Company Information</h3>
          <p><strong>Company Name:</strong> ${formData.companyName}</p>
          <p><strong>Company Website:</strong> ${formData.website || 'Not provided'}</p>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #FFBF00; margin: 20px 0;">
          <h3>Contact Information</h3>
          <p><strong>Contact Person Name:</strong> ${formData.contactName}</p>
          <p><strong>Email:</strong> ${formData.contactEmail}</p>
          <p><strong>Phone No:</strong> ${formData.contactPhone}</p>
          <p><strong>LinkedIn:</strong> ${formData.linkedin || 'Not provided'}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Additional Information</h3>
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

  // Student/Volunteer application configuration
  'student-volunteer': {
    from: process.env.VITE_FROM_EMAIL || 'noreply@bitcoinconferenceindia.com',
    to: ['contact@bitcoinforumindia.com'],
    getSubject: (formData) => `Student/Volunteer Application: ${formData.name}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Email Header with Logos -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FFBF00;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/logo/BitLogo.png" alt="Bitcoin Conference India" style="height: 40px; margin-right: 20px;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/bimi/bimi-logo.svg" alt="BIMI" style="height: 40px;">
        </div>
        <h2 style="color: #FFBF00;">New Student/Volunteer Application</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>University:</strong> ${formData.university || 'Not provided'}</p>
          <p><strong>City:</strong> ${formData.city || 'Not provided'}</p>
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
    to: ['contact@bitcoinforumindia.com'],
    getSubject: (formData) => `Media Partnership Inquiry: ${formData.organization}`,
    getReplyTo: (formData) => formData.email,
    getHtml: (formData) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Email Header with Logos -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #FFBF00;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/logo/BitLogo.png" alt="Bitcoin Conference India" style="height: 40px; margin-right: 20px;">
          <img src="https://bitcoinconferenceindia.com/assets/imgs/bimi/bimi-logo.svg" alt="BIMI" style="height: 40px;">
        </div>
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
