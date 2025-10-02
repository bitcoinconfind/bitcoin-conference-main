import React from "react";
import BitcoinIcon from "../assets/imgs/logo/BitcoinLogo.svg";
// Updated to use src-based assets (moved to src/assets/imgs/...)
import MeetingDetails from "../assets/imgs/herosection/conference_detail.svg";
import DatesImg from "../assets/imgs/herosection/dates.svg";
import SideLineItem from "../assets/imgs/herosection/sideline_item.svg";
import LeftSplashImg from "../assets/imgs/herosection/left_hero_splash_image.png";
import RightSplashImg from "../assets/imgs/herosection/right_hero_splash_image.png";
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
      {/* Background Images - Fixed to top */}
      {/* Right splash image */}
      <img
        src={RightSplashImg}
        alt="right-splash-image"
        className="fixed top-[56px] right-0 -z-10 w-[110px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] h-auto"
      />
      
      {/* Left splash image */}
      <img
        src={LeftSplashImg}
        alt="left-splash-image"
        className="fixed top-[56px] left-0 -z-10 w-[110px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] h-auto"
      />
      
      {/* Main Content - With margin top to push it down */}
      <div className="w-full flex-1 flex items-center justify-center mt-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-3 lg:gap-8">
          
          {/* Left Section - Logo */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <img
              src={BitcoinIcon}
              alt="bitcoin-icon"
              loading="lazy"
              className="w-auto h-[96px] sm:h-[240px] lg:h-[256px] object-contain"
            />
          </div>

          {/* Center Section - Conference Details and Dates stacked vertically */}
          <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
            {/* Conference Details */}
            <div>
              <img
                src={MeetingDetails}
                alt="conference-details"
                loading="lazy"
                className="w-auto h-[120px] sm:h-[250px] lg:h-[280px] object-contain"
              />
            </div>

            {/* Dates */}
            <div>
              <img
                src={DatesImg}
                alt="conference-dates"
                loading="lazy"
                className="w-[192px] h-auto sm:w-[180px] lg:w-[270px] object-contain"
              />
            </div>
          </div>

          {/* Right Section - Side Item */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/4">
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
              <img 
                src={SideLineItem} 
                alt="side-decoration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;

