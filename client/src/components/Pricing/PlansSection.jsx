import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "@/lib/sanityClient";

const PlansSection = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Fetch plans grouped by category
        const categoriesData = await sanityClient.fetch(`
          *[_type == "plan"] | order(category->title desc, price asc) {
            "category": category->title,
            planName,
            price,
            "features": features,
          }
        `);

        // Group fetched data by category
        const categorizedPlans = categoriesData.reduce((acc, plan) => {
          const categoryIndex = acc.findIndex((c) => c.title === plan.category);
          if (categoryIndex !== -1) {
            acc[categoryIndex].plans.push({
              name: plan.planName,
              price: `$${plan.price.toFixed(2)}`,
              features: plan.features,
            });
          } else {
            acc.push({
              title: plan.category,
              plans: [
                {
                  name: plan.planName,
                  price: `$${plan.price.toFixed(2)}`,
                  features: plan.features,
                },
              ],
            });
          }
          return acc;
        }, []);

        setCategories(categorizedPlans);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <section>
      {categories.map((category, index) => (
        <div
          key={index}
          className="max-w-6xl px-3 sm:px-4 md:px-6 lg:px-3 py-6 mx-auto"
        >
          <h2 className="mb-8 text-xl xs:text-2xl md:text-3xl font-extrabold text-secondary">
            {category.title}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-3">
            {category.plans.map((plan, idx) => (
              <div
                key={idx}
                className="relative p-4 md:p-6 overflow-hidden transition duration-300 transform rounded-lg shadow-md bg-gradient-to-br from-primary via-primary to-secondary/80 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Decorative corner ribbon */}
                <div className="absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white rounded-bl-lg bg-secondary">
                  {plan.name}
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-3xl md:text-4xl font-extrabold text-white">
                    {plan.price}
                  </p>
                  <ul className="flex-1 mt-6 space-y-3 text-white">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex space-x-2">
                        <span className="text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-6 md:h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 13l4 4L19 7"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-xs md:text-sm font-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full px-4 py-2 md:px-5 md:py-3 mt-6 text-base md:text-lg font-medium transition-all bg-white rounded-lg text-primary hover:bg-secondary hover:text-white"
                    onClick={() => navigate("/contact")}
                  >
                    Get Started
                  </button>
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 rounded-lg opacity-50 bg-gradient-to-b from-transparent to-secondary"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlansSection;
