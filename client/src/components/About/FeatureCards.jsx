import { RiTeamLine } from "react-icons/ri";
import { IoGift } from "react-icons/io5";
import { FaChartLine, FaHouseUser } from "react-icons/fa";

const features = [
  {
    icon: <RiTeamLine className="w-8 h-8 text-blue-500" />,
    title: "Team-Oriented Workplace Culture",
    description:
      "At PF, we cultivate a working culture that encourages teamwork and collaboration among team members to work towards achieving set goals.",
  },
  {
    icon: <IoGift className="w-8 h-8 text-blue-500" />,
    title: "Employees Perks & Benefits",

    description:
      "Programmers Force takes excellent care of its employees. Therefore, we have developed various beneficial plans for our employees to motivate them and maintain their morale, including annual trips.",
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-blue-500" />,

    title: "Opportunities for Growth",
    description:
      "We believe in empowering the youth and young thinkers! At PF, we hire individuals based on their potential and provide them with on-site training and career-growth opportunities to promote professional growth.",
  },
  {
    icon: <FaHouseUser className="w-8 h-8 text-blue-500" />,

    title: "Great Work-Life Balance",
    description:
      "Here at PF, we foster a healthy work-life balance to avoid mental burnout and promote greater productivity by arranging on-site events, annual trips, and much more.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-10 px-3 sm:px-4 md:px-6 lg:px-20 bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[24px] sm:text-[28px] text-center text-gray-900 mb-10 font-bold px-4">
          Beyond the Ordinary: What Sets Us Apart
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex items-start flex-col md:flex-row gap-4 p-6 transition duration-300 transform bg-white border border-blue-500 rounded-lg shadow-lg hover:shadow-xl border-secondary/50 text-secondary"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
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
