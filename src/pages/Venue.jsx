import React from "react";
import venueeBg from "../assets/imgs/others/Venue_bg.png";
import venueOne from "../assets/imgs/carousels/carousel_1.png";
import venueTwo from "../assets/imgs/carousels/carousel_2.png";
import venueThree from "../assets/imgs/carousels/carousel_3.png";

const Venue = () => {
  const venues = [
    {
      id: 1,
      img: venueOne,
      alt: "Modern City Buildings",
    },
    {
      id: 2,
      img: venueTwo,
      alt: "Bridge on Water",
    },
    {
      id: 3,
      img: venueThree,
      alt: "Metro Station",
    },
  ];
  return (
    <section className="relative w-full p-5">
      {/* Image with Overlay */}
      <div className="relative w-full flex justify-center py-12 sm:py-16 md:py-24 lg:py-32">
       
        <div className="relative w-full sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500 rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            src={venueeBg}
            alt="Venue"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
            }}
          ></div>

          {/* Content on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-0 lg:mt-45 text-center text-white px-4 sm:px-6 md:px-10 space-y-4">
            <p className="text-sm font-familjen sm:text-base md:text-lg lg:text-xl tracking-wide uppercase text-[#FFBF00]">
              Venue
            </p>
            <h1 className="text-2xl font-familjen sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-snug">
              Venue Announcement
              <br className="hidden sm:block" />
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
      {/* Photo grid */}
      <div className="w-full flex flex-wrap justify-center gap-5 p-5">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className={`w-full sm:w-[90%] md:w-[45%] rounded-lg border border-gray-500 overflow-hidden 
        ${venue.id === 2 ? "lg:max-w-lg" : "lg:max-w-sm"}`}
          >
            <img
              src={venue.img}
              alt={venue.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Venue;
