import React from "react";
import FadeIn from "./ui/FadeIn";
const BitcoinIcon = "/assets/imgs/logo/BitcoinLogo.png";
// Updated to use public-based assets
const MeetingDetails = "/assets/imgs/herosection/conference_detail.svg";
const DatesImg = "/assets/imgs/herosection/dates.svg";
const SideLineItem = "/assets/imgs/herosection/sideline_item.svg";
import Button from "./Button";

const HeroSection = () => {
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
    <div className="relative px-3 sm:px-8 lg:px-20 flex flex-col w-full pt-[56px] min-h-[320px] sm:min-h-[500px] md:min-h-[550px] pb-0 md:pb-8 mt-1">
      {/* SEO-friendly hidden heading for search engines */}
      <h1 className="sr-only">Bitcoin Conference India 2026 - World's Largest Bitcoin Conference First Time in India</h1>

      {/* Main Content - With margin top to push it down */}
      <div className="w-full flex-1 flex items-center justify-center mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3 lg:gap-8">

          {/* Left Section - Logo */}
          <FadeIn direction="left" delay={100} duration={1000} className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <img
              src={BitcoinIcon}
              alt="Bitcoin Conference India 2026 official logo - World's largest Bitcoin conference"
              loading="lazy"
              className="w-auto h-[96px] sm:h-[240px] lg:h-[256px] object-contain"
            />
          </FadeIn>

          {/* Center Section - Conference Details and Dates stacked vertically */}
          <FadeIn direction="up" delay={200} duration={1000} className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
            {/* Conference Details */}
            <div>
              <img
                src={MeetingDetails}
                alt="Bitcoin Conference India 2026 event details - World's largest Bitcoin conference coming to India for the first time"
                loading="lazy"
                className="w-auto h-[120px] sm:h-[250px] lg:h-[280px] object-contain heading-hero"
              />
            </div>

            {/* Dates */}
            <div>
              <img
                src={DatesImg}
                alt="Bitcoin Conference India 2026 dates and schedule information"
                loading="lazy"
                className="w-[192px] h-auto sm:w-[180px] lg:w-[270px] object-contain"
              />
            </div>

            {/* World's Largest Bitcoin Conference */}
            <div className="text-center mt-2 text-3xl font-bold italic" style={{fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em'}}>
              <span className="text-white">World's Largest </span>
              <span className="text-[#FF8C00]">Bitcoin</span>
              <span className="text-white"> Conference</span>
            </div>
          </FadeIn>

          {/* Right Section - Side Item */}
          <FadeIn direction="right" delay={100} duration={1000} className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
              <img
                src={SideLineItem}
                alt="Bitcoin Conference India 2026 decorative element featuring cryptocurrency and blockchain themes"
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;

