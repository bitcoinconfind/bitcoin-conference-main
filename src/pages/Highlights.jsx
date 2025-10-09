import React from "react";

const Highlights = () => {
  return (
    <>
      <section className="lg:px-15 py-5 lg:py-35">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-semibold font-familjen text-xl md:text-2xl text-[#FFBF00]">
            HIGHLIGHTS
          </h2>
          <h1 className="font-bold font-familjen text-3xl md:text-5xl text-white">
            What To Expect
          </h1>
        </div>
        <div className="space-y-12 px-6 md:px-12 lg:px-20 p-5">
          {/* First Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0">
            {/* Card 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  VIP Experience
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Unlock exclusive access to premium lounges, private networking
                  sessions, gourmet experiences, and intimate fireside chats with
                  industry pioneers in our elite VIP zones.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Art Gallery
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Discover stunning Bitcoin-inspired artwork and digital masterpieces
                  that celebrate the fusion of technology, creativity,
                  and decentralized culture.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Expo Hall
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Discover India's largest Bitcoin innovation showcase featuring
                  groundbreaking technology, visionary startups, and industry-leading
                  companies shaping Bitcoin's future across Asia.
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
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Networking
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Connect with 40,000+ Bitcoin enthusiasts, builders, investors,
                  and thought leaders from India and beyond in purpose-built
                  networking spaces designed for meaningful connections.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Official Store
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Take home exclusive Bitcoin India merchandise, rare limited-edition
                  collectibles, and premium memorabilia celebrating your journey
                  at India's most iconic Bitcoin gathering.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Main Stage
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Witness world-class keynotes and power-packed panel discussions
                  featuring India's top Bitcoin visionaries, global experts, and
                  transformative conversations shaping Asia's Bitcoin future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
