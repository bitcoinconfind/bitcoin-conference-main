import { useState } from "react";
import { X } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";


const TicketCard = ({ tier, isPopular }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility for ticket purchase options Crypto and USD


  
 const navigate= useNavigate();
 
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <>
      <div
        className="ticket-card-container relative scale-[.85] md:scale-100"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.05 : 1})`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="ticket-card-border absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="animated-border"></div>
        </div>

        <div className="relative bg-[#1A1A1A] border border-[#444] rounded-2xl p-4 md:p-6 hover:border-orange-500 transition-all duration-300 flex flex-col h-full">
          {isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                Most Valuable
              </span>
            </div>
          )}

          <div className="text-center mb-4">
            {tier.image && (
              <img
                src={tier.image}
                alt={`${tier.title} pass`}
                className="w-full h-auto rounded-xl mb-3 origin-center"
                style={{ transform: "scale(1.17)" }}
                loading="lazy"
              />
            )}
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
              {tier.title}
            </h4>
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
              ${tier.price}
              <span className="text-base md:text-lg text-gray-400 ml-1">
                {tier.currency}
              </span>
            </div>
          </div>

          <ul className="space-y-1.5 mb-4 flex-grow">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-300">
                <svg
                  className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg md:text-xl">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            label="Get Ticket"
            variant="secondary"
            onClick={() => setShowPopup(true)}
            className="w-full py-2 md:py-3 text-sm md:text-lg font-semibold mt-auto bg-orange-500 text-black hover:bg-orange-400 transition"
          />
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Black blurred background */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          ></div>

          {/* Popup content */}
          <div className="relative bg-[#0F0F0F] text-white rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-4 border border-[#FF8800]/50 animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X size={26} />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              GET YOUR TICKET NOW
            </h2>
            <p className="text-center text-gray-400 mb-6">
              Save 10% on your Super Early Bird ticket for a limited time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {/* Pay with USD */}
          <div
          onClick={() => navigate("/checkout/usd")}
          className="group relative p-6 rounded-xl bg-[#1B1B1B] border border-[#333] hover:border-orange-500 transition-all cursor-pointer overflow-hidden"
>          <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 animate-borderGlow rounded-xl"></div>
         <div className="relative text-center">
          <div className="flex justify-center space-x-2 mb-2">
         <img src="../assets/imgs/logo/visa.png" alt="Visa" className="w-8 h-6" />
        <img src="../assets/imgs/logo/mastercard.png" alt="Mastercard" className="w-8 h-6" />
        <img src="../assets/imgs/logo/amex.png" alt="Amex" className="w-8 h-6" />
      </div>
      <h3 className="font-semibold text-lg mb-1">PAY WITH USD</h3>
       <p className="text-gray-400 text-sm">
        Pay securely using your credit card.
     </p>
    </div>
   </div>

   {/* Pay with Crypto */}
   <div
    onClick={() => navigate("/checkout/crypto")}
    className="group relative p-6 rounded-xl bg-[#1B1B1B] border border-[#333] hover:border-orange-500 transition-all cursor-pointer overflow-hidden"
>  <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 animate-borderGlow rounded-xl"></div>
     <div className="relative text-center">
    <div className="flex justify-center space-x-2 mb-2">
      <img src="../assets/imgs/logo/metamask.png" alt="Metamask" className="w-7 h-7" />
      <img src="/assets/imgs/logo/coinbase.png" alt="Coinbase" className="w-7 h-7" />
      <img src="/assets/imgs/logo/phantom.png" alt="Phantom" className="w-7 h-7" />
    </div>
      <h3 className="font-semibold text-lg mb-1">PAY WITH CRYPTO</h3>
     <p className="text-gray-400 text-sm">
      Processed via Crypto Coinbase Commerce.
    </p>
   </div>
    </div>
   </div>
 </div>
 </div>
      )}
    </>
  );
};

export default TicketCard; 