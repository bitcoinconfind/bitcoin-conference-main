import FadeIn from "./ui/FadeIn";
import { useCountUpOnScroll } from '../hooks/useCountUp';
// import Button from "./Button"; // Commented out - button is hidden for now

// Indian map image
import IndiaMap from "./IndiaMap";

const IndianStatesSection = () => {
  // Count-up animations for metric boxes - trigger on scroll
  const { ref: statesRef, count: statesCount } = useCountUpOnScroll("35+", { duration: 2000, delay: 0 });
  const { ref: languagesRef, count: languagesCount } = useCountUpOnScroll("30+", { duration: 2000, delay: 100 });
  const { ref: peopleRef, count: peopleCount } = useCountUpOnScroll("1.4+", { duration: 2000, delay: 200 });
  const { ref: educationRef, count: educationText } = useCountUpOnScroll("Year-Round", { duration: 2000, delay: 300 });
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* SEO-friendly heading */}
      <h2 className="sr-only">Bitcoin Conferences Across All 35 Indian States and Union Territories</h2>
      {/* Section Header */}
      <FadeIn direction="up" delay={100} duration={800}>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="text-white">ONE </span>
            <span className="gradient-text">NATION</span>
            <span className="text-white"> ONE </span>
            <span className="gradient-text">BITCOIN</span>
            <span className="text-white"> MISSION</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Regional Node Bitcoin Conferences across all 27 States & 8 Union Territories in their vernacular languages, spreading Bitcoin awareness and education Nationwide
          </p>
        </div>
      </FadeIn>

      {/* Main Content - Indian Map Hero */}
      <FadeIn direction="up" delay={200} duration={1000}>
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Map Container - This will be the main CTA/Hero */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative aspect-square md:aspect-[4/3] w-full">
              <IndiaMap
                className="w-full h-full translate-x-8 md:translate-x-12"
              />

              {/* Optional: Glow effect behind the map */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FF8C00] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Stats Cards Below Map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 w-full max-w-6xl mx-auto px-4">
            {/* Card 1: States Coverage */}
            <FadeIn direction="up" delay={300} duration={800}>
              <div ref={statesRef} className="group relative border border-white/10 rounded-2xl px-6 py-6 text-center transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-[#f7931a]/10 hover:border-[#f7931a]/50 hover:shadow-[0_0_30px_rgba(247,147,26,0.15)] hover:-translate-y-1 h-[140px] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7931a]/0 to-[#f7931a]/0 group-hover:from-[#f7931a]/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f7931a] to-[#ffb04e] mb-2 drop-shadow-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {statesCount}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors">
                    States & UTs
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Regional Languages */}
            <FadeIn direction="up" delay={350} duration={800}>
              <div ref={languagesRef} className="group relative border border-white/10 rounded-2xl px-6 py-6 text-center transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-[#f7931a]/10 hover:border-[#f7931a]/50 hover:shadow-[0_0_30px_rgba(247,147,26,0.15)] hover:-translate-y-1 h-[140px] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7931a]/0 to-[#f7931a]/0 group-hover:from-[#f7931a]/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f7931a] to-[#ffb04e] mb-2 drop-shadow-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {languagesCount}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors">
                    Regional Languages
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Reach */}
            <FadeIn direction="up" delay={400} duration={800}>
              <div ref={peopleRef} className="group relative border border-white/10 rounded-2xl px-6 py-6 text-center transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-[#f7931a]/10 hover:border-[#f7931a]/50 hover:shadow-[0_0_30px_rgba(247,147,26,0.15)] hover:-translate-y-1 h-[140px] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7931a]/0 to-[#f7931a]/0 group-hover:from-[#f7931a]/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f7931a] to-[#ffb04e] mb-2 drop-shadow-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {peopleCount}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors">
                    Billion People
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 4: Education Reach */}
            <FadeIn direction="up" delay={450} duration={800}>
              <div ref={educationRef} className="group relative border border-white/10 rounded-2xl px-6 py-6 text-center transition-all duration-500 bg-white/5 backdrop-blur-sm hover:bg-[#f7931a]/10 hover:border-[#f7931a]/50 hover:shadow-[0_0_30px_rgba(247,147,26,0.15)] hover:-translate-y-1 h-[140px] flex flex-col justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7931a]/0 to-[#f7931a]/0 group-hover:from-[#f7931a]/5 group-hover:to-transparent transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f7931a] to-[#ffb04e] mb-2 whitespace-nowrap drop-shadow-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {educationText}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors">
                    Of Education
                  </div>
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
                  className="px-10 py-4 text-base md:text-lg font-bold bg-[#f7931a] text-black rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                />
              </div>
            </FadeIn> */}
        </div>
      </FadeIn>
    </div>
  );
};

export default IndianStatesSection;
