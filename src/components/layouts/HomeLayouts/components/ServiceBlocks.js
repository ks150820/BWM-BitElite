import React from "react";
import { ServiceCards } from "../../../widget/ui/Cards";
import { FaArrowRight } from "react-icons/fa";

const ServiceBlocks = () => {
  return (
    <div className="md:container  mx-auto py-10">
      <div className="md:grid md:grid-cols-3 gap-4 md:container sm:container px-6 mt-16  mx-auto md:max-w-screen my-12">
        <ServiceCards
          no="1"
          intro="Lorem ipsum dolor sit amet, consectetur.
adipiscing elit, sed do eiusmod tempor,
incididunt ut labore et dolore."
        />
        <ServiceCards
          no="2"
          intro="Lorem ipsum dolor sit amet, consectetur.
adipiscing elit, sed do eiusmod tempor,
incididunt ut labore et dolore."
        />
        <ServiceCards
          no="2"
          intro="Lorem ipsum dolor sit amet, consectetur.
adipiscing elit, sed do eiusmod tempor,
incididunt ut labore et dolore."
        />
      </div>
      <div className="mx-auto items-center justify-center flex">
        <button className="hover:bg-blue-300 flex items-center  bg-blue-100 text-base text-blue-600 font-normal py-2 px-4 rounded cursor-pointer">
          View Services <FaArrowRight className="ml-2 text-normal" />
        </button>
      </div>
    </div>
  );
};

export default ServiceBlocks;
