import React from "react";

const WhyAttend = () => {
  return (
    <section id="why-attend" className="lg:px-15 py-10">
      <div className="text-center space-y-1 mb-6">
        <h2 className="metric-value">Why Attend ?</h2>
        <p className="metric-label">What to expect at Bitcoin Conference India 2026</p>
      </div>

      <div className="space-y-12 px-6 md:px-12 lg:px-20 p-5">
        {/* First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">VIP Experience</h3>
              <p className="metric-label">
                Access premium lounges, hosted meet‑ups, and curated small‑group sessions with headline speakers and ecosystem leaders.
              </p>
            </div>
            <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">Art Gallery</h3>
              <p className="metric-label">
                Explore Bitcoin‑inspired art and installations that bring culture, creativity, and open‑source values together.
              </p>
            </div>
            <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">Expo Hall</h3>
              <p className="metric-label">
                India’s largest Bitcoin showcase—products, dev tools, Lightning, mining, security, infra, wallets, exchanges, and enterprise.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>

        {/* Second Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
          {/* Card 4 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">Networking</h3>
              <p className="metric-label">
                Meet founders, devs, investors, and partners across structured meet‑ups, themed lounges, and targeted matchmaking.
              </p>
            </div>
            <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">Official Store</h3>
              <p className="metric-label">
                Exclusive drops, limited merchandise, and collectibles from the event and ecosystem partners.
              </p>
            </div>
            <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
            <div className="flex-1">
              <h3 className="metric-value mb-2 uppercase">Main Stage</h3>
              <p className="metric-label">
                World‑class keynotes and panels featuring global voices shaping Bitcoin’s next decade across tech, policy, finance, and adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
