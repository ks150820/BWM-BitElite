import React from "react";
import { CustomersCarousel } from "../../../widget/ui/WidgetCarousel";

const BiggestFanBlock = () => {
  return (
    <div>
      {/* <div className="md:container mx-auto"> */}
      <div className="text-center my-18 md:my-24">
        <h3 className="md:text-3xl font-semibold ">
          <span className="text-blue-600"> Our customers </span>are our biggest
          fans.
        </h3>
        <div className="mx-auto max-w-xl mt-4">
          <p style={{ color: "#869ab8" }}>
            Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
            eiusmod tempor, incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center p-5 md:p-0"
        style={{
          backgroundImage: `url(${"Images/background-oval.png"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CustomersCarousel />
      </div>
      {/* </div> */}
    </div>
  );
};

export default BiggestFanBlock;
