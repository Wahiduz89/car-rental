import React, { useState, useRef } from 'react';

const FAQSection = ({ faqs = [], title = "Frequently Asked Questions", containerClassName = "" }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // Default FAQs if none provided
  const defaultFAQs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, credit card in your name, and government-issued ID. International renters may require additional documentation."
    },
    {
      question: "What is the minimum age requirement?",
      answer: "The minimum age is 21 years for standard vehicles and 25 years for premium/luxury vehicles. Young driver fees apply for under 25."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Yes, you can modify or cancel up to 24 hours before pickup without charges. Late cancellations may incur fees."
    }
  ];

  const questions = faqs.length > 0 ? faqs : defaultFAQs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        {title}
      </h2>

      <div className="space-y-3">
        {questions.map((faq, index) => (
          <div 
            key={index}
            className="border rounded-lg bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <span className={`ml-4 h-6 w-6 flex-shrink-0 transform transition-transform 
                               ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div
              id={`faq-content-${index}`}
              ref={el => contentRefs.current[index] = el}
              className={`overflow-hidden transition-all duration-300 ease-in-out
                         ${activeIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessibility announcement */}
      <div className="sr-only" aria-live="polite">
        {activeIndex !== null ? `Expanded question: ${questions[activeIndex].question}` : 'FAQ section'}
      </div>
    </section>
  );
};

export default FAQSection;