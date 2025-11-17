import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When and where is Bitcoin Conference India 2026?",
      answer: "Bitcoin Conference India 2026 will be held in March 2026 in Hyderabad, India. Exact dates will be announced soon."
    },
    {
      question: "What ticket tiers are available?",
      answer: "We offer three ticket tiers: General Admission ($99), VIP Pass ($599), and Satoshi Pass ($2999). Each tier offers different levels of access and exclusive benefits including networking opportunities, VIP lounges, and private sessions with speakers."
    },
    {
      question: "What can I expect at the conference?",
      answer: "Experience India's largest Bitcoin Expo & Experience Zone, attend main stage sessions and panels, participate in interactive workshops, network with Bitcoin builders and investors, and gain insights from global Bitcoin leaders. The conference also features dedicated networking zones, VIP mixers, and various social events."
    },
    {
      question: "How can I become a sponsor or speaker?",
      answer: "We welcome both sponsorship and speaker applications! For sponsors, we offer various packages to help your brand reach thousands of Bitcoin enthusiasts. Speakers can apply if they are Bitcoin experts, builders, or thought leaders. Please visit our Contact page to discuss partnership opportunities or submit your application."
    },
    {
      question: "Are there volunteer opportunities and what is the refund policy?",
      answer: "Yes! We have a dedicated Student Volunteer program - visit our Volunteer page to learn more. Regarding refunds, policies will be detailed when ticket sales begin. Generally, refunds are available up to a certain date before the event, with full terms provided at purchase."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="max-w-4xl mx-auto px-4 py-16">
      <FadeIn direction="up" duration={800}>
        <div className="text-center mb-12">
          <h2 className="metric-value mb-2 gradient-text">Frequently Asked Questions</h2>
          <p className="metric-label text-[1.125rem]">Everything you need to know about Bitcoin Conference India 2026</p>
        </div>
      </FadeIn>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn key={index} direction="up" delay={index * 100} duration={600}>
            <div
              className="bg-[#1F1F1F] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#f7931a] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-semibold text-white group-hover:text-[#f7931a] transition-colors duration-300">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#f7931a] transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Contact CTA */}
      <FadeIn direction="up" delay={800} duration={600}>
        <div className="mt-12 text-center">
          <p className="metric-label text-[1.125rem] mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#f7931a] text-black font-semibold rounded-lg hover:bg-[#F69415] transition-all duration-300 hover:scale-105 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </FadeIn>
    </div>
  );
};

export default FAQSection;
