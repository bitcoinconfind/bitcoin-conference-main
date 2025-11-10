import React from 'react';
import TicketCard from './TicketCard';
import FadeIn from './ui/FadeIn';
const GAImg = '/assets/imgs/ticketTiers/Bitcoin India Pass - GA.svg';
const VIPImg = '/assets/imgs/ticketTiers/Bitcoin India Pass - VIP.svg';
const WhaleImg = '/assets/imgs/ticketTiers/Bitcoin India Pass - WHALE.svg';

const TicketTiersSection = () => {
  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    
    // Direct redirect to dashboard with referral code (env-based)
    const base = import.meta.env.VITE_DASHBOARD_URL;
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    window.location.href = `${base.replace(/\/$/, '')}?${params.toString()}`;
  };

  const ticketTiers = [
    {
      title: "General Admission",
      price: "99",
      currency: "USD",
      image: GAImg,
      features: [
        "Admission to Bitcoin India Conference 2026",
        "Complete access to India's premier Bitcoin Expo Hall",
        "Explore the Main Stage presentations and interactive areas",
        "All-day networking opportunities with attendees"
      ]
    },
    {
      title: "VIP Pass",
      price: "599",
      currency: "USD",
      image: VIPImg,
      features: [
        "All General Admission benefits included",
        "Fast-track registration and entry privileges",
        "Exclusive VIP Lounge access",
        "Premium beverages, snacks, and private relaxation area",
        "Official After Party invitation"
      ]
    },
    {
      title: "Whale Pass",
      price: "2999",
      currency: "USD",
      image: WhaleImg,
      features: [
        "Complete VIP Pass benefits included",
        "Personal concierge for registration assistance",
        "Backstage Whale Lounge with direct speaker access",
        "Reserved front row seats at Main Stage events",
        "Full-service gourmet meals and premium beverage station",
        "Exclusive private sessions with industry-leading speakers",
        "Special invitation to the exclusive Whale Night event"
      ]
    }
  ];

  return (
    <div id="tickets" className="max-w-7xl mx-auto">
      {/* Header Section (removed Coming Soon per request) */}
      <FadeIn direction="up" duration={800}>
        <div className="text-center mb-8">
          <h2 className="metric-value mb-2 gradient-text">Ticket Tiers</h2>
          <p className="metric-label text-[1.125rem]">Choose your experience level for Bitcoin Conference India 2026</p>
        </div>
      </FadeIn>

      {/* Ticket Tiers Section */}
      <div>
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 -my-4 md:my-0">
          {ticketTiers.map((tier, index) => (
            <TicketCard
              key={index}
              tier={tier}
              index={index}
              isPopular={index === 1}
            />
          ))}
        </div>

        {/* Event Details */}
        <FadeIn direction="up" delay={400} duration={800}>
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center card-hover-lift">
                <div className="text-[#FFBF00] font-sora font-bold text-3xl sm:text-4xl mb-2 tracking-tight">Hyderabad</div>
                <div className="metric-label text-base">Location</div>
              </div>
              <div className="text-center card-hover-lift">
                <div className="text-[#FFBF00] font-sora font-bold text-3xl sm:text-4xl mb-2 tracking-tight">2026</div>
                <div className="metric-label text-base">Year</div>
              </div>
              <div className="text-center card-hover-lift">
                <div className="text-[#FFBF00] font-sora font-bold text-3xl sm:text-4xl mb-2 tracking-tight">FEB/2026</div>
                <div className="metric-label text-base">Date</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Separation Line */}
        <div className="w-full flex justify-center mt-12">
          <div className="w-full h-[1px] border-t border-[0.5px] [border-image-source:linear-gradient(90deg,#010101_20.49%,#FBF5EE_47.96%,#010101_84.28%)] [border-image-slice:1]"></div>
        </div>
      </div>
    </div>
  );
};

export default TicketTiersSection;
