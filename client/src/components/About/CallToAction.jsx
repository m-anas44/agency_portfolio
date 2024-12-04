import { Button } from "@/components/SharedComponents/index";
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
        <Button
          className="mt-4 text-md transition-all duration-200 rounded-full drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
          onClick={() => {}}
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
