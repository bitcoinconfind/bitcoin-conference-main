import React, { useState } from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import { dbHelpers } from "../lib/supabase";

const ContactMediaPartnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    website: "",
    partnershipType: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

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
    
    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }
    
    if (!formData.partnershipType.trim()) {
      newErrors.partnershipType = "Partnership type is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('validation');
      return;
    }
    
    setLoading(true);
    setStatus(null);
    setErrors({});
    
    try {
      await dbHelpers.submitMediaPartnership(formData);
      setStatus('ok');
      setFormData({ name:"", email:"", organization:"", website:"", partnershipType:"", phone:"", message:"" });
    } catch (e1) {
      console.error(e1);
      setStatus('err');
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20">
      <div className="max-w-2xl w-full bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 text-white">
        <div className="mb-6 relative flex items-center justify-center px-16 sm:px-0">
          <Link to="/contact" className="absolute left-3 sm:left-0 inline-flex items-center text-[#FFBF00] hover:text-[#CB7608] transition-colors z-10">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="heading-page">Media & Partnerships</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <input 
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg ${errors.name ? 'border-red-500' : 'border-[#585858]'}`} 
              placeholder="Full Name *" 
              name="name" 
              value={formData.name} 
              onChange={onChange} 
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div>
            <input 
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg ${errors.email ? 'border-red-500' : 'border-[#585858]'}`} 
              placeholder="Email *" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={onChange} 
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <input 
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg ${errors.organization ? 'border-red-500' : 'border-[#585858]'}`} 
              placeholder="Organization *" 
              name="organization" 
              value={formData.organization} 
              onChange={onChange} 
            />
            {errors.organization && <p className="text-red-400 text-sm mt-1">{errors.organization}</p>}
          </div>
          
          <div>
            <input 
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" 
              placeholder="Website" 
              name="website" 
              value={formData.website} 
              onChange={onChange} 
            />
          </div>
          
          <div>
            <input 
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg ${errors.partnershipType ? 'border-red-500' : 'border-[#585858]'}`} 
              placeholder="Partnership Type (Media, Community, Brand, etc.) *" 
              name="partnershipType" 
              value={formData.partnershipType} 
              onChange={onChange} 
            />
            {errors.partnershipType && <p className="text-red-400 text-sm mt-1">{errors.partnershipType}</p>}
          </div>
          
          <div>
            <input 
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" 
              placeholder="Phone (optional)" 
              name="phone" 
              value={formData.phone} 
              onChange={onChange} 
            />
          </div>
          
          <div>
            <textarea 
              className={`w-full px-4 py-3 bg-[#2a2a2a] border rounded-lg ${errors.message ? 'border-red-500' : 'border-[#585858]'}`} 
              placeholder="Message *" 
              rows={6} 
              name="message" 
              value={formData.message} 
              onChange={onChange} 
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <Button type="submit" label={loading ? 'Submitting...' : 'Submit'} className="w-full py-3 text-lg" disabled={loading} />
          
          {status==='validation' && <p className="text-yellow-400">⚠️ Please fill in all required fields.</p>}
          {status==='ok' && <p className="text-green-400">✅ Thank you for contacting us. We will reach out to you as soon as possible.</p>}
          {status==='err' && <p className="text-red-400">❌ Submission failed. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMediaPartnership;


