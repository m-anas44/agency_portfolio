import React from "react";

// FAQ data
const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. On average, a website project can take 2-6 weeks.",
  },
  {
    question: "Do you offer support after the project is completed?",
    answer:
      "Yes, all our plans include a period of support after completion. Premium plans come with extended support.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade at any time, and we’ll ensure a smooth transition.",
  },
  {
    question: "What platforms do you support for E-commerce?",
    answer:
      "We specialize in Shopify, WooCommerce, and custom-built platforms tailored to your needs.",
  },
];

const FaqsSection = () => {
  return (
    <section>
      <div className="max-w-6xl px-3 sm:px-4 md:px-6 lg:px-20 py-20 mx-auto">
        <h2 className="mb-10 text-3xl font-extrabold text-center text-secondary">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
            >
              <div className="p-6 cursor-pointer group">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-secondary">
                    {faq.question}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 transition-transform duration-300 transform text-secondary group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                <p className="hidden mt-4 text-gray-600 group-hover:block">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
