import React from "react";
import footLogo from "../assets/imgs/logo/BitLogo.png";
import Button from "../component/Button";
import {
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <section>
      {/* Win Free Tickets Promotional Section */}
      <div className="py-8 sm:py-12 md:py-16 px-4 bg-black mb-8">
        <div className="max-w-4xl mx-auto text-center">
        {/* Gradient Lines + Subheading */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10 gap-2 sm:gap-3">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#010101] via-[#FBF5EE] to-[#FBF5EE]"></div>

          <span className="text-[#FFBF00] font-semibold text-sm sm:text-base md:text-xl lg:text-2xl uppercase px-2">
            Get A Chance to Win Free Conference Tickets
          </span>

          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#FBF5EE] via-[#FBF5EE] to-[#010101]"></div>
        </div>

          {/* Win Free Tickets Button */}
          <Button
            label="Win Free Tickets"
            variant="primary"
            className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            onClick={handleWinFreeTickets}
          />
        </div>
      </div>

      <footer className="-mt-8 w-full">
        {/* Top Section */}
        <div className="bg-black p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-md w-full">
          {/* Logo + Social Icons */}
          <div className="flex flex-col md:ml-18 items-center md:items-start gap-6 md:gap-12 w-full md:w-auto">
            <img
              src={footLogo}
              alt="BitIndia Logo"
              className="h-10 w-auto md:h-12"
            />
            <div className="flex items-center gap-5 md:gap-6 text-gray-300 text-lg md:text-xl">
              <a
                href="https://t.me/BitcoinConfIND"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaTelegram />
                <span className="text-sm md:text-base">Telegram</span>
              </a>
              <a
                href="https://x.com/BitcoinConfIND"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaXTwitter />
                <span className="text-sm md:text-base">X</span>
              </a>
              <a
                href="https://www.instagram.com/bitcoinconfind"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaInstagram />
                <span className="text-sm md:text-base">Instagram</span>
              </a>
            </div>
          </div>

          {/* Sponsorship Links */}
          <div className="mt-6 md:mt-0 flex flex-col md:items-end gap-8 md:mr-25 w-full md:w-auto">
            <div className="flex flex-wrap text-xl font-familjen-med justify-center md:justify-end gap-3 text-white">
              <Link to="/apply/sponsor" className="hover:text-amber-500">Sponsorship</Link>
              <Link to="/contact" className="hover:text-amber-500">Contact</Link>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap text-sm font-familjen-med justify-center md:justify-end gap-3 text-gray-400">
              <Link 
                to="/terms"
                className="hover:text-amber-500 transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                to="/privacy"
                className="hover:text-amber-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Divider + Disclaimer Section */}
        <div className="flex flex-col  items-center justify-center bg-black p-6 md:p-12">
          {/* Gradient Divider */}
          <div className="w-11/12 md:w-2/3 h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>

          {/* Disclaimer Title */}
          <h1 className="text-white font-inter text-md md:text-md uppercase mt-5 mb-3 md:mt-6 md:mb-4">
            Disclaimer
          </h1>

          {/* Disclaimer Text */}
          <p className="text-[#FFFFFECC] text-center font-inter-semiBold text-md md:text-md max-w-full md:max-w-xl px-4 md:px-0">
            Bitcoin Conference India is an independent event dedicated to
            promoting Bitcoin education and adoption in India. We are not
            affiliated with any specific Bitcoin company or organization. All
            information provided is for educational purposes only and should not
            be considered as financial advice.
          </p>
        </div>
      </footer>
      
    </section>
  );
};

export default Footer;
