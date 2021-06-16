import React from "react";

const LocationAndContactBlock = () => {
  return (
    <div>
      <div className="items-center justify-center py-10">
        <div className="text-center my-20 md:mt-28 md:mb-12">
          <h3 className="text-3xl font-semibold ">
            we are <span className="text-blue-600">located</span> at.
          </h3>
          <div className="mx-auto max-w-xl mt-4">
            <p style={{ color: "#869ab8" }}>
              Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
              eiusmod tempor, incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="relative py-6">
          <div className="h-96 ">
            <img src="Images/map.jpg" className="w-full h-full object-cover" />
          </div>
          <div
            className="bg-white p-3 rounded-md shadow-md"
            style={{
              left: "20%",
              right: "20%",
              top: "32.5%",
              position: "absolute",
            }}
          >
            <div className="grid grid-cols-3  md:p-6 divide-x divide-gray-200 text-center container ">
              <div className="md:p-4">
                <p className="text-sm font-semibold">Toronto</p>
                <p style={{ color: "#869ab8" }} className=" text-base">
                  Suite 360-144 Front Street West, Toronto, Ontario, M5J 2L7
                </p>
              </div>
              <div className="md:p-4">
                <p className="text-sm font-semibold">Netherlands</p>
                <p style={{ color: "#869ab8" }} className=" text-base">
                  Suite 360-144 Front Street West, Toronto, Ontario, M5J 2L7
                </p>
              </div>
              <div className=" md:p-4">
                <p className="text-sm font-semibold">San Francisco</p>
                <p style={{ color: "#869ab8" }} className=" text-base">
                  Suite 360-144 Front Street West, Toronto, Ontario, M5J 2L7
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#1B2A4E",
              borderBottomRightRadius: "50% 10%",
              borderBottomLeftRadius: "50% 10% ",
            }}
            className="py-16 "
          >
            <div className="text-center mx-auto mt-44 md:mt-36 mb-8">
              <h3 className="text-3xl font-semibold text-white">Contact Us!</h3>
              <div className="mx-auto max-w-xl my-8">
                <p style={{ color: "#869ab8" }}>
                  Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed
                  do eiusmod tempor, incididunt ut labore et dolore.
                </p>
              </div>
              <div className="grid grid-cols-3  divide-x divide-blue-300 mt-16">
                <div>
                  <p style={{ color: "#869ab8" }} className="text-xs mb-0">
                    MESSAGE US
                  </p>
                  <p className="text-white text-sm ms:text-base">
                    Start a chat!
                  </p>
                </div>
                <div>
                  <p style={{ color: "#869ab8" }} className="text-xs mb-0">
                    CALL ANYTIME
                  </p>
                  <p className="text-white text-sm md:text-base">
                    (555) 123-4567
                  </p>
                </div>
                <div>
                  <p style={{ color: "#869ab8" }} className="text-xs mb-0">
                    EMAIL US
                  </p>
                  <p className="text-white text-sm md:text-base">
                    Support@bluewhale.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndContactBlock;
