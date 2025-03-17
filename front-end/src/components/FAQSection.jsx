// src/components/FAQSection.jsx
import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is the minimum age to rent a car?',
      answer: 'The minimum age to rent a car is 21 years old, with some exceptions for certain vehicle types.'
    },
    {
      question: 'Do I need insurance?',
      answer: 'Yes, insurance is required when renting a car. You can either provide your own insurance or purchase coverage through us.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 24 hours before the rental start date for a full refund.'
    },
    {
      question: 'Are there any mileage restrictions?',
      answer: 'Most rentals come with a daily mileage limit. Please check your rental agreement for specific details.'
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-sm">
            <button 
              onClick={() => toggleFAQ(index)} 
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg 
                className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
