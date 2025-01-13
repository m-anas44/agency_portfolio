import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../lib/mock/reviews";

const TestimonialSection = () => {
  const carouselSettings = {
    dots: true, // Show dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Speed for auto-scroll
    arrows: false, // Hide arrows
  };

  return (
    <section className="mt-6">
      {/* Section Header */}
      <div className="text-center">
        <p className="text-lg sm:text-xl font-bold text-secondary">
          Testimonial
        </p>
        <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mt-1 text-primary ">
          Client <span className="text-secondary">Feedback </span>
        </h2>
      </div>
      <div className="px-3 sm:px-4 md:px-6 lg:px-20 py-10 lg:py-7 mx-auto  bg-gradient-to-r from-tertiary/90 to-tertiary/90 rounded-lg my-12">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
          {/* Left Side: Carousel Section */}
          <div className="lg:col-span-5 lg:col-start-1 border-2 border-secondary rounded-lg">
            <Slider {...carouselSettings}>
              {testimonials.map((testimonial, index) => (
                <div className="p-4 max-h-[22rem] overflow-hidden" key={index}>
                  <div>
                    <h2 className="mb-1 text-3xl font-bold text-secondary">
                      {testimonial.name}
                    </h2>
                    <p className="mb-4 text-secondary">{testimonial.title}</p>
                  </div>
                  <div className="relative z-10">
                    <p className=" italic text-gray-800 max-sm:line-clamp-3">
                      {testimonial.quote}
                    </p>
                  </div>

                  <footer className="mt-6">
                    <div className="flex items-center gap-x-4">
                      <div className="shrink-0">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="grow">
                        <div className="font-semibold text-secondary">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-primary">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              ))}
            </Slider>
          </div>

          {/* Stats Section */}
          <div className="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
            <div className="space-y-6 sm:space-y-8">
              <ul className="grid grid-cols-2 overflow-hidden divide-x-2 divide-y-2 divide-secondary">
                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary">
                    50+
                  </div>
                  <p className="text-sm sm:text-base text-secondary">
                    projects delivered for businesses worldwide
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary">
                    <svg
                      className="shrink-0 size-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                    30%
                  </div>
                  <p className="text-sm sm:text-base text-secondary">
                    improvement in business efficiency with our solutions
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end text-3xl font-bold gap-x-2 sm:text-5xl text-secondary">
                    <svg
                      className="shrink-0 size-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                    15%
                  </div>
                  <p className="text-sm sm:text-base text-secondary">
                    rise in client satisfaction across industries
                  </p>
                </li>

                <li className="flex flex-col -m-0.5 p-4 sm:p-8">
                  <div className="flex items-end mb-2 text-3xl font-bold gap-x-2 sm:text-5xl text-secondary">
                    2x
                  </div>
                  <p className="text-sm sm:text-base text-secondary">
                    faster delivery than industry standards
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
