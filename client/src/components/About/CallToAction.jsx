import { Button } from "@/components/SharedComponents/index";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100" aria-labelledby="cta-heading">
      <div className="max-w-4xl rounded-none sm:rounded-xl p-8 mx-auto text-center bg-gray-200">
        {/* Heading */}
        <h2
          id="cta-heading"
          className="text-[24px] sm:text-[36px] md:text-4xl font-semibold text-gray-800 mb-6 leading-tight"
        >
          Have Questions or Ready to Start Your Project?
        </h2>

        {/* Contact Button */}
        <Button
          className="mt-4 transition-all duration-200 rounded-full text-md drop-shadow-lg md:text-xl md:mt-0 hover:bg-secondary hover:text-white"
          onClick={() => {
            window.location.href = "/contact";
          }} // Redirects to contact page
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
