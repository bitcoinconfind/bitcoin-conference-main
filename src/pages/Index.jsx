import React from "react";
import Home from "./Home";
import MainPromotionalSection from "../component/MainPromotionalSection";
import ConferenceMetrics from "../component/ConferenceMetrics";
import Speakers from "./Speakers";
import Highlights from "./Highlights";
import Venue from "./Venue";
import Telsection from "./Telsection";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <Home />
      <MainPromotionalSection />
      <Speakers />
      <ConferenceMetrics />
      <Highlights />
      <Venue />
      <Telsection />
      <Footer />
    </>
  );
};

export default Index;
