import React from "react";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-3 container">
      <div className="md:flex md:justify-between    py-10">
        <div style={{ flex: 0.4 }} className="mb-5 md:mb-0 ">
          <p className="text-blue-800 font-bold text-base mb-0">
            Blue Whale <span className="text-blue-600"> Martime</span>
          </p>
          <p style={{ color: "#869ab8" }}>A better way to ship.</p>
          <div className="flex items-center justify-start">
            <IoLogoLinkedin style={{ color: "#869ab8" }} />
            <IoLogoFacebook style={{ color: "#869ab8" }} className="mx-2" />
            <IoLogoInstagram style={{ color: "#869ab8" }} className="mx-2" />
            <IoLogoTwitter style={{ color: "#869ab8" }} className="mx-2" />
            <IoLogoYoutube style={{ color: "#869ab8" }} className="mx-2" />
          </div>
        </div>
        <div className="md:flex-1 flex   md:flex flex-wrap justify-between">
          <div className="items-center justify-center flex">
            <ul>
              <li style={{ color: "#506690" }} className="text-sm pb-1">
                PRODUCTS
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="items-center justify-center flex">
            <ul>
              <li style={{ color: "#506690" }} className="text-xs pb-1">
                SERVICES
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="items-center justify-center flex">
            <ul>
              <li style={{ color: "#506690" }} className="text-xs pb-1">
                COMPANY
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
            </ul>
          </div>
          <div className="items-center justify-center flex">
            <ul>
              <li style={{ color: "#506690" }} className="text-xs pb-1">
                LEGAL
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem
              </li>
              <li style={{ color: "#869ab8" }} className="text-sm py-2">
                Lorem Ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div>
          <p className="text-xs" style={{ color: "#869ab8" }}>
            @ 2020 Bluewhale Maritime Pvt. Ltd.
          </p>
        </div>
        <div>
          <ul className="flex ">
            <li className="text-xs" style={{ color: "#869ab8" }}>
              Privacy
            </li>
            <li className="text-xs mx-4" style={{ color: "#869ab8" }}>
              Cookie Policy
            </li>
            <li className="text-xs" style={{ color: "#869ab8" }}>
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
