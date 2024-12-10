import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";

// Reusable Button Component
const Button = ({ text, onClick, icon }) => (
  <button
    className="block px-6 py-3 font-medium text-white transition-all duration-300 rounded-full shadow md:inline bg-primary hover:bg-secondary hover:scale-105"
    onClick={onClick}
    aria-label={text} // Added aria-label for accessibility
  >
    {text}
    {icon && <span className="inline-block ml-1">{icon}</span>}
  </button>
);

// Reusable List Item Component
const ListItem = ({ description }) => (
  <li className="flex items-start">
    <div className="flex items-center justify-center text-white bg-teal-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>

    <p className="ml-3 text-xl text-secondary/90">{description}</p>
  </li>
);

// Reusable Stats Component
const Stat = ({ value, label }) => (
  <div className="sm:text-left text-center">
    <p className="text-xl font-medium">{label}</p>
    <h2 className="text-3xl font-bold text-secondary">{value}</h2>
  </div>
);

const PricingSection = () => {
  const [plan, setPlan] = useState(null);
  const navigate = useNavigate();
  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="inline-block w-5 h-5 -mt-1"
    >
      <path
        fillRule="evenodd"
        d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-4.22-4.22a.75.75 0 1 1 1.06-1.06l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06-1.06l4.22-4.22H5.25a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Fetch plans grouped by category
        const planData = await sanityClient.fetch(`
          *[_type == "plan"] | order(category)[0] {
            category,
            planName,
            description,
            price,
            "features": features,
          }
        `);
        setPlan(planData);
        console.log("plan", plan);
      } catch (error) {
        console.error("Failed to fetch plans");
      }
    };
    fetchPlans();
  }, [setPlan]);

  return (
    <section className="px-6 py-16 bg-gradient-to-t from-teal-300 via-teal-50 to-white lg:px-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left Section */}
        <article>
          <h1 className="text-2xl font-bold leading-tight sm:text-4xl text-secondary/90">
            Empowering businesses with{" "}
            <span className="leading-tight text-primary">
              modern technology
            </span>{" "}
            to create solutions that deliver{" "}
            <span className="leading-tight text-primary">
              results you can rely on.
            </span>
          </h1>
          <p className="mt-6 text-xl text-secondary">
            We&rsquo;re a dynamic team driven by passion and innovation, ready
            to help your business thrive with tailor-made solutions designed for
            growth and success.
          </p>
          <div className="mt-6">
            <Button
              text="Discover Our Services"
              onClick={() => navigate("/services")}
            />
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-8 sm:gap-x-12 text-secondary justify-center md:justify-start lg:justify-start md:px-10 lg:px-0">
            <Stat value="Commitment" label="100%" />
            <Stat value="Innovative" label="Approach" />
            <Stat value="Client-First" label="Focus" />
          </div>
        </article>

        {/* Right Section */}
        <article className="p-4 bg-white rounded-lg shadow-xl sm:p-8">
          <div className="flex flex-col items-start justify-between xs:flex-row">
            <div className="flex gap-2 items-start flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary/90">
                {plan?.planName}
              </h3>
              <h2 className="flex items-end justify-between text-4xl sm:text-5xl font-bold text-secondary/90">
                ${plan?.price}
              </h2>
              <span className="bg-secondary text-white py-1 px-2 text-xs sm:text-sm rounded">
                {plan?.category}
              </span>
            </div>
            <div className="mt-4 md:mt-0">
              <Button
                text="Let&rsquo;s Talk"
                icon={arrowIcon}
                onClick={() => navigate("/contact")}
              />
            </div>
          </div>
          <p className="mt-6 text-lg text-secondary/90">{plan?.description}</p>

          <ul className="mt-6 space-y-4">
            {plan?.features.map((feature) => {
              return <ListItem description={feature} />;
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default PricingSection;
