import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { dbHelpers } from "../lib/supabase";

const ApplySponsor = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    linkedin: "",
    sponsorshipType: "",
    budgetRange: "",
    message: "",
    companySize: "",
    industry: "",
    previousSponsorship: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [validationNotice, setValidationNotice] = useState("");

  const sponsorshipTypes = [
    "Platinum Sponsor",
    "Gold Sponsor", 
    "Silver Sponsor",
    "Bronze Sponsor",
    "Exhibitor",
    "Media Partner",
    "Custom Package",
    "Not Sure"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Custom Budget",
    "Prefer not to specify"
  ];

  const companySizes = [
    "Startup (1-10 employees)",
    "Small (11-50 employees)",
    "Medium (51-200 employees)",
    "Large (201-1000 employees)",
    "Enterprise (1000+ employees)"
  ];

  const industries = [
    "Cryptocurrency/Blockchain",
    "Financial Services",
    "Technology",
    "Investment/VC",
    "Media",
    "Education",
    "Government",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact person name is required";
    }
    
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Email is invalid";
    }
    
    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.contactPhone.replace(/\s/g, ""))) {
      newErrors.contactPhone = "Phone number is invalid";
    }
    
    if (!formData.sponsorshipType) {
      newErrors.sponsorshipType = "Please select a sponsorship type";
    }
    
    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select a budget range";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please provide additional information";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (minimum 20 characters)";
    }
    
    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      const fieldLabels = {
        companyName: "Company Name",
        contactName: "Contact Person Name",
        contactEmail: "Contact Email",
        contactPhone: "Contact Phone",
        sponsorshipType: "Type of Sponsorship",
        budgetRange: "Budget Range",
        message: "Additional Information",
      };

      const firstErrorKey = Object.keys(newErrors)[0];
      const label = fieldLabels[firstErrorKey] || firstErrorKey;
      setValidationNotice(`Please update the ${label} field.`);

      const el = document.getElementById(firstErrorKey);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (typeof el.focus === 'function') {
          try { el.focus({ preventScroll: true }); } catch {}
        }
      }
    } else {
      setValidationNotice("");
    }

    return !hasErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    if (validationNotice) {
      setValidationNotice("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setValidationNotice("");
    
    try {
      // Normalize URLs to accept values without protocol
      const normalizeUrl = (value) => {
        if (!value) return "";
        const trimmed = value.trim();
        if (/^https?:\/\//i.test(trimmed)) return trimmed;
        return `https://${trimmed}`;
      };

      const payload = {
        ...formData,
        website: normalizeUrl(formData.website),
        linkedin: normalizeUrl(formData.linkedin),
      };
      // Submit to Supabase
      const result = await dbHelpers.submitSponsorshipInquiry(payload);
      console.log('Sponsorship inquiry submitted:', result);
      
      setSubmitStatus("success");
      setFormData({
        companyName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        website: "",
        linkedin: "",
        sponsorshipType: "",
        budgetRange: "",
        message: "",
        companySize: "",
        industry: "",
        previousSponsorship: "",
        goals: ""
      });
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen w-full px-4 sm:px-8 lg:px-20 py-20 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#f7931a] hover:text-[#CB7608] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="metric-value mb-2">
            Become a Sponsor
          </h1>
          <p className="metric-label max-w-3xl mx-auto">
            Partner with Bitcoin India and reach a dedicated audience of crypto enthusiasts, 
            investors, and industry leaders. Let's create something unforgettable together.
          </p>
        </div>

        

        <div className="bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="metric-value mb-4">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-inter-semiBold text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.companyName ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-inter-semiBold text-white mb-2">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-inter-semiBold text-white mb-2">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-inter-semiBold text-white mb-2">
                    Company Website
                  </label>
                  <input
                    type="text"
                    inputMode="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="metric-value mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactName" className="block text-sm font-inter-semiBold text-white mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.contactName ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter contact person's name"
                  />
                  {errors.contactName && <p className="text-red-400 text-sm mt-1">{errors.contactName}</p>}
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-inter-semiBold text-white mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.contactEmail ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter contact email address"
                  />
                  {errors.contactEmail && <p className="text-red-400 text-sm mt-1">{errors.contactEmail}</p>}
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-inter-semiBold text-white mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.contactPhone ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter contact phone number"
                  />
                  {errors.contactPhone && <p className="text-red-400 text-sm mt-1">{errors.contactPhone}</p>}
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-inter-semiBold text-white mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    inputMode="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>
              </div>
            </div>

            {/* Sponsorship Details */}
            <div>
              <h2 className="metric-value mb-4">Sponsorship Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sponsorshipType" className="block text-sm font-inter-semiBold text-white mb-2">
                    Type of Sponsorship *
                  </label>
                  <select
                    id="sponsorshipType"
                    name="sponsorshipType"
                    value={formData.sponsorshipType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.sponsorshipType ? 'border-red-500' : 'border-[#585858]'
                    }`}
                  >
                    <option value="">Select sponsorship type</option>
                    {sponsorshipTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.sponsorshipType && <p className="text-red-400 text-sm mt-1">{errors.sponsorshipType}</p>}
                </div>

                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-inter-semiBold text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.budgetRange ? 'border-red-500' : 'border-[#585858]'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budgetRange && <p className="text-red-400 text-sm mt-1">{errors.budgetRange}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="metric-value mb-4">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="goals" className="block text-sm font-inter-semiBold text-white mb-2">
                    Sponsorship Goals
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical"
                    placeholder="What are your main goals for sponsoring this event?"
                  />
                </div>

                <div>
                  <label htmlFor="previousSponsorship" className="block text-sm font-inter-semiBold text-white mb-2">
                    Previous Sponsorship Experience
                  </label>
                  <textarea
                    id="previousSponsorship"
                    name="previousSponsorship"
                    value={formData.previousSponsorship}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical"
                    placeholder="Have you sponsored similar events before? Please describe your experience."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-inter-semiBold text-white mb-2">
                    Additional Information *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Tell us more about your company, specific requirements, or any questions you have about sponsorship opportunities..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  <p className="text-gray-400 text-sm mt-1">Minimum 20 characters</p>
                </div>
              </div>
            </div>

            {/* Submission status / validation messages above submit button */}
            {validationNotice && (
              <div className="mt-2 mb-4 p-4 bg-yellow-900/20 border border-yellow-500/50 rounded-lg">
                <p className="text-yellow-400 font-inter-semiBold">
                  ⚠️ {validationNotice}
                </p>
              </div>
            )}
            {submitStatus === "success" && (
              <div className="mt-2 mb-4 p-4 bg-green-900/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-inter-semiBold">
                  ✅ Thank you for your interest! Our sponsorship team will review your inquiry and get back to you within 2 business days.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-2 mb-4 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 font-inter-semiBold">
                  ❌ Something went wrong. Please try again later.
                </p>
              </div>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                label={isSubmitting ? "Submitting Inquiry..." : "Submit Sponsorship Inquiry"}
                className="w-full py-4 text-lg font-semibold"
                disabled={isSubmitting}
              />
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#FFFFFF80]">
              Questions? Contact our sponsorship team at{" "}
              <a 
                href="mailto:sponsors@btcindia.media" 
                className="text-[#f7931a] hover:underline"
              >
                sponsors@btcindia.media
              </a>
            </p>
            <p className="text-xs text-[#FFFFFF60] mt-2">
              Custom opportunities available. Limited inventory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySponsor;
