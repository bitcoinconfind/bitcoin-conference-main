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
          <p className="text-[#FFFFFFCC] font-inter-semiBold mb-4">
            Choose the type of inquiry to get started.
          </p>
          {/* Quick selector cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <button onClick={() => window.location.href='/contact/general'} className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-4 hover:bg-[#2a2a2a]">
              <h3 className="text-white font-familjen text-xl mb-1">General Queries</h3>
              <p className="text-sm text-[#FFFFFF99]">Ask us anything about the conference.</p>
            </button>
            <button onClick={() => window.location.href='/contact/student-volunteer'} className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-4 hover:bg-[#2a2a2a]">
              <h3 className="text-white font-familjen text-xl mb-1">Student / Volunteer</h3>
              <p className="text-sm text-[#FFFFFF99]">Apply to help and be part of the crew.</p>
            </button>
            <button onClick={() => window.location.href='/contact/media-partnership'} className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-4 hover:bg-[#2a2a2a]">
              <h3 className="text-white font-familjen text-xl mb-1">Media & Partnerships</h3>
              <p className="text-sm text-[#FFFFFF99]">Press, media collaborations, and partnerships.</p>
            </button>
          </div>
        </div>
        {/* Selection page only; form moved to /contact/general */}

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


