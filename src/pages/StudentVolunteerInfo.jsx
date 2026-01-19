import React from "react";
import { Link } from "react-router-dom";

const StudentVolunteerInfo = () => {
  return (
    <section className="min-h-[70vh] w-full px-4 sm:px-8 lg:px-20 pt-36 pb-16 text-white bg-[#000000] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-[#FF8000] hover:text-[#FF8000] transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-[#FF8000]/20 blur-[80px] rounded-full pointer-events-none"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tighter uppercase relative z-10">
            Student / <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8000] to-[#FF8000]">Volunteer</span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-[#FF8000]/80 mb-4">
            <div className="h-[1px] w-12 bg-[#FF8000]"></div>
            <span className="text-sm font-mono tracking-[0.3em] uppercase">Join The Team</span>
            <div className="h-[1px] w-12 bg-[#FF8000]"></div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Join the crew and help run India's Premier Bitcoin conference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#000000] border-2 border-[#585858] rounded-xl p-6 hover:border-[#FF8000] transition-all duration-500">
            <div className="text-xl md:text-2xl font-bold text-[#FF8000] mb-2">Free Pass</div>
            <p className="metric-label">Get complimentary access to the conference for your shift days.</p>
          </div>
          <div className="bg-[#000000] border-2 border-[#585858] rounded-xl p-6 hover:border-[#FF8000] transition-all duration-500">
            <div className="text-xl md:text-2xl font-bold text-[#FF8000] mb-2">Networking</div>
            <p className="metric-label">Meet speakers, founders, and recruiters while working on‑ground.</p>
          </div>
          <div className="bg-[#000000] border-2 border-[#585858] rounded-xl p-6 hover:border-[#FF8000] transition-all duration-500">
            <div className="text-xl md:text-2xl font-bold text-[#FF8000] mb-2">Certificate</div>
            <p className="metric-label">Receive an official certificate and recommendation for your contribution.</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact/student-volunteer">
            <button className="bg-transparent border-2 border-[#FF8000] text-[#FF8000] font-semibold px-6 py-3 rounded-lg shadow-[0_0_10px_rgba(255,128,0,0.3)] hover:bg-[#FF8000]/10 hover:shadow-[0_0_20px_rgba(255,128,0,0.6)] transition-all duration-300">Apply as Student / Volunteer</button>
          </a>
        </div>

        {/* Email support */}
        <div className="mt-8 text-center">
          <p className="metric-label !text-white">
            Prefer email? Reach us at {" "}
            <a href="mailto:contact@bitcoinforumindia.com" className="text-[#FF8000] hover:underline">contact@bitcoinforumindia.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentVolunteerInfo;

















