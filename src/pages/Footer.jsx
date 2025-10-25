import React from "react";
const footLogo = "/assets/imgs/logo/BitLogo.png";
import Button from "../component/Button";
import BtcPriceTicker from "../component/BtcPriceTicker";
import {
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
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
      {/* Removed Win Free Tickets promotional section per request */}

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
              </a>
              <a
                href="https://x.com/BitcoinConfIND"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/bitcoinconfind"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@bitcoinconferenceindia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/bitcoinconfind/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://discord.gg/UNsh7qhXs5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-500"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* BTC Price Ticker - Center */}
          <div className="hidden md:flex w-full md:w-auto justify-center items-center -ml-40">
            <BtcPriceTicker />
          </div>

          {/* Footer Links */}
          <div className="mt-6 md:mt-0 flex flex-col items-center md:items-end gap-3 md:mr-25 w-full md:w-auto text-white">
            <Link to="/contact" className="metric-label hover:text-amber-500 transition-colors">Contact Us</Link>
            <Link to="/privacy" className="metric-label hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="metric-label hover:text-amber-500 transition-colors">Terms & Conditions</Link>
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
