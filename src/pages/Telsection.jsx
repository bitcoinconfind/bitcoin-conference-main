import React from "react";
import Button from "../component/Button";
import { FaTelegram, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Telsection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-familjen font-bold text-white">Join Our Community</h2>
            <p className="text-gray-300 mt-2">Follow us across platforms for updates and announcements</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Telegram */}
            <div className="flex flex-col items-center gap-3 rounded-xl border border-[#2a2a2a] bg-black p-5">
              <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                <FaTelegram className="text-black text-2xl" />
              </div>
              <div className="text-white font-semibold">Telegram</div>
              <Button
                label="Join"
                onClick={() => window.open("https://t.me/BitcoinConfIND", "_blank")}
                className="w-full"
              />
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center gap-3 rounded-xl border border-[#2a2a2a] bg-black p-5">
              <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                <FaInstagram className="text-black text-2xl" />
              </div>
              <div className="text-white font-semibold">Instagram</div>
              <Button
                label="Follow"
                onClick={() => window.open("https://instagram.com/bitcoinconfindia", "_blank")}
                className="w-full"
              />
            </div>

            {/* X (Twitter) */}
            <div className="flex flex-col items-center gap-3 rounded-xl border border-[#2a2a2a] bg-black p-5">
              <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                <FaXTwitter className="text-black text-2xl" />
              </div>
              <div className="text-white font-semibold">X (Twitter)</div>
              <Button
                label="Follow"
                onClick={() => window.open("https://x.com/BitcoinConfIND", "_blank")}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telsection;
