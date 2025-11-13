import React from "react";
import FadeIn from "../component/ui/FadeIn";

const WhyAttend = () => {
  return (
    <div id="why-attend" className="space-y-12 max-w-7xl mx-auto">
      <FadeIn direction="up" duration={800}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="metric-value leading-tight gradient-text">Why Attend ?</h2>
          <p className="metric-label max-w-3xl mx-auto mt-3">What to expect at Bitcoin Conference India 2026</p>
        </div>
      </FadeIn>

      <div className="space-y-12">
        {/* First Grid */}
        <FadeIn direction="up" delay={200} duration={800}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
            {/* Card 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Satoshi Lounge</h3>
                <p className="metric-label text-base sm:text-lg">
                  A private space for founders, investors, and policymakers to connect, share insights, and spark high-value conversations that shape Bitcoin's future in India.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Bitcoin Bazaar</h3>
                <p className="metric-label text-base sm:text-lg">
                  The heart of innovation where startups, miners, and builders showcase real products and infrastructure powering the Bitcoin economy.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Bitcoin Art District</h3>
                <p className="metric-label text-base sm:text-lg">
                  Experience Bitcoin through creativity. Walk through installations, live art, and digital displays inspired by freedom, finance, and the orange revolution.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>

        {/* Second Grid */}
        <FadeIn direction="up" delay={400} duration={800}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
            {/* Card 4 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Network Square</h3>
                <p className="metric-label text-base sm:text-lg">
                  Meet the people building the future. Curated meetups, partnerships, and collaborations designed to help every conversation turn into opportunity.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Merch & Collectibles</h3>
                <p className="metric-label text-base sm:text-lg">
                  Limited edition Bitcoin Conference India gear, art collabs, and memorabilia you'll want to hold not trade. Once it's gone, it's gone.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#f7931a] font-sora font-semibold text-xl sm:text-2xl mb-3 tracking-tight">Main Stage</h3>
                <p className="metric-label text-base sm:text-lg">
                  The center of it all, where global Bitcoin leaders, innovators, and policymakers come together to discuss, debate, and define what's next.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default WhyAttend;
