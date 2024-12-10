import Men from "../assets/men.jpg";
import Laptop from "../assets/laptop.jpg";

const Cards = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 my-6 ">
      {/* Card 1 */}
      <div className="flex flex-1 bg-tertiary items-stretch max-h-[170px] rounded-md overflow-hidden">
        <img src={Men} alt="men" className="w-1/3 object-cover" />
        <div className="flex flex-col p-3 text-secondary justify-center">
          <h1 className="text-[20px] mb-3 text-secondary font-extrabold leading-6">
            <span className="text-primary">Best</span> Solutions
          </h1>
          <p className="text-[15px] lg:text-[16px] font-medium leading-6 lg:leading-7">
            We focus on the best practices for IT solutions and services.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-1 bg-tertiary items-stretch max-h-[170px] rounded-md overflow-hidden">
        <img src={Laptop} alt="laptop" className="w-1/3 object-cover" />
        <div className="flex flex-col p-3 text-secondary justify-center">
          <h1 className="text-[20px] mb-3 text-secondary font-extrabold leading-6">
            <span className="text-primary">Data</span> Analyses
          </h1>
          <p className="text-[15px] lg:text-[16px] font-medium leading-6 lg:leading-7">
            We focus on the best practices for IT solutions and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
