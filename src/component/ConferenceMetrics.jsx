import React from 'react';
import { FaVideo, FaCalendarAlt, FaHandshake, FaUsers, FaMicrophone, FaBuilding } from 'react-icons/fa';

const ConferenceMetrics = () => {
  const metrics = [
    {
      icon: <FaVideo className="w-8 h-8" />,
      value: "150+",
      label: "Media & Press"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      value: "2 days",
      label: "of Content"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      value: "200+",
      label: "Partners"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "40k+",
      label: "Attendees"
    },
    {
      icon: <FaMicrophone className="w-8 h-8" />,
      value: "150+",
      label: "Speakers"
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      value: "100+",
      label: "Sponsors"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Metrics Container with Elegant Glowing Border */}
        <div className="relative bg-black border-2 border-[#FFBF00] rounded-2xl p-8 shadow-2xl">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF00] via-[#CB7608] to-[#FFBF00] rounded-2xl opacity-20 blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="text-white mb-4">
                    {metric.icon}
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-familjen">
                    {metric.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {metric.label}
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

export default ConferenceMetrics;
