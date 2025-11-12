import React, { useState } from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import { dbHelpers } from "../lib/supabase";

const ContactStudentVolunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    city: "",
    roleInterest: "",
    availability: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'err' | 'validation'
  const [statusMessage, setStatusMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusMessage("");

    // Basic client-side validation to prevent empty submissions
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidPhone = /^\+?[0-9\s\-()]{7,15}$/;
    const requiredFields = [
      ["name", "Full Name is required"],
      ["email", "Valid Email is required"],
      ["phone", "Valid Phone is required"],
      ["university", "University / Organization is required"],
      ["city", "City is required"],
      ["roleInterest", "Interested Role is required"],
      ["availability", "Availability is required"],
      ["message", "Message is required"],
    ];

    for (const [key, msg] of requiredFields) {
      if (!String(formData[key]).trim()) {
        setStatus("validation");
        setStatusMessage(msg);
        setLoading(false);
        return;
      }
    }
    if (!isValidEmail.test(formData.email)) {
      setStatus("validation");
      setStatusMessage("Please enter a valid email address");
      setLoading(false);
      return;
    }
    if (!isValidPhone.test(formData.phone)) {
      setStatus("validation");
      setStatusMessage("Please enter a valid phone number");
      setLoading(false);
      return;
    }
    try {
      await dbHelpers.submitStudentVolunteer(formData);
      setStatus('ok');
      setFormData({ name:"", email:"", phone:"", university:"", city:"", roleInterest:"", availability:"", message:"" });
    } catch (e1) {
      console.error(e1);
      setStatus('err');
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20 py-20">
      <div className="max-w-2xl w-full bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 text-white">
        <div className="mb-6 relative flex items-center justify-center px-12 sm:px-0">
          <Link to="/contact" className="absolute left-0 inline-flex items-center text-[#f7931a] hover:text-[#CB7608] transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="heading-page">Student / Volunteer</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Full Name <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Full Name" name="name" value={formData.name} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Email" name="email" type="email" value={formData.email} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Phone <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Phone" name="phone" value={formData.phone} onChange={onChange} inputMode="tel" />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">University / Organization <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="University / Organization" name="university" value={formData.university} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">City <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="City" name="city" value={formData.city} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Interested Role <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Interested Role (e.g., Registration, Stage, Ops)" name="roleInterest" value={formData.roleInterest} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Availability (dates/hours) <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <input required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Availability (dates/hours)" name="availability" value={formData.availability} onChange={onChange} />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message <span className="text-[#f7931a]" aria-hidden>*</span></label>
            <textarea required aria-required="true" className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="How can you help? What can you offer? What is your goal?" rows={6} name="message" value={formData.message} onChange={onChange} />
          </div>
          <Button type="submit" label={loading ? 'Submitting...' : 'Submit'} className="w-full py-3 text-lg" disabled={loading} />
          {status==='validation' && <p className="text-yellow-400">{statusMessage}</p>}
          {status==='ok' && <p className="text-green-400">✅ Thank you for contacting us. We will reach out to you as soon as possible.</p>}
          {status==='err' && <p className="text-red-400">Submission failed. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactStudentVolunteer;


