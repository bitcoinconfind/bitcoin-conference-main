import React from "react";
import Button from "./Button";

const SponsorsSection = () => {
  return (
    <section id="why-sponsor" className="py-16 px-4 sm:px-8 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="metric-value mb-2">Why Sponsor?</h2>
          <p className="metric-label">Partner with the World’s Largest Bitcoin Conference</p>
        </div>

        {/* Value Props Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#151515] p-6 text-center">
            <div className="metric-value mb-2">Unmatched Exposure</div>
            <p className="metric-label">Headline stage slots, high‑visibility branding at key touchpoints, and always‑on digital presence before, during, and after the event.</p>
          </div>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#151515] p-6 text-center">
            <div className="metric-value mb-2">High‑Intent Audience</div>
            <p className="metric-label">Decision‑makers across exchanges, infra, wallets, dev tools, VC, media and enterprise—pre‑qualified and ready for real conversations.</p>
          </div>
          <div className="rounded-xl border border-[#2a2a2a] bg-[#151515] p-6 text-center">
            <div className="metric-value mb-2">Measurable Results</div>
            <p className="metric-label">Qualified lead capture, pre‑scheduled buyer meetings, product demo sessions, and post‑event follow‑ups that translate conversations into opportunities.</p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="text-center rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] p-6">
            <div className="text-[#FFBF00] text-4xl font-extrabold leading-none">50,000+</div>
            <div className="metric-label mt-2">On‑site Attendees</div>
          </div>
          <div className="text-center rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] p-6">
            <div className="text-[#FFBF00] text-4xl font-extrabold leading-none">150+</div>
            <div className="metric-label mt-2">Global Speakers & Leaders</div>
          </div>
          <div className="text-center rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] p-6">
            <div className="text-[#FFBF00] text-4xl font-extrabold leading-none">200+</div>
            <div className="metric-label mt-2">Partners & Exhibitors</div>
          </div>
        </div>

        {/* Narrative Block */}
        <div className="rounded-2xl border border-[#2a2a2a] bg-gradient-to-b from-[#141414] to-[#0d0d0d] p-6 sm:p-8 mb-10">
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

        {/* CTA */}
        <div id="sponsors-cta" className="text-center scroll-mt-24">
          <a href="/apply/sponsor">
            <div className="inline-block">
              <Button label="Apply to be a Sponsor" withStarBorder={true} starSpeed="5s" className="px-8 py-3 text-base" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
