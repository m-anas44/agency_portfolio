import { Button } from "@/components/SharedComponents/index";
// import {
//   faUsers,
//   faGift,
//   faChartLine,
//   faHouseUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    // icon:  <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-blue-500" />
    title: "Opportunities for Growth",
    description:
      "We believe in empowering the youth and young thinkers! At PF, we hire individuals based on their potential and provide them with on-site training and career-growth opportunities to promote professional growth.",
  },
  {
    // icon:  <FontAwesomeIcon icon={faHouseUser} className="w-8 h-8 text-blue-500" />
    title: "Great Work-Life Balance",
    description:
      "Here at PF, we foster a healthy work-life balance to avoid mental burnout and promote greater productivity by arranging on-site events, annual trips, and much more.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-[32px] sm:text-[28px] text-center text-gray-900 mb-10 font-bold">
          Beyond the Ordinary: What Sets Us Apart
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 transition duration-300 transform bg-white border border-blue-500 rounded-lg shadow-lg hover:shadow-xl border-secondary/50 group text-secondary group-hover:border-primary hover:scale-105"
            >
              <div className="absolute inset-0 transition-all duration-500 ease-in-out bg-primary/80 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-100%]"></div>

              <div className="flex-shrink-0 ">{feature.icon}</div>
              <div>
                <h3 className="text-[20px] sm:text-base font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[16px] text-black">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        
      </div>
    </section>
  );
};

export default FeatureCards;
