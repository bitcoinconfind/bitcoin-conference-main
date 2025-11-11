import React from "react";
import FadeIn from "../component/ui/FadeIn";

const WhyAttend = () => {
  return (
    <section id="why-attend" className="lg:px-15 py-10">
      {/* Separation Line */}
      <div className="w-full flex justify-center mb-10 sm:mb-12 px-6 md:px-12 lg:px-20">
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>
      </div>

      <FadeIn direction="up" duration={800}>
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="metric-value leading-tight gradient-text">Why Attend ?</h2>
          <p className="metric-label max-w-3xl mx-auto mt-3">What to expect at Bitcoin Conference India 2026</p>
        </div>
      </FadeIn>

      <div className="space-y-12 px-6 md:px-12 lg:px-20 p-5">
        {/* First Grid */}
        <FadeIn direction="up" delay={200} duration={800}>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
            {/* Card 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Premium Experience</h3>
                <p className="metric-label text-base sm:text-lg">
                  Access premium lounges, hosted meet-ups, and curated sessions with headline speakers and ecosystem leaders.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Art Gallery</h3>
                <p className="metric-label text-base sm:text-lg">
                  Explore Bitcoin‑inspired art and installations that bring culture, creativity, and open‑source values together.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Expo Hall</h3>
                <p className="metric-label text-base sm:text-lg">
                  India's largest Bitcoin showcase products, dev tools, Lightning, mining, security, infra, wallets, exchanges, and enterprise.
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
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Networking</h3>
                <p className="metric-label text-base sm:text-lg">
                  Meet founders, developers, investors, and partners across structured meet-ups and themed lounges.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Official Store</h3>
                <p className="metric-label text-base sm:text-lg">
                  Exclusive drops, limited merchandise, and collectibles from the event and ecosystem partners.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full card-hover-lift">
              <div className="flex-1 text-center">
                <h3 className="text-[#FFBF00] font-sora font-semibold text-xl sm:text-2xl mb-3 uppercase tracking-tight">Main Stage</h3>
                <p className="metric-label text-base sm:text-lg">
                  World‑class keynotes and panels featuring global voices shaping Bitcoin's next decade across tech, policy, finance, and adoption.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhyAttend;
