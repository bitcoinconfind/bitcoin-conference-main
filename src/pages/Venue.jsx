import React, { useState, useEffect } from "react";
const venueeBg = "/assets/imgs/others/Venue_bg.png";
const venueOne = "/assets/imgs/carousels/carousel_1.JPG";
const venueTwo = "/assets/imgs/carousels/carousel_2.JPG";
const venueThree = "/assets/imgs/carousels/carousel_3.JPG";
const venueFour = "/assets/imgs/carousels/carousel_4.JPG"; // Add a fourth image

const Venue = () => {
  // Hero carousel images
  const heroImages = [
    "/assets/imgs/others/Venue_bg.png", // Image 1 - Current building
    "/assets/imgs/others/venue_hero_2.png", // Image 2 - Nighttime palace (you'll add this)
    "/assets/imgs/others/venue_hero_3.png", // Image 3 - Placeholder
    "/assets/imgs/others/venue_hero_4.png", // Image 4 - Placeholder
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
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
      alt: "Hussain Sagar Hyderabad",
      title: "Hussain Sagar",
      description: "At Hussain Sagar, the 125 ft Ambedkar statue and the monolithic Buddha share the skyline and frame Tank Bund.",
    },
  ];
  return (
    <section className="relative w-full p-5">
      {/* Hero Carousel Section */}
      <div className="relative w-full flex justify-center py-12 sm:py-16 md:py-24 lg:py-32">
       
        <div className="relative w-[93%] sm:w-[88%] md:w-[83%] lg:w-[78%] border-1 border-gray-500 rounded-lg overflow-hidden">
          {/* Carousel Container */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] overflow-hidden">
            {/* Sliding Images */}
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
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
      {/* Photo grid - 4 equal parts */}
      <div className="w-full flex flex-wrap justify-center gap-6 px-5">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="w-full sm:w-[95%] md:w-[45%] lg:w-[22%] rounded-lg border border-gray-500 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer bg-black"
          >
            <div className="overflow-hidden">
              <img
                src={venue.img}
                alt={venue.alt}
                className="w-full h-[32rem] object-cover transition-transform duration-500 hover:scale-110"
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
