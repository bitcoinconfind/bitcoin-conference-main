import Button from "../component/Button";

// Case-sensitive paths (ensure folder name matches actual: 'quote')
const QuoteMobile = "/assets/imgs/quote/mobile-view.svg";
const QuoteDesktop = "/assets/imgs/quote/desktop-view.svg";

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

      {/* Quote image - different assets for mobile and desktop */}
      <div className="mt-12 sm:mt-16 flex justify-center overflow-hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={QuoteDesktop} />
          <img
            src={QuoteMobile}
            alt="Bitcoin Conference India 2026 Quote"
            className="w-full max-w-3xl lg:max-w-7xl object-contain"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default Speakers;
