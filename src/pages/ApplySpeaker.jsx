import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import { dbHelpers } from "../lib/supabase";

const ApplySpeaker = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    bio: "",
    topicTitle: "",
    topicAbstract: "",
    previousSpeaking: "",
    linkedin: "",
    twitter: "",
    website: "",
    experience: "",
    audience: ""
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    
    if (!formData.bio.trim()) {
      newErrors.bio = "Speaker bio is required";
    } else if (formData.bio.trim().length < 50) {
      newErrors.bio = "Bio must be at least 50 characters";
    }
    
    if (!formData.topicTitle.trim()) {
      newErrors.topicTitle = "Topic title is required";
    }
    
    if (!formData.topicAbstract.trim()) {
      newErrors.topicAbstract = "Topic abstract is required";
    } else if (formData.topicAbstract.trim().length < 100) {
      newErrors.topicAbstract = "Abstract must be at least 100 characters";
    }
    
    if (!formData.experience.trim()) {
      newErrors.experience = "Please describe your speaking experience";
    }
    
    if (!formData.audience.trim()) {
      newErrors.audience = "Please describe your target audience";
    }
    
    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      const fieldLabels = {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        bio: "Speaker Bio",
        topicTitle: "Topic Title",
        topicAbstract: "Topic Abstract",
        experience: "Speaking Experience",
        audience: "Target Audience",
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
      const result = await dbHelpers.submitSpeakerApplication(formData);
      console.log('Speaker application submitted:', result);
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        bio: "",
        topicTitle: "",
        topicAbstract: "",
        previousSpeaking: "",
        linkedin: "",
        twitter: "",
        website: "",
        experience: "",
        audience: ""
      });
    } catch (error) {
      console.error("Error submitting application:", error);
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
            Apply to Speak
          </h1>
          <p className="metric-label max-w-3xl mx-auto">
            Share your expertise with the Bitcoin community at India's premier conference. 
            We're looking for thought leaders, innovators, and industry experts.
          </p>
        </div>

        

        <div className="bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="metric-value mb-4">Personal Information</h2>
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
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
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
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-inter-semiBold text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-inter-semiBold text-white mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                    placeholder="Your current company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-inter-semiBold text-white mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                    placeholder="Your current job title"
                  />
                </div>
              </div>
            </div>

            {/* Speaker Bio */}
            <div>
              <h2 className="metric-value mb-4">Speaker Profile</h2>
              <div>
                <label htmlFor="bio" className="block text-sm font-inter-semiBold text-white mb-2">
                  Speaker Bio *
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical ${
                    errors.bio ? 'border-red-500' : 'border-[#585858]'
                  }`}
                  placeholder="Tell us about your background, expertise, and achievements..."
                />
                {errors.bio && <p className="text-red-400 text-sm mt-1">{errors.bio}</p>}
                <p className="text-gray-400 text-sm mt-1">Minimum 50 characters</p>
              </div>
            </div>

            {/* Speaking Topic */}
            <div>
              <h2 className="metric-value mb-4">Speaking Topic</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="topicTitle" className="block text-sm font-inter-semiBold text-white mb-2">
                    Topic Title *
                  </label>
                  <input
                    type="text"
                    id="topicTitle"
                    name="topicTitle"
                    value={formData.topicTitle}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent ${
                      errors.topicTitle ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="What is the title of your proposed talk?"
                  />
                  {errors.topicTitle && <p className="text-red-400 text-sm mt-1">{errors.topicTitle}</p>}
                </div>

                <div>
                  <label htmlFor="topicAbstract" className="block text-sm font-inter-semiBold text-white mb-2">
                    Topic Abstract *
                  </label>
                  <textarea
                    id="topicAbstract"
                    name="topicAbstract"
                    value={formData.topicAbstract}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical ${
                      errors.topicAbstract ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Provide a detailed description of your talk, key points, and what attendees will learn..."
                  />
                  {errors.topicAbstract && <p className="text-red-400 text-sm mt-1">{errors.topicAbstract}</p>}
                  <p className="text-gray-400 text-sm mt-1">Minimum 100 characters</p>
                </div>
              </div>
            </div>

            {/* Experience & Audience */}
            <div>
              <h2 className="metric-value mb-4">Experience & Audience</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-inter-semiBold text-white mb-2">
                    Speaking Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical ${
                      errors.experience ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Describe your previous speaking engagements, conferences, workshops, etc."
                  />
                  {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience}</p>}
                </div>

                <div>
                  <label htmlFor="audience" className="block text-sm font-inter-semiBold text-white mb-2">
                    Target Audience *
                  </label>
                  <textarea
                    id="audience"
                    name="audience"
                    value={formData.audience}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical ${
                      errors.audience ? 'border-red-500' : 'border-[#585858]'
                    }`}
                    placeholder="Who is your target audience? What level of expertise should they have?"
                  />
                  {errors.audience && <p className="text-red-400 text-sm mt-1">{errors.audience}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="metric-value mb-4">Additional Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="previousSpeaking" className="block text-sm font-inter-semiBold text-white mb-2">
                    Previous Speaking Engagements (Optional)
                  </label>
                  <textarea
                    id="previousSpeaking"
                    name="previousSpeaking"
                    value={formData.previousSpeaking}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent resize-vertical"
                    placeholder="List specific conferences, events, or platforms where you've spoken"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-inter-semiBold text-white mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <div>
                    <label htmlFor="twitter" className="block text-sm font-inter-semiBold text-white mb-2">
                      Twitter/X Handle
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                      placeholder="@username"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-inter-semiBold text-white mb-2">
                      Personal Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931a] focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
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
                  ✅ Thank you for your application! Our team will review it and get back to you within 5-7 business days.
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
                label={isSubmitting ? "Submitting Application..." : "Submit Application"}
                className="w-full py-4 text-lg font-semibold"
                disabled={isSubmitting}
              />
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#FFFFFF80]">
              Questions? Contact us at{" "}
              <a 
                href="mailto:speakers@btcindia.media" 
                className="text-[#f7931a] hover:underline"
              >
                speakers@btcindia.media
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySpeaker;
