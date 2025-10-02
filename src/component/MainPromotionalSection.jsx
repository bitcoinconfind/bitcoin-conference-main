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
    <section className="pt-4 pb-8 px-4 bg-black mt-2">
      <div className="max-w-4xl mx-auto text-center">

        {/* Large Win Free Tickets Button - Desktop */}
        <Button
          label="Win Free Tickets"
          variant="primary"
          className="hidden md:inline-block px-8 py-4 text-lg font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md mb-4 md:mb-6 sm:mb-8"
          onClick={handleWinFreeTickets}
        />
        
        {/* Mobile Win Free Tickets Button */}
        <Button
          label="Win Free Tickets"
          variant="primary"
          className="md:hidden px-5 py-2.5 text-sm font-bold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-xl w-auto max-w-[180px] mb-4 md:mb-6 sm:mb-8"
          onClick={handleWinFreeTickets}
        />
      </div>
      
    </section>
  );
};

export default MainPromotionalSection;
