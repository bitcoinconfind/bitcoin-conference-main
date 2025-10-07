import Button from "../component/Button";

const QuoteMobile = "/assets/imgs/Quote/Frame 47487.png";
const QuoteDesktop = "/assets/imgs/Quote/Quote.png";

const Speakers = () => {
  return (
    <section id="speakers" className="mt-10 sm:mt-14 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-bold font-familjen text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          Speakers Announcing Soon
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14">
        <a href="/apply/speaker">
          <div className="w-auto border-1 p-1 border-[#1F1F1F] rounded-lg">
            <Button
              label={"Apply to be a Speaker"}
              withStarBorder={true}
              starSpeed="5s"
              className="px-12 sm:px-8 md:px-10 py-4 sm:py-3 text-lg sm:text-sm md:text-base lg:text-lg"
            />
          </div>
        </a>
      </div>

      {/* Quote Image - Responsive */}
      <div className="mt-12 sm:mt-16 flex justify-center overflow-hidden">
        {/* Mobile view - Frame 47487 */}
        <img
          src={QuoteMobile}
          alt="Bitcoin Conference India 2026 Quote"
          className="block lg:hidden w-full max-w-3xl object-contain transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
        />
        {/* Desktop view - Quote */}
        <img
          src={QuoteDesktop}
          alt="Bitcoin Conference India 2026 Quote"
          className="hidden lg:block w-full max-w-7xl object-contain transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Speakers;
