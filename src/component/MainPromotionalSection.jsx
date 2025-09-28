import React from 'react';
import Button from './Button';

const MainPromotionalSection = () => {
  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    
    // Direct redirect to dashboard with referral code
    const dashboardUrl = 'http://localhost:4174';
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    window.location.href = `${dashboardUrl}?${params.toString()}`;
  };

  return (
    <section className="pt-2 pb-2 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">

        {/* Gradient Lines + Subheading - Always visible */}
        <div className="flex items-center justify-center mb-3 md:mb-6 sm:mb-8 gap-3">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#010101] via-[#FBF5EE] to-[#FBF5EE]"></div>

          <span className="text-[#FFBF00] font-semibold text-sm sm:text-base md:text-xl lg:text-2xl uppercase">
            Get A Chance to Win Free Conference Tickets
          </span>

          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#FBF5EE] via-[#FBF5EE] to-[#010101]"></div>
        </div>

        {/* Large Win Free Tickets Button - Desktop */}
        <Button
          label="Win Free Tickets"
          variant="primary"
          className="hidden md:inline-block px-8 py-4 text-lg font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md"
          onClick={handleWinFreeTickets}
        />
        
        {/* Mobile Win Free Tickets Button */}
        <Button
          label="Win Free Tickets"
          variant="primary"
          className="md:hidden px-6 py-3 text-base font-bold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-xl w-auto max-w-[200px]"
          onClick={handleWinFreeTickets}
        />
      </div>
      
    </section>
  );
};

export default MainPromotionalSection;
