import Home from "./Home";
import SponsorsSection from "../component/SponsorsSection";
import TicketTiersSection from "../component/TicketTiersSection";
import Speakers from "./Speakers";
import WhyAttend from "./WhyAttend";
import IndianStatesSection from "../component/IndianStatesSection";
import Venue from "./Venue";
import Footer from "./Footer";
import Button from "../component/Button";
import LiveRegistrationCounter from "../component/LiveRegistrationCounter";

const Index = () => {
  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');

    // Direct redirect to dashboard with referral code
    const base = import.meta.env.VITE_DASHBOARD_URL;
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });

    window.location.href = `${base.replace(/\/$/, '')}?${params.toString()}`;
  };

  return (
    <div className="space-y-16 md:space-y-20">
      <Home />
      {/* Get Free Tickets CTA above Ticket Tiers */}
      <div className="flex justify-center -mt-16">
        <Button
          label="Get Free Tickets"
          variant="primary"
          withStarBorder={true}
          starSpeed="5s"
          className="px-8 py-4 text-lg font-semibold bg-[#FFBF00] text-black transform hover:scale-105 transition-all duration-300 shadow-md"
          onClick={handleWinFreeTickets}
        />
      </div>
      <LiveRegistrationCounter />
      <TicketTiersSection />
      <Speakers />
      <WhyAttend />
      <IndianStatesSection />
      <Venue />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
