import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { dbHelpers } from "../lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [validationNotice, setValidationNotice] = useState("");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    
    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      const fieldLabels = {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        phone: "Phone Number",
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
      // Submit to Supabase
      const result = await dbHelpers.submitContactQuery(formData);
      console.log('Contact query submitted:', result);
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20">
      <div className="max-w-2xl w-full bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 text-white">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#FFBF00] hover:text-[#CB7608] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="font-familjen text-3xl sm:text-4xl mb-4">Contact Us</h1>
          <p className="text-[#FFFFFFCC] font-inter-semiBold">
            Have questions or feedback? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-inter-semiBold text-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-[#585858]'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-inter-semiBold text-white mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-[#585858]'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-inter-semiBold text-white mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-[#585858]'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-inter-semiBold text-white mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] focus:border-transparent ${
                errors.subject ? 'border-red-500' : 'border-[#585858]'
              }`}
              placeholder="What is this about?"
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-inter-semiBold text-white mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] focus:border-transparent resize-vertical ${
                errors.message ? 'border-red-500' : 'border-[#585858]'
              }`}
              placeholder="Tell us more about your inquiry..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submission status / validation messages above submit button */}
          {validationNotice && (
            <div className="mt-2 mb-2 p-4 bg-yellow-900/20 border border-yellow-500/50 rounded-lg">
              <p className="text-yellow-400 font-inter-semiBold">
                ⚠️ {validationNotice}
              </p>
            </div>
          )}
          {submitStatus === "success" && (
            <div className="mt-2 mb-2 p-4 bg-green-900/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 font-inter-semiBold">
                ✅ Thank you for your message! We'll be in touch shortly.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-2 mb-2 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 font-inter-semiBold">
                ❌ Something went wrong. Please try again later.
              </p>
            </div>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              label={isSubmitting ? "Sending..." : "Send Message"}
              className="w-full py-3 text-lg font-semibold"
              disabled={isSubmitting}
            />
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#FFFFFF80]">
            Or reach us directly at{" "}
            <a 
              href="mailto:contact@btcindia.media" 
              className="text-[#FFBF00] hover:underline"
            >
              contact@btcindia.media
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


