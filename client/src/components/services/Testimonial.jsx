import React from "react";
import { testimonials } from "../../lib/mock/reviews";

const Testimonial = () => {

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="mb-8 text-3xl font-bold text-center text-secondary">
        What They’re Saying?
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 mx-auto max-w-7xl md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mr-4 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold text-secondary">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              <span className="text-2xl font-bold text-primary">“</span>
              {testimonial.quote}
              <span className="text-2xl font-bold text-primary">”</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
