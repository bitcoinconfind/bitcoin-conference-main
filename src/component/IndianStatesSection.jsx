import FadeIn from "./ui/FadeIn";
// import Button from "./Button"; // Commented out - button is hidden for now

// Indian map image
const IndianMapImage = "/india 1.svg";

const IndianStatesSection = () => {
  return (
    <section className="relative w-full px-3 sm:px-8 lg:px-20 py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Separator Line Before Section */}
      <div className="w-full flex justify-center mb-10 sm:mb-12 px-6 md:px-12 lg:px-20">
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>
      </div>

      {/* SEO-friendly heading */}
      <h2 className="sr-only">Bitcoin Conferences Across All 35 Indian States and Union Territories</h2>

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn direction="up" delay={100} duration={800}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'Sora, sans-serif'}}>
              <span className="text-white">ONE </span>
              <span className="gradient-text">NATION</span>
              <span className="text-white"> ONE </span>
              <span className="gradient-text">BITCOIN</span>
              <span className="text-white"> MISSION</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
              Regional Node Bitcoin Conferences across all 27 States & 8 Union Territories in their vernacular languages,
              spreading Bitcoin awareness and education Nationwide
            </p>
          </div>
        </FadeIn>

        {/* Main Content - Indian Map Hero */}
        <FadeIn direction="up" delay={200} duration={1000}>
          <div className="relative w-full flex flex-col items-center justify-center">
            {/* Map Container - This will be the main CTA/Hero */}
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <img
                  src={IndianMapImage}
                  alt="Interactive map of India showing Bitcoin conference locations across all 35 states and union territories"
                  className="w-full h-full object-contain translate-x-8 md:translate-x-12"
                  loading="lazy"
                />

                {/* Optional: Glow effect behind the map */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF8C00] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stats Cards Below Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 w-full max-w-5xl mx-auto">
              {/* Card 1: States Coverage */}
              <FadeIn direction="up" delay={300} duration={800}>
                <div className="border border-[#FFBF00]/30 rounded-lg px-4 py-4 text-center hover:border-[#FFBF00] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFBF00] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    35+
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    States & UTs
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: Regional Languages */}
              <FadeIn direction="up" delay={350} duration={800}>
                <div className="border border-[#FFBF00]/30 rounded-lg px-4 py-4 text-center hover:border-[#FFBF00] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFBF00] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    30+
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    Regional Languages
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Reach */}
              <FadeIn direction="up" delay={400} duration={800}>
                <div className="border border-[#FFBF00]/30 rounded-lg px-4 py-4 text-center hover:border-[#FFBF00] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFBF00] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    1.4+
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    Billion People
                  </div>
                </div>
              </FadeIn>

              {/* Card 4: Education Reach */}
              <FadeIn direction="up" delay={450} duration={800}>
                <div className="border border-[#FFBF00]/30 rounded-lg px-4 py-4 text-center hover:border-[#FFBF00] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#FFBF00] mb-1 whitespace-nowrap" style={{fontFamily: 'Sora, sans-serif'}}>
                    Year-Round
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    Of Education
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* CTA Section - Hidden for now */}
            {/* <FadeIn direction="up" delay={500} duration={800}>
              <div className="mt-10 md:mt-12 text-center">
                <Button
                  label="Explore State Events"
                  variant="primary"
                  withStarBorder={false}
                  className="px-10 py-4 text-base md:text-lg font-bold bg-[#FFBF00] text-black hover:bg-[#CB7608] hover:text-white rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                />
              </div>
            </FadeIn> */}
          </div>
        </FadeIn>
      </div>

      {/* Separator Line After Section */}
      <div className="w-full flex justify-center mt-10 sm:mt-12 px-6 md:px-12 lg:px-20">
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>
      </div>
    </section>
  );
};

export default IndianStatesSection;
