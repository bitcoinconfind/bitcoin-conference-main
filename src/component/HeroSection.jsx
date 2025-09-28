import React, { useState } from "react";
import BitcoinIcon from "../assets/imgs/logo/bitcoin_icon.png";
import MeetingDetails from "../assets/imgs/herosection/conference_details.png";
import SideLineItem from "../assets/imgs/herosection/sideline_item.png";
import LeftSplashImg from "../assets/imgs/herosection/left_hero_splash_image.png";
import RightSplashImg from "../assets/imgs/herosection/right_hero_splash_image.png";
import Button from "./Button";
import ConferenceForm from "./ConferenceForm";

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

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
          
          {/* Left Section - Bitcoin Icon and Conference Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-1">
            {/* Bitcoin Icon */}
            <div className="flex-shrink-0 order-1 sm:order-1">
              <img
                src={BitcoinIcon}
                alt="bitcoin-icon"
                loading="lazy"
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] object-contain"
              />
            </div>
            
            {/* Conference Details Image */}
            <div className="flex-shrink-0 order-2 sm:order-2">
              <img
                src={MeetingDetails}
                alt="conference-details"
                loading="lazy"
                className="w-[280px] h-auto sm:w-[400px] lg:w-[600px] object-contain"
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

      {/* Registration Form Modal */}
      {showForm && (
        <ConferenceForm
          isModal={true}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default HeroSection;

