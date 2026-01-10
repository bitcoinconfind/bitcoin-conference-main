import React from "react";
import Button from "./Button";
import FadeIn from "./ui/FadeIn";

const Hero = () => {
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

        <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 lg:px-24 overflow-hidden pt-18 md:pt-22 pb-12">





            <div className="z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12">



                {/* Image Section (Left) */}
                <FadeIn direction="up" delay={100} className="relative w-[60%] sm:w-[50%] lg:w-[45%] lg:max-w-[660px] lg:opacity-80 pointer-events-none perspective-1000 p-0 m-0">
                    <img
                        src="/assets/imgs/logo/wib.svg"
                        alt="Bitcoin Forum India"
                        className="w-full animate-float-fast transition-transform duration-100 ease-out opacity-80 lg:opacity-100"
                    />
                </FadeIn>

                {/* Content Section (Right) */}
                <div className="flex flex-col items-center lg:items-start w-full lg:w-[60%] lg:pl-12">
                    <FadeIn direction="up" delay={400} duration={800} className="w-full">
                        <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed text-center lg:text-left">
                            India's premier Bitcoin gathering is coming to Hyderabad. <br />
                            Join <span className="text-white font-bold">50,000+</span> attendees, <span className="text-white font-bold">150+</span> speakers, and industry leaders for a historic event.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={600} duration={800} className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                        <Button
                            label="Get Free Tickets"
                            variant="primary"
                            className="px-8 py-4 text-lg font-bold shadow-lg shadow-btc-gold/20"
                            onClick={handleWinFreeTickets}
                        />
                        <a href="/#sponsors-cta">
                            <Button
                                label="Become a Sponsor"
                                variant="secondary"
                                className="px-8 py-4 text-lg font-bold"
                            />
                        </a>
                    </FadeIn>
                </div>
            </div>



        </section>
    );
};

export default Hero;
