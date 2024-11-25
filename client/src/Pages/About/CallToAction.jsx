const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto bg-gray-200   p-8 text-center">
        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-[24px] sm:text-[36px] md:text-4xl font-semibold text-gray-800 mb-6 leading-tight"
        >
          Want to be a part of
          <br />
          Pakistan’s First AI Company?
        </h2>

        {/* Apply Button */}
        <button
          className="bg-blue-600 text-white px-8 py-3 text-lg rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          aria-label="Apply now to join Pakistan's First AI Company"
        >
          APPLY NOW
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
