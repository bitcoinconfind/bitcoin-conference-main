import React from 'react';
import Button from './Button';

const MainPromotionalSection = () => {
  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    
    // Direct redirect to dashboard with referral code
    const base = import.meta.env.VITE_DASHBOARD_URL;
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    window.location.href = `${base.replace(/\/$/, '')}?${params.toString()}`;
  };

  return (
    <section className="pt-4 pb-8 px-4 bg-black mt-2" aria-labelledby="win-tickets-section">
      <div className="max-w-4xl mx-auto text-center">
        {/* SEO-friendly heading */}
        <h2 id="win-tickets-section" className="sr-only">Win Free Tickets to Bitcoin Conference India 2026</h2>
        
        {/* SEO-friendly description */}
        <p className="sr-only">
          Register now to win free tickets to Bitcoin Conference India 2026 - the world's largest Bitcoin conference coming to India for the first time. 
          Join 40,000+ attendees, 150+ speakers, and 200+ partners for an unprecedented gathering of Bitcoin enthusiasts, developers, investors, and industry leaders.
        </p>

        {/* Large Win Free Tickets Button - Desktop */}
        <Button
          label="Win Free Tickets to Bitcoin Conference India 2026"
          variant="primary"
          className="hidden md:inline-block px-8 py-4 text-lg font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md mb-4 md:mb-6 sm:mb-8"
          onClick={handleWinFreeTickets}
          aria-label="Register to win free tickets to Bitcoin Conference India 2026 - World's largest Bitcoin conference"
        />
        
        {/* Mobile Win Free Tickets Button */}
        <Button
          label="Win Free Tickets"
          variant="primary"
          className="md:hidden px-5 py-2.5 text-sm font-bold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-xl w-auto max-w-[180px] mb-4 md:mb-6 sm:mb-8"
          onClick={handleWinFreeTickets}
          aria-label="Register to win free tickets to Bitcoin Conference India 2026"
        />
      </div>
      
    </section>
  );
};

export default MainPromotionalSection;
