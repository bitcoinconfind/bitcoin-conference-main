import React from 'react';
import Button from './Button';

const ComingSoon = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20 bg-black">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="heading-page text-[#FFBF00] mb-4">
          Coming Soon
        </h1>
        <h2 className="subheading text-white mb-6">
          Bitcoin Conference India 2026
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get ready for the most exciting Bitcoin conference in India. Stay updated with the latest
          announcements and be the first to know when tickets go live.
        </p>
        {/* Socials removed per request */}
      </div>
    </section>
  );
};

export default ComingSoon;


