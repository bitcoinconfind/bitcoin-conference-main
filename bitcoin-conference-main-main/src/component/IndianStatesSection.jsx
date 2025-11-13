import FadeIn from "./ui/FadeIn";
import { useCountUpOnScroll } from '../hooks/useCountUp';
// import Button from "./Button"; // Commented out - button is hidden for now

// Indian map image
const IndianMapImage = "/india 1.svg";

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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'Sora, sans-serif'}}>
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
                <div ref={statesRef} className="border border-[#f7931a]/30 rounded-lg px-4 py-4 text-center hover:border-[#f7931a] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#f7931a] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    {statesCount}
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    States & UTs
                  </div>
                </div>
              </FadeIn>

              {/* Card 2: Regional Languages */}
              <FadeIn direction="up" delay={350} duration={800}>
                <div ref={languagesRef} className="border border-[#f7931a]/30 rounded-lg px-4 py-4 text-center hover:border-[#f7931a] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#f7931a] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    {languagesCount}
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    Regional Languages
                  </div>
                </div>
              </FadeIn>

              {/* Card 3: Reach */}
              <FadeIn direction="up" delay={400} duration={800}>
                <div ref={peopleRef} className="border border-[#f7931a]/30 rounded-lg px-4 py-4 text-center hover:border-[#f7931a] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#f7931a] mb-1" style={{fontFamily: 'Sora, sans-serif'}}>
                    {peopleCount}
                  </div>
                  <div className="text-white text-xs md:text-sm">
                    Billion People
                  </div>
                </div>
              </FadeIn>

              {/* Card 4: Education Reach */}
              <FadeIn direction="up" delay={450} duration={800}>
                <div ref={educationRef} className="border border-[#f7931a]/30 rounded-lg px-4 py-4 text-center hover:border-[#f7931a] transition-colors duration-300 bg-black/50 h-[120px] flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#f7931a] mb-1 whitespace-nowrap" style={{fontFamily: 'Sora, sans-serif'}}>
                    {educationText}
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
