import React from "react";
import { BlogCards } from "../../../widget/ui/Cards";
import { FaArrowRight } from "react-icons/fa";

const LatestStoriesBlock = () => {
  return (
    <div className=" mx-auto">
      <div className="text-center my-20 md:mt-28 md:mb-12">
        <h3 className="text-3xl font-semibold ">
          <span className="text-blue-600"> Latest stories </span>what we've
          been.
        </h3>
        <div className="mx-auto max-w-xl mt-4">
          <p style={{ color: "#869ab8" }}>
            Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
            eiusmod tempor, incididunt ut labore et dolore.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${"Images/background-oval.png"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="items-center justify-center md:flex  ">
          <BlogCards />
          <BlogCards />
          <BlogCards />
        </div>
        <div className="mx-auto items-center justify-center flex py-7">
          <button className="hover:bg-blue-300 flex items-center  bg-blue-100 text-base text-blue-600 font-normal py-2 px-4 rounded cursor-pointer">
            View Blogs <FaArrowRight className="ml-2 text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestStoriesBlock;
