import React from "react";

// FAQ data
const faqs = [
  {
    question: "What’s the typical turnaround time for a project?",
    answer:
      " Turnaround times vary depending on the project’s complexity. We’ll provide a clear timeline during the planning phase to ensure transparency and timely delivery",
  },
  {
    question: "Are there any hidden fees or additional charges?",
    answer:
      "No, our pricing is transparent, and we don’t have any hidden fees. If additional charges apply for extra services, we’ll inform you upfront",
  },
  {
    question: "How can I ensure the deliverables align with my expectations?",
    answer:
      "Before starting a project, we work closely with you to understand your goals and requirements. Regular updates, feedback sessions, and a dedicated point of contact ensure that the final deliverables meet or exceed your expectations. Additionally, we offer revisions within the scope of your plan to fine-tune the output.",
  },
  {
    question: "How do I determine which plan is right for my project?",
    answer:
      "If you're unsure about which plan suits your needs, feel free to contact us for a free consultation. We'll help you choose a plan based on your project size, goals, and budget.",
  },
];

const FaqsSection = () => {
  return (
    <section>
      <div className="max-w-6xl px-3 sm:px-4 md:px-6 lg:px-20 py-20 mx-auto">
        <h2 className="mb-10 text-2xl xs:text-3xl md:text-4xl font-extrabold text-center text-secondary">
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
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary">
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
                <p className="hidden mt-4 text-sm sm:text-base text-gray-600 group-hover:block">
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
