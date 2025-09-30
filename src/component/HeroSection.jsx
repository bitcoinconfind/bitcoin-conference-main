import React from "react";
import BitcoinIcon from "../assets/imgs/logo/bitcoin_icon.png";
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
    const base = import.meta.env.VITE_DASHBOARD_URL
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    window.location.href = `${base.replace(/\/$/, '')}?${params.toString()}`;
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-20 flex flex-col w-full pt-[30px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] pb-0 md:pb-8">
      {/* Background Images */}
      <img
        src={RightSplashImg}
        alt="right-splash-image"
        className="absolute top-0 right-0 -z-10 w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[500px]"
      />
      <img
        src={LeftSplashImg}
        alt="left-splash-image"
        className="absolute top-0 left-0 -z-10 w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[500px]"
      />
      
      {/* Main Content */}
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 lg:gap-12">
          
          {/* Left Section - Grid with four divs: wrapper, logo, details, dates */}
          <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-max items-start justify-center justify-items-center gap-x-6 gap-y-2 sm:gap-x-10 sm:gap-y-2 lg:gap-x-12 lg:gap-y-2 w-full mx-auto sm:max-w-[560px] lg:max-w-[700px]">
            {/* 1) Logo */}
            <div className="justify-self-center sm:col-start-1 sm:row-start-1">
              <img
                src={BitcoinIcon}
                alt="bitcoin-icon"
                loading="lazy"
                className="w-auto h-[150px] sm:h-[190px] lg:h-[230px] min-w-[120px] sm:min-w-[150px] lg:min-w-[180px] object-contain"
              />
            </div>

            {/* 2) Conference Details */}
            <div className="justify-self-center sm:col-start-2 sm:row-start-1 sm:ml-10 lg:ml-16 xl:ml-24 2xl:ml-28">
              <img
                src={MeetingDetails}
                alt="conference-details"
                loading="lazy"
                className="w-auto h-[120px] sm:h-[150px] lg:h-[200px] object-contain"
              />
            </div>

            {/* 3) Dates (separate div) */}
            <div className="justify-self-center sm:col-start-2 sm:row-start-2 sm:ml-10 lg:ml-16 xl:ml-24 2xl:ml-28">
              <img
                src={DatesImg}
                alt="conference-dates"
                loading="lazy"
                className="w-[130px] h-auto sm:w-[180px] lg:w-[270px] object-contain mt-1 sm:mt-1 lg:mt-1"
              />
            </div>
          </div>

          {/* Right Section - Side Item and Button */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto order-3 sm:order-3">
            {/* Side Item Image */}
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
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

