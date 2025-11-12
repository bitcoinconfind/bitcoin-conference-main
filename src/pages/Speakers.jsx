import { useState, useEffect } from "react";
import Button from "../component/Button";
import FadeIn from "../component/ui/FadeIn";

// Quote images for desktop carousel
const Quote3 = "/assets/imgs/quote/Quote (3).png";
const Quote4 = "/assets/imgs/quote/Quote (4).png";
const Quote5 = "/assets/imgs/quote/Quote (5).png";
const Quote6 = "/assets/imgs/quote/Quote (6).png";
const Quote7 = "/assets/imgs/quote/Quote (7).png";
const Quote8 = "/assets/imgs/quote/Quote (8).png";

// Mobile static image
const QuoteMobile = "/assets/imgs/quote/Frame 47488.png";

const Speakers = () => {
  // Carousel state for desktop quote images
  const [currentQuote, setCurrentQuote] = useState(0);

  const quoteImages = [Quote3, Quote4, Quote5, Quote6, Quote7, Quote8];

  // Auto-slide carousel every 5 seconds (slow animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quoteImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quoteImages.length]);
  return (
    <div id="speakers" className="scroll-mt-24 max-w-7xl mx-auto">
      {/* Heading */}
      <FadeIn direction="up" duration={800}>
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="metric-value leading-tight gradient-text">Speakers</h1>
          <p className="metric-label max-w-3xl mx-auto mt-3">
            Share your expertise with a high-intent audience of builders, investors, and media.
            Our top speaker lineup is being curated and will be revealed soon , apply now to be part of it.
          </p>
        </div>
      </FadeIn>

      {/* Buttons */}
      <FadeIn direction="up" delay={200} duration={800}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14">
          <a href="/apply/speaker">
            <div className="w-auto border-1 p-1 border-[#1F1F1F] rounded-lg">
              <Button
                label={"Apply to be a Speaker"}
                variant="primary"
                withStarBorder={true}
                starSpeed="5s"
                className="px-12 sm:px-8 md:px-10 py-4 sm:py-3 text-lg sm:text-sm md:text-base lg:text-lg !bg-[#f7931a] text-black"
              />
            </div>
          </a>
        </div>
      </FadeIn>

      {/* Separation Line */}
      <div className="w-full flex justify-center mt-12 sm:mt-16">
        <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>
      </div>

      {/* Quote images - carousel for desktop, static for mobile */}
      <FadeIn direction="up" delay={400} duration={1000}>
        <div className="mt-12 sm:mt-16 flex justify-center overflow-hidden">
          {/* Mobile - Static Image */}
          <div className="lg:hidden w-full max-w-3xl">
            <img
              src={QuoteMobile}
              alt="Bitcoin Conference India 2026 Quote"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>

        {/* Desktop - Auto-sliding Carousel */}
        <div className="hidden lg:block w-full max-w-7xl relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentQuote * 100}%)` }}
            >
              {quoteImages.map((quote, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <img
                    src={quote}
                    alt={`Bitcoin Conference India 2026 Quote ${index + 1}`}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation - Sleek Line Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {quoteImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className="group relative"
                aria-label={`Go to quote ${index + 1}`}
              >
                <div
                  className={`h-0.5 transition-all duration-500 ease-out ${
                    currentQuote === index
                      ? "w-16 bg-[#f7931a]"
                      : "w-8 bg-gray-600 group-hover:bg-gray-400 group-hover:w-12"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Speakers;
