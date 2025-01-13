import React from "react";
import mudasir from "@/assets/about/mudasir.jpg";
import anas from "@/assets/about/anas.jpg";
import zohaib from "@/assets/about/zohaib.jpg";
const Team = () => {
  return (
    <section className="py-14 px-4 md:px-6 lg:px-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[610px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mt-2">
                Our team is composed of dedicated professionals who bring
                diverse skills and a shared passion for excellence. Together, we
                work tirelessly to deliver exceptional results and innovative
                solutions that make a lasting impact.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          <TeamCard
            name="Muhammad Anas"
            profession="Web Developer"
            imageSrc={anas}
          />
          <TeamCard
            name="Zohaib Sadiq"
            profession="Web Developer"
            imageSrc={zohaib}
          />
          <TeamCard
            name="Sohail Mukhtar"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="M. Mudasir"
            profession="Frontend Developer"
            imageSrc={mudasir}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="relative overflow-hidden rounded-lg ">
      <img src={imageSrc} alt="" className="w-full object-cover h-96" />
      <div className="absolute bottom-5 left-0 w-full text-center">
        <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 ">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="text-xs">{profession}</p>
          <div>
            <span className="absolute bottom-0 left-0">
              <svg
                width={61}
                height={30}
                viewBox="0 0 61 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={16}
                  cy={45}
                  r={45}
                  fill="#13C296"
                  fillOpacity="0.11"
                />
              </svg>
            </span>
            <span className="absolute right-0 top-0">
              <svg
                width={20}
                height={25}
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="0.706257"
                  cy="24.3533"
                  r="0.646687"
                  transform="rotate(-90 0.706257 24.3533)"
                  fill="#3056D3"
                />
                <circle
                  cx="6.39669"
                  cy="24.3533"
                  r="0.646687"
                  transform="rotate(-90 6.39669 24.3533)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.0881"
                  cy="24.3533"
                  r="0.646687"
                  transform="rotate(-90 12.0881 24.3533)"
                  fill="#3056D3"
                />
                <circle
                  cx="17.7785"
                  cy="24.3533"
                  r="0.646687"
                  transform="rotate(-90 17.7785 24.3533)"
                  fill="#3056D3"
                />
                <circle
                  cx="0.706257"
                  cy="18.6624"
                  r="0.646687"
                  transform="rotate(-90 0.706257 18.6624)"
                  fill="#3056D3"
                />
                <circle
                  cx="6.39669"
                  cy="18.6624"
                  r="0.646687"
                  transform="rotate(-90 6.39669 18.6624)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.0881"
                  cy="18.6624"
                  r="0.646687"
                  transform="rotate(-90 12.0881 18.6624)"
                  fill="#3056D3"
                />
                <circle
                  cx="17.7785"
                  cy="18.6624"
                  r="0.646687"
                  transform="rotate(-90 17.7785 18.6624)"
                  fill="#3056D3"
                />
                <circle
                  cx="0.706257"
                  cy="12.9717"
                  r="0.646687"
                  transform="rotate(-90 0.706257 12.9717)"
                  fill="#3056D3"
                />
                <circle
                  cx="6.39669"
                  cy="12.9717"
                  r="0.646687"
                  transform="rotate(-90 6.39669 12.9717)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.0881"
                  cy="12.9717"
                  r="0.646687"
                  transform="rotate(-90 12.0881 12.9717)"
                  fill="#3056D3"
                />
                <circle
                  cx="17.7785"
                  cy="12.9717"
                  r="0.646687"
                  transform="rotate(-90 17.7785 12.9717)"
                  fill="#3056D3"
                />
                <circle
                  cx="0.706257"
                  cy="7.28077"
                  r="0.646687"
                  transform="rotate(-90 0.706257 7.28077)"
                  fill="#3056D3"
                />
                <circle
                  cx="6.39669"
                  cy="7.28077"
                  r="0.646687"
                  transform="rotate(-90 6.39669 7.28077)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.0881"
                  cy="7.28077"
                  r="0.646687"
                  transform="rotate(-90 12.0881 7.28077)"
                  fill="#3056D3"
                />
                <circle
                  cx="17.7785"
                  cy="7.28077"
                  r="0.646687"
                  transform="rotate(-90 17.7785 7.28077)"
                  fill="#3056D3"
                />
                <circle
                  cx="0.706257"
                  cy="1.58989"
                  r="0.646687"
                  transform="rotate(-90 0.706257 1.58989)"
                  fill="#3056D3"
                />
                <circle
                  cx="6.39669"
                  cy="1.58989"
                  r="0.646687"
                  transform="rotate(-90 6.39669 1.58989)"
                  fill="#3056D3"
                />
                <circle
                  cx="12.0881"
                  cy="1.58989"
                  r="0.646687"
                  transform="rotate(-90 12.0881 1.58989)"
                  fill="#3056D3"
                />
                <circle
                  cx="17.7785"
                  cy="1.58989"
                  r="0.646687"
                  transform="rotate(-90 17.7785 1.58989)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
