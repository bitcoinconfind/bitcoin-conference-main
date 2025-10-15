import Home from "./Home";
import SponsorsSection from "../component/SponsorsSection";
import TicketTiersSection from "../component/TicketTiersSection";
import Speakers from "./Speakers";
import WhyAttend from "./WhyAttend";
import Venue from "./Venue";
import Footer from "./Footer";
import Button from "../component/Button";

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
    <>
      <Home />
      {/* Win Free Tickets CTA above Ticket Tiers */}
      <section className="pt-4 pb-8 px-4 bg-black mt-2">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            label="Win Free Tickets"
            variant="primary"
            withStarBorder={true}
            starSpeed="5s"
            className="px-8 py-4 text-lg font-semibold bg-[#FFBF00] text-black hover:bg-[#CB7608] transform hover:scale-105 transition-all duration-300 shadow-md"
            onClick={handleWinFreeTickets}
          />
        </div>
      </section>
      <TicketTiersSection />
      <Speakers />
      <WhyAttend />
      <Venue />
      <SponsorsSection />
      <Footer />
    </>
  );
};

export default Index;
