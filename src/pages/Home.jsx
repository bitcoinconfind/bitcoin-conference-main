import React from "react";
import Button from "../component/Button";
import HeroSection from "../component/HeroSection";

const Home = () => {
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="w-full max-w-full relative">
        <HeroSection />
      </div>
    </section>
  );
};

export default Home;
