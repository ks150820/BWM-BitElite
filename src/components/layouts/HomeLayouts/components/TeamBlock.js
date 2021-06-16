import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TeamBlock = () => {
  return (
    <div
      className="items-center justify-center py-10 "
      style={{
        backgroundColor: "#f2f4f8",
        borderBottomRightRadius: "60% 5%",
        borderBottomLeftRadius: "60% 5% ",
      }}
    >
      {/* <div className="md:container mx-auto"> */}
      <div className="md:max-w-7xl mx-auto">
        <div className="text-center my-20 md:my-28">
          <h3 className="text-3xl font-semibold ">
            Check out all <span className="text-blue-600">our team</span>.
          </h3>
          <div className="mx-auto max-w-xl mt-4">
            <p style={{ color: "#869ab8" }}>
              Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
              eiusmod tempor, incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="md:flex p-3  items-center justify-center">
          {/* ---team-1-- */}

          <div className="md:w-80 h-96 mb-2 md:mb-0  rounded-md overflow-hidden">
            <img
              src="Images/team-1.jpg"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* ----team-2---- */}
          <div className="md:ml-3">
            <div className=" rounded-md md:w-60 md:h-52 mb-3 ">
              <img
                src="Images/team-2.jpg"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-md md:w-60 md:h-40 ">
              <img
                src="Images/team-3.jpg"
                className=" w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* ---team-3----- */}
          <div className="md:ml-3 ">
            <div className="md:flex items-center mb-3 ">
              <div className="overflow-hidden rounded-md my-1 md:w-40 md:h-36">
                <img src="Images/team-4.jpg" className="w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-md md:ml-2  md:h-36 md:w-60">
                <img
                  src="Images/team-5.jpg"
                  className="object-cover w-full h-auto "
                />
              </div>
            </div>
            {/* ---team-4---- */}
            <div
              className="rounded-md overflow-hidden mx-auto "
              style={{ height: 225, width: 405 }}
            >
              <img
                src="Images/team-6.jpg"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto items-center justify-center flex py-12">
          <button className="hover:bg-blue-300 flex items-center  bg-blue-100 text-base text-blue-600 font-normal py-2 px-4 rounded cursor-pointer">
            View our team <FaArrowRight className="ml-2 text-normal" />
          </button>
        </div>
        <div className="md:flex  gap-4 items-center justify-center mx-auto  py-10 mt-16 ">
          <div className="mt-8 ml-5" style={{ flex: 0.5 }}>
            <h3>Stay focused on your business.</h3>
            <h3 className="text-blue-600">Let us handle the shipping</h3>
            <p style={{ color: "#869ab8" }}>
              You have a business to run. Stop worring about cross-browser bugs,
              dsigning new pages, keeping your components up to date. Let us do
              that for you.
            </p>
            <div className="grid grid-cols-3 divide-x divide-gray-300 mt-10">
              <div className="text-center">
                <h4 className="text-blue-600 text-left">100%</h4>
                <p style={{ color: "#869ab8" }} className="text-left">
                  Satisfaction
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-blue-600 ">24/7</h4>
                <p style={{ color: "#869ab8" }}>Support</p>
              </div>
              <div className="text-center">
                <h4 className="text-blue-600">100k+</h4>
                <p style={{ color: "#869ab8" }}>Sales</p>
              </div>
            </div>
          </div>
          <div
            style={{ flex: 0.5 }}
            className="mt-6 md:mt-0 flex items-center  justify-center"
          >
            <div className=" md:h-80" style={{ width: 520 }}>
              <img
                src="Images/ill-placeholder.png"
                className="w-full h-auto object-cover"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBlock;
