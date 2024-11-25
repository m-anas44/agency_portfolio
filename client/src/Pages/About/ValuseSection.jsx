import Pic4 from "../../assets/About/pic4.png";
import Pic5 from "../../assets/About/pic5.png";
import Pic6 from "../../assets/About/pic6.png";
import Pic7 from "../../assets/About/pic7.png";

const values = [
  {
    image: Pic4,
    title: "Ship & Iterate",
    description:
      "We move fast, constantly improving with every iteration to stay ahead.",
  },
  {
    image: Pic5,
    title: "Trusted Pair of Hands",
    description: "We are reliable, steady, and there whenever needed.",
  },
  {
    image: Pic6,
    title: "Overdeliver on the Promise",
    description: "We don’t just meet expectations—we exceed them.",
  },
  {
    image: Pic7,
    title: "Clear is Kind",
    description: "Open and honest communication keeps everyone aligned.",
  },
];

// Reusable Component for Value Section
const ValueItem = ({ image, title, description }) => (
  <div className="flex flex-col sm:flex-row xs:flex-row items-center justify-between gap-10 mx-auto px-4 mb-[10px]">
    {/* Left Side: Text */}
    <div className="flex-1 text-left lg:ml-[133px] mb-6 md:mb-0">
      <h3 className="text-[38px] lg:text-[50px] leading-[42px] lg:leading-[50px] font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-[18px] lg:text-[20px] leading-[30px] lg:leading-[32px]">
        {description}
      </p>
    </div>
    {/* Right Side: Image */}
    <div className="flex-1 text-center">
      <img
        src={image}
        alt={`${title} Icon`}
        className="w-[280px] h-[180px] sm:w-[340px] sm:h-[290px] mx-auto"
      />
    </div>
  </div>
);

const ValuesSection = () => {
  // Values Data

  return (
    <section className="py-16 bg-white mb-[10px]">
      {/* Heading */}
      <div className="mx-auto px-4 text-center mb-[12px]">
        <span className="border-primary border-[3px]  text-black sm:text-[18px] leading-[27px] py-2 px-[24px]  sm:px-2-px-4 rounded-[6px] inline-block mr-[1050px] ">
          Our Values
        </span>
      </div>
      {/* Values List */}
      {values.map((value, index) => (
        <ValueItem
          key={index}
          image={value.image}
          title={value.title}
          description={value.description}
        />
      ))}
    </section>
  );
};

export default ValuesSection;
