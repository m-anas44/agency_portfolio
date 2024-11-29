import React from 'react';
import { useNavigate } from 'react-router-dom';
// Pricing plans
const pricingPlans = [
  {
    title: 'Web Development',
    plans: [
      {
        name: 'Basic',
        price: '$29.99',
        features: ['Custom Design', '1 Revision', 'Basic SEO Setup', '5 Pages'],
      },
      {
        name: 'Standard',
        price: '$49.99',
        features: ['Custom Design', '3 Revisions', 'Advanced SEO', '10 Pages'],
      },
      {
        name: 'Premium',
        price: '$79.99',
        features: ['Custom Design', 'Unlimited Revisions', 'Full SEO Optimization', 'Unlimited Pages'],
      },
    ],
  },
  {
    title: 'E-commerce Development',
    plans: [
      {
        name: 'Starter',
        price: '$39.99',
        features: ['3 Products', 'Payment Integration', 'Basic Support', 'Basic Analytics'],
      },
      {
        name: 'Growth',
        price: '$59.99',
        features: ['10 Products', 'Advanced Payment Integration', 'Priority Support', 'Sales Reporting'],
      },
      {
        name: 'Enterprise',
        price: '$99.99',
        features: ['Unlimited Products', 'Custom Integrations', '24/7 Support', 'Full Analytics Suite'],
      },
    ],
  },
  {
    title: 'Shopify Store Design',
    plans: [
      {
        name: 'Starter',
        price: '$49.99',
        features: ['Custom Theme Setup', '3 Products', 'Basic Customization', 'Email Support'],
      },
      {
        name: 'Pro',
        price: '$69.99',
        features: ['Theme Customization', '10 Products', 'Advanced Customization', 'Priority Support'],
      },
      {
        name: 'Ultimate',
        price: '$119.99',
        features: ['Full Custom Design', 'Unlimited Products', 'Custom Apps Integration', '24/7 Support'],
      },
    ],
  },
];

const PlansSection = () => {
  const navigate = useNavigate();
  return (
    <section>
      {pricingPlans.map((category, index) => (
        <div key={index} className='max-w-6xl px-4 py-6 mx-auto sm:px-6 lg:px-8'>
          <h2 className='mb-8 text-3xl font-extrabold text-secondary'>{category.title}</h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {category.plans.map((plan, idx) => (
              <div
                key={idx}
                className='relative p-8 overflow-hidden transition duration-300 transform rounded-lg shadow-md bg-gradient-to-br from-primary via-primary to-secondary/80 hover:shadow-xl hover:-translate-y-2'
              >
                {/* Decorative corner ribbon */}
                <div className='absolute top-0 right-0 px-3 py-1 text-sm font-bold text-white rounded-bl-lg bg-secondary'>
                  {plan.name}
                </div>

                {/* Card Content */}
                <div className='relative z-10'>
                  <h3 className='text-xl font-semibold text-white'>{plan.name}</h3>
                  <p className='mt-4 text-4xl font-extrabold text-white'>{plan.price}</p>
                  <ul className='mt-6 space-y-4 text-white'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center space-x-3'>
                        <span className='text-white'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                          >
                            <path fillRule='evenodd' d='M5 13l4 4L19 7' clipRule='evenodd' />
                          </svg>
                        </span>
                        <span className='text-lg'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className='w-full px-5 py-3 mt-6 text-lg font-medium transition-all bg-white rounded-lg text-primary hover:bg-secondary hover:text-white'
                    onClick={() => navigate('/contact')}
                  >
                    Get Started
                  </button>
                </div>

                {/* Background Decoration */}
                <div className='absolute inset-0 rounded-lg opacity-50 bg-gradient-to-b from-transparent to-secondary'></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PlansSection;
