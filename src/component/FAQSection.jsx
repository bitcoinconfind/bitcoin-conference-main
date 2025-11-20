import React, { useState } from 'react';
import FadeIn from './ui/FadeIn';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Bitcoin Conference India?",
      answer: "Bitcoin Conference India is the country's premier gathering for Bitcoin enthusiasts, builders, investors, and policymakers. It's a platform to explore Bitcoin's impact on India's economy, connect with global leaders, and experience the future of decentralized finance through engaging discussions, exhibitions, and networking opportunities."
    },
    {
      question: "When and where is Bitcoin Conference India 2026?",
      answer: "Bitcoin Conference India 2026 will be held in March 2026 in Hyderabad, India. Exact dates will be announced soon."
    },
    {
      question: "What can I expect at the conference?",
      answer: "Experience the Satoshi Lounge - a private space for founders, investors, and policymakers. Explore the Bitcoin Bazaar where startups and miners showcase real products. Visit the Bitcoin Art District featuring installations and live art. Connect at Network Square with curated meetups and partnerships. Shop limited edition Merch & Collectibles. And attend the Main Stage where global Bitcoin leaders discuss and debate what's next for Bitcoin."
    },
    {
      question: "Are there volunteer opportunities?",
      answer: "Yes! We have a dedicated Student Volunteer program - visit our Volunteer page to learn more and apply for exciting opportunities to be part of India's largest Bitcoin conference."
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
    </div>
  );
};

export default FAQSection;
