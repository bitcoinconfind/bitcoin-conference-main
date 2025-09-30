import React from "react";
import square from "../assets/imgs/others/Subtract.svg";
import circleUser from "../assets/imgs/others/MeetSpeakers.jpg";
import Button from "../component/Button";

const speakersData = [
  {
    id: 1,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
  {
    id: 2,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
  {
    id: 3,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
  {
    id: 4,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
  {
    id: 5,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
  {
    id: 6,
    img: circleUser,
    name: "Charles Cascarilla",
    company: "Company",
    role: "CEO & Founder",
  },
];

const SpeakerCard = ({ img, name, company, role }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circle + User */}
      <div className="relative w-56 h-56 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72">
        {/* Blurred speaker fills the entire square, clipped to circle */}
        <img
          src={img}
          alt={name}
          className="absolute rounded-full object-cover z-10"
          style={{ width: '85%', height: '85%', left: '7.5%', top: '7.5%', filter: 'blur(6px) brightness(0.9)', position: 'absolute' }}
        />
        {/* Square ring exactly on edges */}
        <img
          src={square}
          alt="Square"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="mt-4 sm:mt-6 space-y-1">
        <h2 className="text-white font-familjen font-bold text-xl sm:text-lg md:text-xl lg:text-2xl">
          Comming Soon
        </h2>
        <h3 className="text-[#CB7608] font-familjen font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl">
          {company}
        </h3>
        <p className="text-gray-400 font-familjen font-medium text-md sm:text-sm md:text-base lg:text-lg">
          {role}
        </p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <section id="speakers" className="mt-10 sm:mt-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-bold font-familjen text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Our Speakers
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 p-10">
        {speakersData.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14">
        <div className="w-auto border-1 p-1 border-[#1F1F1F] rounded-lg">
          <Button
            label={"More Speakers Announcing Soon"}
            className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold"
            variant="general"
          />
        </div>
        <a href="mailto:contact@bitcoinconfindia.com?subject=Apply%20to%20be%20Speaker">
          <div className="w-auto border-1 p-1 border-[#1F1F1F] rounded-lg">
            <Button
              label={"Apply to be a Speaker"}
              className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-xs sm:text-sm md:text-base lg:text-lg"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Speakers;
