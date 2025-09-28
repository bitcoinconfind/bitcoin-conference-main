import React from "react";
import circle from "../assets/imgs/others/Subtract.png";
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
      <div className="relative flex items-center justify-center">
        <img
          src={circle}
          alt="Circle"
          className="w-56 h-56 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72"
        />
        <img
          src={img}
          alt={name}
          className="absolute rounded-full w-44 h-44 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52 object-cover blur-lg"
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
        <a href="/apply/speaker">
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
