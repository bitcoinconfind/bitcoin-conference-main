import React from 'react';
import TicketCard from './TicketCard';
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
        "Entry to Bitcoin INDIA 2026",
        "Full access to the Expo Hall, India's largest Bitcoin showcase",
        "Access to the Main Stage and interactive zones",
        "Open networking throughout the day"
      ]
    },
    {
      title: "VIP Pass",
      price: "399",
      currency: "USD",
      image: VIPImg,
      features: [
        "Everything in General Admission",
        "Priority check in for faster entry",
        "Access to the VIP Room",
        "Complimentary coffee, refreshments, and lounge access",
        "Access to the After Party"
      ]
    },
    {
      title: "Whale Pass",
      price: "2999",
      currency: "USD",
      image: WhaleImg,
      features: [
        "Everything in the VIP Pass",
        "Dedicated registration concierge",
        "Access to the speakers, the backstage Whale Lounge",
        "Front row seating at the Main Stage",
        "All inclusive gourmet dining and premium coffee service",
        "Private Whale only sessions with top speakers",
        "Invitation to Whale Night"
      ]
    }
  ];

  return (
    <div id="tickets" className="py-16 px-4 sm:px-8 lg:px-20 bg-black">
      {/* Header Section (removed Coming Soon per request) */}
      <div className="text-center mb-8">
        <h2 className="metric-value mb-2">Ticket Tiers</h2>
        <p className="metric-label text-[1.125rem]">Choose your experience level for Bitcoin Conference India 2026</p>
      </div>

      {/* Ticket Tiers Section */}
      <div className="max-w-7xl mx-auto">
        

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
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="metric-value mb-2">Hyderabad</div>
              <div className="metric-label">Location</div>
            </div>
            <div className="text-center">
              <div className="metric-value mb-2">2026</div>
              <div className="metric-label">Year</div>
            </div>
            <div className="text-center">
              <div className="metric-value mb-2">FEB/2026</div>
              <div className="metric-label">Date</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TicketTiersSection;
