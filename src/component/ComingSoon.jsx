import React from 'react';
import Button from './Button';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ComingSoon = () => {
  return (
    <section className="py-10 px-4 sm:px-8 lg:px-20 bg-black">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFBF00] mb-4 font-familjen">
          Coming Soon
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-6 font-semibold">
          Bitcoin Conference India 2026
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Get ready for the most exciting Bitcoin conference in India. Stay updated with the latest
          announcements and be the first to know when tickets go live.
        </p>
        {/* Socials box */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-5 sm:p-6">
            <p className="text-white font-semibold mb-4">Join our socials for updates:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Telegram */}
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[#2a2a2a] bg-black p-4">
                <div className="w-10 h-10 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <FaTelegram className="text-black text-xl" />
                </div>
                <div className="text-white">Telegram</div>
                <Button
                  label="Join"
                  className="w-full"
                  onClick={() => window.open('https://t.me/BitcoinConfIND', '_blank')}
                />
              </div>
              {/* Instagram */}
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[#2a2a2a] bg-black p-4">
                <div className="w-10 h-10 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <FaInstagram className="text-black text-xl" />
                </div>
                <div className="text-white">Instagram</div>
                <Button
                  label="Follow"
                  className="w-full"
                  onClick={() => window.open('https://instagram.com/bitcoinconfindia', '_blank')}
                />
              </div>
              {/* X */}
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[#2a2a2a] bg-black p-4">
                <div className="w-10 h-10 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <FaXTwitter className="text-black text-xl" />
                </div>
                <div className="text-white">X (Twitter)</div>
                <Button
                  label="Follow"
                  className="w-full"
                  onClick={() => window.open('https://x.com/BitcoinConfIND', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;


