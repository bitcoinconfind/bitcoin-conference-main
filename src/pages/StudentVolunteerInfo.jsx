import React from "react";

const StudentVolunteerInfo = () => {
  return (
    <section className="min-h-[70vh] w-full px-4 sm:px-8 lg:px-20 py-16 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="metric-value mb-2">Student / Volunteer</h1>
          <p className="metric-label">Join the crew and help run India’s biggest Bitcoin conference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Free Pass</div>
            <p className="metric-label">Get complimentary access to the conference for your shift days.</p>
          </div>
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Networking</div>
            <p className="metric-label">Meet speakers, founders, and recruiters while working on‑ground.</p>
          </div>
          <div className="bg-[#242424] border border-[#3a3a3a] rounded-xl p-6">
            <div className="metric-value mb-2">Certificate</div>
            <p className="metric-label">Receive an official certificate and recommendation for your contribution.</p>
          </div>
        </div>

        <div className="text-center">
          <a href="/contact/student-volunteer">
            <button className="bg-[#FFBF00] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#CB7608]">Apply as Student / Volunteer</button>
          </a>
        </div>

        {/* Email support */}
        <div className="mt-8 text-center">
          <p className="metric-label">
            Prefer email? Reach us at {" "}
            <a href="mailto:volunteer@btcindia.media" className="text-[#FFBF00] hover:underline">volunteer@btcindia.media</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentVolunteerInfo;


