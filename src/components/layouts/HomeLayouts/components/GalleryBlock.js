import React from "react";
import { GalleryCarousel } from "../../../widget/ui/WidgetCarousel";

const GalleryBlock = () => {
  return (
    <div className="md:max-w-5xl mx-auto ">
      <div className="text-center my-20 md:mt-28 md:mb-12">
        <h3 className="text-3xl font-semibold ">
          Check out <span className="text-blue-600">gallery</span>.
        </h3>
        <div className="mx-auto max-w-xl mt-4">
          <p style={{ color: "#869ab8" }}>
            Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
            eiusmod tempor, incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <div className=" mb-4 p-4 md:p-0">
        <GalleryCarousel />
      </div>
    </div>
  );
};

export default GalleryBlock;
