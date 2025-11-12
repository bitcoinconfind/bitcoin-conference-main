import React from "react";
import { Link } from "react-router-dom";

const MediaInfo = () => {
  return (
    <section className="min-h-[70vh] w-full px-4 sm:px-8 lg:px-20 py-16 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
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
        <div className="text-center mb-8">
          <h1 className="metric-value mb-2">Media & Partnerships</h1>
          <p className="metric-label">Be part of the official event coverage and collaborations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Priority Access</div>
            <p className="metric-label">Press lounge, scheduled interview slots, and stage-side access for approved crews.</p>
          </div>
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Co‑Branded Moments</div>
            <p className="metric-label">Partner segments, on‑ground activations, and content integrations amplified on our channels.</p>
          </div>
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Content Support</div>
            <p className="metric-label">Access to media kits, speaker quotes, and highlight reels for fast turnarounds.</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact/media-partnership">
            <button className="bg-[#f7931a] text-black font-semibold px-6 py-3 rounded-lg">Apply for Media & Partnerships</button>
          </a>
        </div>

        {/* Email support */}
        <div className="mt-8 text-center">
          <p className="metric-label">
            Prefer email? Reach us at {" "}
            <a href="mailto:partnerships@btcindia.media" className="text-[#f7931a] hover:underline">partnerships@btcindia.media</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MediaInfo;


