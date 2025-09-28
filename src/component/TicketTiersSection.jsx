import React from 'react';
import Button from './Button';

const TicketTiersSection = () => {
  const handleWinFreeTickets = () => {
    // Get referral code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const referralCode = urlParams.get('referralCode');
    
    // Direct redirect to dashboard with referral code
    const dashboardUrl = 'http://localhost:4174';
    const params = new URLSearchParams({
      ...(referralCode && { referralCode: referralCode })
    });
    
    window.location.href = `${dashboardUrl}?${params.toString()}`;
  };

  const ticketTiers = [
    {
      title: "General Admission",
      price: "50",
      currency: "USD",
      features: [
        "General admission to Bitcoin INDIA 2026",
        "Full access to the Expo Hall – India's largest Bitcoin showcase",
        "Entry to the Main Stage and interactive activations",
        "Networking opportunities",
        "Conference materials"
      ]
    },
    {
      title: "Pro Pass",
      price: "250",
      currency: "USD",
      features: [
        "Everything included in the General Admission Pass",
        "Dedicated check-in lines for faster entry",
        "Access to the exclusive Enterprise Hall and Enterprise Stage",
        "Entry to Bitcoin for Corporations programming",
        "Complimentary coffee, refreshments, and lounge access",
        "Premium networking & matchmaking tools"
      ]
    },
    {
      title: "Whale Pass",
      price: "2500",
      currency: "USD",
      features: [
        "VIP access with a dedicated registration concierge",
        "Access to The Deep – an exclusive backstage Whale Lounge",
        "Front-row premium seating at the Main Stage",
        "All-inclusive gourmet dining, open bar, and premium coffee service",
        "Private Whale-only content sessions with top speakers",
        "Exclusive invitation to Whale Night",
        "Priority networking features & concierge support"
      ]
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-20 bg-black">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFBF00] mb-6 font-familjen">
          Coming Soon
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-semibold">
          Bitcoin Conference India 2026
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
          Get ready for the most exciting Bitcoin conference in India. 
          Stay updated with the latest announcements and be the first to know when tickets go live.
        </p>
        
      </div>

      {/* Ticket Tiers Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-familjen">
            Ticket Tiers
          </h3>
          <p className="text-lg text-gray-300">
            Choose your experience level for Bitcoin Conference India 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketTiers.map((tier, index) => (
            <div key={index} className="relative bg-[#1F1F1F] border border-[#585858] rounded-2xl p-8 hover:border-[#FFBF00] transition-all duration-300">
              {/* Popular Badge for Pro Pass */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FFBF00] text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">{tier.title}</h4>
                <div className="text-4xl font-bold text-[#FFBF00] mb-2">
                  ${tier.price}
                  <span className="text-lg text-gray-400 ml-1">{tier.currency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-[#FFBF00] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                label="Coming Soon"
                variant="secondary"
                className="w-full py-3 text-lg font-semibold opacity-75 cursor-not-allowed"
                disabled={true}
              />
            </div>
          ))}
        </div>

        {/* Event Details */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[#FFBF00]">Hyderabad</div>
              <div className="text-lg text-gray-400">Location</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[#FFBF00]">2026</div>
              <div className="text-lg text-gray-400">Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-[#FFBF00]">TBA</div>
              <div className="text-lg text-gray-400">Date</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TicketTiersSection;
