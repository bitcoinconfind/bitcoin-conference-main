import React from "react";
import { Link } from "react-router-dom";

const ApplySponsor = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-20 text-white bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-familjen text-4xl sm:text-6xl mb-6">Partner With Bitcoin India</h1>
        <p className="text-lg sm:text-xl text-[#FFFFFFCC] max-w-3xl mx-auto">
          Want to advertise your company or be a sponsor at the world's largest Bitcoin event in India?
          Let's create something unforgettable together.
        </p>
        <div className="mt-10">
          <a
            href="mailto:contact@btcindia.media?subject=Sponsorship%20Enquiry"
            className="inline-block px-8 py-4 rounded-xl bg-[#FFBF00] text-black font-familjen border border-2 border-[#585858] hover:bg-[#CB7608] hover:text-white transition text-lg"
          >
            Contact Sponsorship Team
          </a>
        </div>
        <p className="mt-6 text-sm text-[#FFFFFF80]">Custom opportunities available. Limited inventory.</p>
      </div>
    </section>
  );
};

export default ApplySponsor;

