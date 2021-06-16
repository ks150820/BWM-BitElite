import React from "react";
import { ShippingCards } from "../../../widget/ui/Cards";

const ShippingExperienceBlock = () => {
  return (
    // <div className="md:container mx-auto">
    <div className="md:max-w-7xl mx-auto">
      <div className="text-center my-20 md:my-28 ">
        <h3 className="md:text-3xl font-semibold ">
          We have lots of{" "}
          <span className="text-blue-600">shipping experience</span>.
        </h3>
        <div className="mx-auto max-w-xl mt-4">
          <p style={{ color: "#869ab8" }}>
            Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
            eiusmod tempor, incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col max-w-5xl mx-auto lg:gap-4 md:gap-0 p-3 md:p-0 md:container">
        <ShippingCards />
        <ShippingCards />
        <ShippingCards />
        <ShippingCards />
      </div>
    </div>
  );
};

export default ShippingExperienceBlock;
