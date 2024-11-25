// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@/fontawesome/react-fontawesome";
// import {
//   faUsers,
//   faGift,
//   faChartLine,
//   faHouseUser,
// } from "@/fontawesome/free-solid-svg-icons";

const features = [
  {
    // icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-blue-500" />,
    title: "Team-Oriented Workplace Culture",
    description:
      "At PF, we cultivate a working culture that encourages teamwork and collaboration among team members to work towards achieving set goals.",
  },
  {
    // icon: <FontAwesomeIcon icon={faGift} className="w-8 h-8 text-blue-500" />,
    title: "Employees' Perks & Benefits",
    description:
      "Programmers Force takes excellent care of its employees. Therefore, we have developed various beneficial plans for our employees to motivate them and maintain their morale, including annual trips.",
  },
  {
    // icon: (
    //   <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-blue-500" />
    // ),
    title: "Opportunities for Growth",
    description:
      "We believe in empowering the youth and young thinkers! At PF, we hire individuals based on their potential and provide them with on-site training and career-growth opportunities to promote professional growth.",
  },
  {
    // icon: (
    //   <FontAwesomeIcon icon={faHouseUser} className="w-8 h-8 text-blue-500" />
    // ),
    title: "Great Work-Life Balance",
    description:
      "Here at PF, we foster a healthy work-life balance to avoid mental burnout and promote greater productivity by arranging on-site events, annual trips, and much more.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[32px] sm:text-[28px] text-center text-gray-900 mb-10 font-bold">
          Beyond the Ordinary: What Sets Us Apart
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-blue-500 rounded-lg p-6 flex items-start gap-4 shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg sm:text-base font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            className="bg-green-500 text-white py-3 px-12 sm:px-6 sm:py-2 rounded-md hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out text-lg sm:text-base"
            aria-label="Apply Now"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
