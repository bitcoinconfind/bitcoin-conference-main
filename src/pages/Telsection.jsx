import React from "react";
import teleGramBg from "../assets/imgs/others/joining_bg.jpg";
import Button from "../component/Button";
import { FaTelegram } from "react-icons/fa";

const Telsection = () => {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#FFBF00]/30 shadow-xl">
            {/* Background Image */}
            <img
              src={teleGramBg}
              alt="Bitcoin Conference Community"
              className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 191, 0, 0.1) 50%, rgba(0, 0, 0, 0.85) 100%)",
              }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12">
              {/* Telegram Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <FaTelegram className="text-3xl md:text-4xl text-black" />
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-familjen font-bold leading-tight mb-6">
                Join Our
                <br />
                <span className="text-[#FFBF00]">Telegram Channel</span>
              </h1>

              {/* Simple Quote */}
              <p className="text-lg md:text-xl font-inter text-gray-200 mb-8 max-w-2xl">
                Stay updated with the latest news, announcements, and exclusive content
              </p>

              {/* CTA Button */}
              <Button
                label="Join Telegram"
                variant="primary"
                className="px-8 py-4 text-lg font-bold bg-[#FFBF00] text-black hover:bg-[#FF9F1E] transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  window.open("https://t.me/BitcoinConfIND", "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Telsection;
