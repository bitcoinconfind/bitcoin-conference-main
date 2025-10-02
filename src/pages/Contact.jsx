import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center px-4 sm:px-8 lg:px-20">
      <div className="max-w-2xl w-full bg-[#1F1F1F] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 text-white">
        <h1 className="font-familjen text-3xl sm:text-4xl mb-4">Contact Us</h1>
        <p className="text-[#FFFFFFCC] font-inter-semiBold mb-6">
          Have questions or feedback? Use our contact form and we will get back to you.
        </p>
        <a
          className="inline-block px-6 py-3 rounded-lg bg-[#FFBF00] text-black font-familjen border border-2 border-[#585858] hover:bg-[#CB7608] hover:text-white transition"
          href="mailto:contact@btcindia.media?subject=Contact%20Request"
        >
          Email Us
        </a>
      </div>
    </section>
  );
};

export default Contact;


