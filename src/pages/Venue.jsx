import React, { useState, useEffect } from "react";
const venueeBg = "/assets/imgs/others/Venue_bg.png";
const venueOne = "/assets/imgs/carousels/carousel_1.JPG";
const venueTwo = "/assets/imgs/carousels/carousel_2.JPG";
const venueThree = "/assets/imgs/carousels/carousel_3.JPG";
const venueFour = "/assets/imgs/carousels/carousel_4.jpg"; // Add a fourth image

const Venue = () => {
  // Hero carousel images
  const heroImages = [
    "/assets/imgs/others/Venue_bg.png", // Image 1 - Current building
    "/assets/imgs/others/venue_hero_2.png", // Image 2 - Nighttime palace (you'll add this)
    "/assets/imgs/others/venue_hero_3.png", // Image 3 - Placeholder
    "/assets/imgs/others/venue_hero_4.png", // Image 4 - Placeholder
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3.5 seconds - ONLY on desktop/tablet (md and above)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    // Reset to first slide on mobile
    if (!mediaQuery.matches) {
      setCurrentSlide(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    // Listen for screen size changes
    const handleChange = (e) => {
      if (!e.matches) {
        setCurrentSlide(0); // Reset to first slide when switching to mobile
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      clearInterval(interval);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [heroImages.length]);
  const venues = [
    {
      id: 1,
      img: venueOne,
      alt: "Charminar Hyderabad",
      title: "Charminar",
      description: "The iconic monument and mosque located in the heart of Hyderabad",
    },
    {
      id: 2,
      img: venueTwo,
      alt: "Cyber Towers Hyderabad",
      title: "Cyber Towers",
      description: "The honeycomb-fronted landmark that marks the gateway to HITEC City.",
    },
    {
      id: 3,
      img: venueThree,
      alt: "T-Hub 2.0 Hyderabad",
      title: "The T-Hub 2.0",
      description: "The T-Hub 2.0 campus in Raidurg is a massive innovation hub that hosts startups, corporates, and programs under one roof.",
    },
    {
      id: 4,
      img: venueFour,
      alt: "Amazon Campus Hyderabad",
      title: "Amazon Campus",
      description: "The world's largest Amazon campus outside the US, spanning 9.5 acres with cutting-edge architecture and state-of-the-art facilities in the heart of Hyderabad's IT corridor.",
    },
  ];
  return (
    <section className="relative w-full">
      {/* Hero Carousel Section */}
      <div className="relative w-full flex justify-center py-6 sm:py-12 md:py-16 lg:py-24 px-5">

        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[78%] border border-gray-500 rounded-lg overflow-hidden">
          {/* Carousel Container */}
          <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
            {/* Mobile: Show only first image (no sliding) */}
            <div className="block md:hidden w-full h-full">
              <img
                src={heroImages[0]}
                alt="Venue 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop: Sliding Images */}
            <div
              className="hidden md:flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroImages.map((image, index) => (
                <div key={index} className="min-w-full h-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Venue ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
            }}
          ></div>

          {/* Content on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10 space-y-4">
            <h1 className="text-2xl font-familjen sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug">
              Venue Announcement
              <br />
              <span className="text-[#FFBF00]">Coming Soon</span>
            </h1>
            <p className="text-sm font-inter sm:text-base md:text-lg max-w-xl leading-relaxed text-gray-300">
              We're securing an iconic location in Hyderabad that will perfectly complement 
              the scale and significance of India's premier Bitcoin conference.
            </p>
            <div className="mt-4">
              <span className="inline-block px-4 py-2 bg-[#FFBF00]/20 border border-[#FFBF00]/30 rounded-full text-sm font-medium text-[#FFBF00]">
                Stay tuned for the big reveal
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Photo grid - All devices show all 4 cards */}

      {/* Mobile - Stacked Cards */}
      <div className="flex md:hidden flex-col gap-6 w-full px-5 py-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="w-full max-w-sm mx-auto rounded-lg border border-gray-500 overflow-hidden bg-black"
          >
            <div className="overflow-hidden">
              <img
                src={venue.img}
                alt={venue.alt}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-xl font-familjen mb-2">{venue.title}</h3>
              <p className="text-sm font-inter text-gray-300">{venue.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop - Grid Layout */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 px-5 py-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-lg border border-gray-500 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer bg-black"
          >
            <div className="overflow-hidden">
              <img
                src={venue.img}
                alt={venue.alt}
                className="w-full h-56 lg:h-[32rem] object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4 text-white">
              <h3 className="text-xl font-familjen mb-2">{venue.title}</h3>
              <p className="text-sm font-inter text-gray-300">{venue.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venue;
