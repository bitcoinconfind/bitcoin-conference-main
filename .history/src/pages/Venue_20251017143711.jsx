import React, { useState, useEffect } from "react";
const venueeBg = "/assets/imgs/others/Venue_bg.png";
const venuehero2="/assets/imgs/others/venue_hero_2.png";
const venuehero3="/assets/imgs/others/venue_hero_3.png";
const venuehero4="/assets/imgs/others/venue_hero_4.png";
const venueOne = "/assets/imgs/carousels/carousel_1.JPG";
const venueTwo = "/assets/imgs/carousels/carousel_2.JPG";
const venueThree = "/assets/imgs/carousels/carousel_3.JPG";
const venueFour = "/assets/imgs/carousels/carousel_4.JPG"; // Add a fourth image


// Create an array for the banner slider
const bannerImages = [venueeBg, venuehero2, venuehero3, venuehero4];

const Venue = () => {
  const Venue = () => {
  // State to track the current image index for the banner
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to automatically slide the banner images
  useEffect(() => {
    // Set up an interval to change the image every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty array [] ensures this effect runs only once on component mount

  // Must-visit places in Hyderabad (used by the carousel) — declare BEFORE hooks
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

  const [currentSlide, setCurrentSlide] = useState(0);

  // Disable auto-slide; keep static content
  useEffect(() => {
    setCurrentSlide(0);
  }, [venues.length]);
  // venues is now declared above
  return (
    <section className="relative w-full z-0">
      {/* Hero Title/Copy ABOVE the image */}
      <div className="w-full flex flex-col items-center text-center gap-3 sm:gap-4 pt-6 sm:pt-10 md:pt-12 relative z-20">
        <h1 className="metric-value leading-snug">Venue</h1>
        <p className="metric-label text-white max-w-2xl leading-relaxed px-5 text-[1.125rem] md:text-[1.25rem]">
          We're securing an iconic location in Hyderabad that will perfectly complement
          the scale and significance of India's premier Bitcoin conference.
        </p>
        {/* Removed old stay tuned chip here; now shown under the banner */}
      </div>

      {/* Static Venue background banner */}
      <div className="relative w-full flex justify-center px-5 z-10">
        <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[78%] border border-gray-500 rounded-lg overflow-hidden">
          <button className="h-3 w-3 bg-amber-300">
            <img src={heroBackground} alt="Venue background" className="w-full h-[36vh] sm:h-[48vh] md:h-[56vh] lg:h-[64vh] object-cover object-center" />
          </button>
        </div>
      </div>

      {/* Stay tuned chip directly under the venue background */}
      <div className="w-full flex justify-center mt-3 sm:mt-4">
        <span className="inline-block px-4 py-2 bg-[#FFBF00]/20 border border-[#FFBF00]/30 rounded-full text-sm font-medium text-[#FFBF00]">
          Stay tuned for the big reveal
        </span>
      </div>

      {/* Why Hyderabad blurb */}
      <div className="w-full px-6 sm:px-10 lg:px-20 mt-4 sm:mt-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="metric-value mb-2">Hyderabad: India’s Tech Hub</h2>
          <p className="metric-label text-[1.125rem] md:text-[1.25rem]">
            India’s tech capital of the South and home to world-class campuses, Hyderabad blends
            innovation hubs, global enterprises, and a thriving builder community—making it the
            perfect host city for Bitcoin Conference India.
          </p>
        </div>
      </div>

      {/* Removed moving desktop carousel; static grid below shows places */}
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
                className="w-full h-[28rem] object-cover object-top"
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
                className="w-full h-56 lg:h-[32rem] object-cover object-top transition-transform duration-500 hover:scale-110"
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
