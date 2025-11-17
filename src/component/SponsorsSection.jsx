import React from "react";
import Button from "./Button";
import FadeIn from "./ui/FadeIn";
import { useCountUpOnScroll } from '../hooks/useCountUp';

const SponsorsSection = () => {
  // Count-up animations for metric boxes - trigger on scroll
  const { ref: onSiteRef, count: onSiteCount } = useCountUpOnScroll("50000+", { duration: 2000, delay: 0 });
  const { ref: speakersRef, count: speakersCount } = useCountUpOnScroll("150+", { duration: 2000, delay: 100 });
  const { ref: partnersRef, count: partnersCount } = useCountUpOnScroll("200+", { duration: 2000, delay: 200 });

  return (
    <div id="why-sponsor" className="max-w-6xl mx-auto">
      {/* Headline */}
        <FadeIn direction="up" duration={800}>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="metric-value leading-tight gradient-text">Why Sponsor?</h2>
            <p className="metric-label max-w-3xl mx-auto mt-3">Partner with the World's Largest Bitcoin Conference</p>
          </div>
        </FadeIn>

        {/* Value Props Strip */}
        <FadeIn direction="up" delay={200} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-xl border-2 border-[#585858] bg-black p-6 text-center sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora font-semibold text-lg sm:text-xl mb-2 tracking-tight">Unmatched Exposure</div>
              <p className="metric-label">Headline stage slots, high‑visibility branding at key touchpoints, and always‑on digital presence before, during, and after the event.</p>
            </div>
            <div className="rounded-xl border-2 border-[#585858] bg-black p-6 text-center sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora font-semibold text-lg sm:text-xl mb-2 tracking-tight">High‑Intent Audience</div>
              <p className="metric-label">Decision‑makers across exchanges, infra, wallets, dev tools, VC, media and enterprise, pre‑qualified and ready for real conversations.</p>
            </div>
            <div className="rounded-xl border-2 border-[#585858] bg-black p-6 text-center sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora font-semibold text-lg sm:text-xl mb-2 tracking-tight">Measurable Results</div>
              <p className="metric-label">Qualified lead capture, pre‑scheduled buyer meetings, product demo sessions, and post‑event follow‑ups that translate conversations into opportunities.</p>
            </div>
          </div>
        </FadeIn>

        {/* Impact Metrics */}
        <FadeIn direction="up" delay={400} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div ref={onSiteRef} className="text-center rounded-xl border-2 border-[#585858] bg-black p-6 sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora text-2xl sm:text-3xl font-bold leading-none tracking-tight">{onSiteCount}</div>
              <div className="metric-label mt-2">On‑site Attendees</div>
            </div>
            <div ref={speakersRef} className="text-center rounded-xl border-2 border-[#585858] bg-black p-6 sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora text-2xl sm:text-3xl font-bold leading-none tracking-tight">{speakersCount}</div>
              <div className="metric-label mt-2">Global Speakers & Leaders</div>
            </div>
            <div ref={partnersRef} className="text-center rounded-xl border-2 border-[#585858] bg-black p-6 sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
              <div className="text-[#f7931a] font-sora text-2xl sm:text-3xl font-bold leading-none tracking-tight">{partnersCount}</div>
              <div className="metric-label mt-2">Partners & Exhibitors</div>
            </div>
          </div>
        </FadeIn>

        {/* Narrative Block */}
        <FadeIn direction="up" delay={600} duration={800}>
          <div className="rounded-2xl border-2 border-[#585858] bg-black p-6 sm:p-8 mb-10 sponsor-card-hover cursor-pointer hover:border-[#f7931a] transition-all duration-500 ticket-card-gradient hover:shadow-[0_20px_50px_rgba(247,147,26,0.3)]">
            <p className="metric-label mb-4">
              Showcase your brand at the epicenter of Bitcoin in Asia. Beyond floor space, we design outcome‑driven
              activations that accelerate brand awareness, partnerships, and revenue.
            </p>
            <ul className="list-disc list-inside metric-label space-y-2">
              <li>Keynotes, launches, and press moments amplified across official and partner channels</li>
              <li>Conversion‑focused booth placement and attendee flow mapping</li>
              <li>Curated investor and enterprise introductions with tracked follow‑ups</li>
              <li>Content capture: reels, interviews, and snackable clips for your campaigns</li>
            </ul>
          </div>
        </FadeIn>

        {/* CTA */}
        <div id="sponsors-cta" className="text-center scroll-mt-24">
          <a href="/apply/sponsor">
            <div className="inline-block">
              <Button label="Become a Sponsor" variant="primary" withStarBorder={true} starSpeed="5s" className="px-8 py-3 text-base !bg-[#f7931a] text-black" />
            </div>
          </a>
        </div>
    </div>
  );
};

export default SponsorsSection;
