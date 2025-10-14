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
    roleInterest: "",
    availability: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await dbHelpers.submitStudentVolunteer(formData);
      setStatus('ok');
      setFormData({ name:"", email:"", phone:"", university:"", roleInterest:"", availability:"", message:"" });
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
          <Link to="/contact" className="absolute left-0 inline-flex items-center text-[#FFBF00] hover:text-[#CB7608] transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h1 className="font-familjen text-2xl sm:text-3xl text-center w-full">Student / Volunteer</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Full Name" name="name" value={formData.name} onChange={onChange} />
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Email" name="email" type="email" value={formData.email} onChange={onChange} />
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Phone (optional)" name="phone" value={formData.phone} onChange={onChange} />
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="University / Organization" name="university" value={formData.university} onChange={onChange} />
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Interested Role (e.g., Registration, Stage, Ops)" name="roleInterest" value={formData.roleInterest} onChange={onChange} />
          <input className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Availability (dates/hours)" name="availability" value={formData.availability} onChange={onChange} />
          <textarea className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#585858] rounded-lg" placeholder="Message" rows={6} name="message" value={formData.message} onChange={onChange} />
          <Button type="submit" label={loading ? 'Submitting...' : 'Submit'} className="w-full py-3 text-lg" disabled={loading} />
          {status==='ok' && <p className="text-green-400">✅ Thank you for contacting us. We will reach out to you as soon as possible.</p>}
          {status==='err' && <p className="text-red-400">Submission failed. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactStudentVolunteer;


