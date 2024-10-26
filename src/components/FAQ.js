import React, { useState } from 'react';

const faqData = [
  {
    question: "What is MedLedger?",
    answer: "MedLedger is a secure, blockchain-based platform for tracking and verifying medical competencies, ensuring that medical professionals can showcase their verified skills and accomplishments.",
  },
  {
    question: "How does MedLedger ensure data security?",
    answer: "MedLedger uses blockchain technology to create a tamper-proof record of verified competencies, making data secure and transparent for both users and institutions.",
  },
  {
    question: "Who can use MedLedger?",
    answer: "MedLedger is designed for medical professionals, residents, and medical institutions looking to streamline competency tracking, onboarding, and hiring processes.",
  },
  {
    question: "Is MedLedger easy to use?",
    answer: "Yes! MedLedger provides a user-friendly interface for managing verified competencies, making it accessible for professionals and administrators alike.",
  },
  {
    question: "Can MedLedger be integrated with other systems?",
    answer: "MedLedger offers robust APIs for seamless integration with existing medical and HR systems, facilitating data exchange and streamlining workflows.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-900 sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 text-center text-lg text-yellow-600">
          Find answers to common questions about MedLedger.
        </p>
        <div className="mt-8 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-gray-500">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
