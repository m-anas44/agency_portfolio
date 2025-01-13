import React from "react";
import contactus from "../../assets/ServicesDetails/contactus.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
function Contact() {
  return (
    <section className="mx-auto my-5 lg:mx-0">
      <div className="relative">
        <img
          src={contactus}
          alt="Action img"
          className="object-cover w-full rounded-tl-lg rounded-tr-lg h-[22rem] "
        />
        <div className="flex flex-col items-center justify-center gap-2 p-4 text-white rounded-bl-lg rounded-br-lg bg-secondary">
          <h1 className="mt-3 text-xl font-bold lg:text-2xl">
            How Can We Help
          </h1>
          <p className="flex items-center gap-2 text-sm lg:text-base">
            <FaPhoneAlt />
            (+92) 322-5066108
          </p>
          <p className="flex items-center gap-2 text-sm lg:text-base">
            <IoMailOpen />
            trivexsolutions@gmail.com
          </p>
        </div>
        {/* Circle with icon */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-primary flex items-center justify-center">
          <TfiHeadphoneAlt className="text-2xl text-white lg:text-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
