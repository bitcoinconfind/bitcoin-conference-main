import React from "react";
import Home from "./Home";
import MainPromotionalSection from "../component/MainPromotionalSection";
import ComingSoon from "../component/ComingSoon";
import ConferenceMetrics from "../component/ConferenceMetrics";
import TicketTiersSection from "../component/TicketTiersSection";
import Speakers from "./Speakers";
import Highlights from "./Highlights";
import Venue from "./Venue";
// Removed Telsection per request
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <Home />
      <MainPromotionalSection />
      <TicketTiersSection />
      <Speakers />
      <ConferenceMetrics />
      <Highlights />
      <Venue />
      <ComingSoon />
      <Footer />
    </>
  );
};

export default Index;
