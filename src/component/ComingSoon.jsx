import React from 'react';
import Button from './Button';

const ComingSoon = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20 bg-black">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFBF00] mb-4 font-familjen">
          Coming Soon
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-6 font-semibold">
          Bitcoin Conference India 2026
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get ready for the most exciting Bitcoin conference in India. Stay updated with the latest
          announcements and be the first to know when tickets go live.
        </p>
        {/* Socials removed per request */}
      </div>
    </section>
  );
};

export default ComingSoon;


