import React from "react";
import { HiMenu } from "react-icons/hi";

const NavigationBar = () => {
  return (
    <nav className="flex px-6  py-3 md:px-12 items-center bg-white justify-between sticky top-0 z-50">
      <div>
        <p className="text-blue-800 font-bold text-base mb-0">
          Blue Whale <span className="text-blue-600"> Martime</span>
        </p>
      </div>
      <div className="md:block hidden">
        <ul className="flex justify-center items-center mb-0">
          <li
            className="p-0.5 px-3 text-base font-normal mb-0"
            style={{ color: "#506690" }}
          >
            Home
          </li>
          <li
            className="p-0.5 px-3 text-base font-normal mb-0"
            style={{ color: "#506690" }}
          >
            Services
          </li>
          <li
            className="p-0.5 px-3 text-base font-normal mb-0"
            style={{ color: "#506690" }}
          >
            Features
          </li>
          <li
            className="p-0.5 px-3 text-base font-normal mb-0"
            style={{ color: "#506690" }}
          >
            About
          </li>
          <li
            className="p-0.5 px-3 text-base font-normal mb-0"
            style={{ color: "#506690" }}
          >
            Blogs
          </li>
        </ul>
      </div>
      <div className="md:block hidden">
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center mb-0">
            <li className="p-0.5 px-6 mb-0" style={{ color: "#3962e2" }}>
              Careers
            </li>
            <li className="p-2 px-4 font-semibold bg-blue-600 text-white rounded-md mb-0">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:block md:hidden">
        <HiMenu />
      </div>
    </nav>
  );
};

export default NavigationBar;
