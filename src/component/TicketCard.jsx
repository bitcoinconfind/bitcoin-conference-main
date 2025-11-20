import Button from './Button';

const TicketCard = ({ tier, isPopular }) => {
  return (
    <div
      className="ticket-card-container relative scale-[.85] md:scale-100 transition-all duration-500 ease-out hover:scale-[.90] md:hover:scale-105"
    >
      {/* Card Content */}
      <div className="relative bg-black border-2 border-[#585858] rounded-2xl p-4 md:p-6 hover:border-[#f7931a] transition-all duration-500 flex flex-col h-full ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <span className="bg-[#f7931a] text-black px-4 py-1 rounded-full text-sm font-semibold">
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
              style={{ transform: 'scale(1.2)' }}
              loading="lazy"
            />
          )}
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{tier.title}</h4>
          <div className="text-3xl md:text-4xl font-bold text-[#f7931a] mb-2">
            ${tier.price}
            <span className="text-base md:text-lg text-gray-400 ml-1">{tier.currency}</span>
          </div>
        </div>

        <ul className="space-y-1.5 mb-4 flex-grow">
          {tier.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start text-gray-300">
              <svg className="w-5 h-5 text-[#f7931a] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-lg md:text-xl">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="w-full">
          <Button
            label="Coming Soon"
            variant="secondary"
            className="w-full py-2 md:py-3 text-sm md:text-lg font-semibold cursor-not-allowed mt-auto !border-[#f7931a] !border-2 !bg-transparent shadow-[0_0_10px_rgba(247,147,26,0.3)] hover:!bg-[#f7931a]/10 hover:!shadow-[0_0_20px_rgba(247,147,26,0.6)] transition-all duration-300 gradient-text"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
