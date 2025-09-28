import React, { useState } from "react";
import Button from "./Button";

const ConferenceForm = ({ onClose, isModal = false }) => {
  const [formData, setFormData] = useState({
    email: "",
    referralCode: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Redirect to refer dashboard with email and referral code
      const dashboardUrl = 'http://localhost:5175/signup';
      const params = new URLSearchParams({
        email: formData.email,
        ...(formData.referralCode && { referralCode: formData.referralCode })
      });
      
      window.location.href = `${dashboardUrl}?${params.toString()}`;
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className={`${isModal ? 'bg-black p-6 rounded-lg max-w-2xl mx-auto' : 'w-full'}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#FFBF00] font-familjen">
          Sign Up & Win Free Tickets!
        </h2>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-white hover:text-[#FFBF00] text-2xl font-bold"
          >
            ×
          </button>
        )}
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-900 border border-red-500 rounded-lg">
          <p className="text-red-400 font-semibold">
            ❌ Something went wrong. Please try again or contact support.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-semibold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#1F1F1F] border border-[#585858] rounded-lg text-white focus:border-[#FFBF00] focus:outline-none"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">
            Referral Code (Optional)
          </label>
          <input
            type="text"
            name="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-[#1F1F1F] border border-[#585858] rounded-lg text-white focus:border-[#FFBF00] focus:outline-none"
            placeholder="Enter referral code if you have one"
          />
          <p className="text-gray-400 text-sm mt-1">
            Have a referral code? Enter it here to get special benefits!
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            required
            className="mt-1 h-4 w-4 text-[#FFBF00] focus:ring-[#FFBF00] border-[#585858] rounded"
          />
          <label className="text-white text-sm">
            I agree to the{" "}
            <a href="/terms" className="text-[#FFBF00] hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#FFBF00] hover:underline">
              Privacy Policy
            </a>
            *
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            label={isSubmitting ? "Submitting..." : "Sign Up & Enter Contest"}
            variant="primary"
            className="flex-1 py-3 text-lg"
            disabled={isSubmitting || !formData.agreeToTerms}
          />
          {isModal && onClose && (
            <Button
              type="button"
              label="Cancel"
              variant="secondary"
              onClick={onClose}
              className="flex-1 py-3 text-lg"
            />
          )}
        </div>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-black rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
};

export default ConferenceForm;