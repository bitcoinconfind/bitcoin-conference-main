import React from "react";
import videoIcon from "../assets/imgs/counter/Video.png";
import calendarIcon from "../assets/imgs/counter/calendar.png";
import partnersIcon from "../assets/imgs/counter/Partners.png";
import attendeesIcon from "../assets/imgs/counter/attendees.png";
import speakerIcon from "../assets/imgs/counter/speaker.png";
import sponsorsIcon from "../assets/imgs/counter/sponsors.png";
const Counter = () => {
  const counters = [
    { id: 1, img: videoIcon, number: "150+", label: "Media & Press" },
    { id: 2, img: calendarIcon, number: "2 days", label: "of Content" },
    { id: 3, img: partnersIcon, number: "200+", label: "Partners" },
    { id: 4, img: attendeesIcon, number: "40k+", label: "Attendees" },
    { id: 5, img: speakerIcon, number: "50+", label: "Speakers" },
    { id: 6, img: sponsorsIcon, number: "100+", label: "Sponsors" },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Stats Container with Elegant Glowing Border */}
        <div className="relative bg-black border-2 border-[#FFBF00] rounded-2xl p-8 shadow-2xl">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF00] via-[#CB7608] to-[#FFBF00] rounded-2xl opacity-20 blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {counters.map((item, index) => (
                <div key={item.id} className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="text-white mb-4">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-8 h-8 mx-auto"
                    />
                  </div>
                  
                  {/* Metric */}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-familjen">
                    {item.number}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
