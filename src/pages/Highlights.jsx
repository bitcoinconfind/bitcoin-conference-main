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
                  MAIN STAGE
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Experience world-class keynotes and panels featuring India's top Bitcoin 
                  thought leaders, global industry experts, and groundbreaking discussions 
                  on Bitcoin's future in Asia.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Networking
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Connect with 10,000+ Bitcoin enthusiasts, entrepreneurs, developers, 
                  and investors from across India and the global Bitcoin ecosystem 
                  in dedicated networking zones.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Official Store
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Shop exclusive Bitcoin India merchandise, limited edition collectibles, 
                  and premium conference memorabilia to commemorate your participation 
                  in India's premier Bitcoin event.
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
                  Expo Hall
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Explore India's largest Bitcoin showcase featuring cutting-edge 
                  technology, innovative startups, and leading companies driving 
                  Bitcoin adoption across the subcontinent.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  VIP Experience
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Enjoy exclusive access to premium lounges, private networking 
                  sessions, gourmet dining, and intimate conversations with 
                  industry leaders in our VIP areas.
                </p>
              </div>
              <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-[#010101] via-[#FBF5EE] to-[#010101]"></div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 w-full">
              <div className="flex-1">
                <h1 className="text-[#FF9F1E] font-familjen mb-3 md:mb-5 text-2xl md:text-3xl font-bold uppercase">
                  Art Gallery
                </h1>
                <p className="text-white font-inter-semiBold text-base md:text-lg">
                  Immerse yourself in Bitcoin-inspired art and digital collectibles 
                  showcasing the creative intersection of technology, culture, 
                  and financial innovation.
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
