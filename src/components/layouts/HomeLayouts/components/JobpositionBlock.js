import React from "react";
import TableContainer from "../../../widget/ui/TableContainer";
import { FaArrowRight } from "react-icons/fa";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-dropdown-select";
// import Dropdown from "react-dropdown-aria";

const options = ["one", "two", "three"];
const optiontwo = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

const JobpositionBlock = () => {
  const defaultOption = options[0];
  return (
    <div
      style={{
        backgroundColor: "#f2f4f8",
        borderBottomRightRadius: "60% 5%",
        borderBottomLeftRadius: "60% 5% ",
      }}
    >
      <div className="relative">
        <div className="items-center justify-center py-10">
          <div className="text-center my-20 md:mt-28 md:mb-12">
            <h3 className="text-3xl font-semibold ">
              Let's find you an{" "}
              <span className="text-blue-600">open position</span>.
            </h3>
            <div className="mx-auto max-w-xl mt-4">
              <p style={{ color: "#869ab8" }}>
                Lorem ipsum dolor sit amet, consectetur. adipiscing elit, sed do
                eiusmod tempor, incididunt ut labore et dolore.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1 p-2 md:p-0">
            <div className="flex-auto max-w-xs  ">
              <p>Roles</p>
              <div style={{ borderColor: "#fff" }}>
                {/* <Dropdown
                  options={options}
                  onChange={(e) => console.log(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                /> */}
                <Select
                  value="kapil"
                  onChange={(values) => console.log(values)}
                  placeholder="Roles"
                  style={{
                    backgroundColor: "#fff",
                    border: 0,
                    height: 40,
                    borderRadius: 6,
                  }}
                  options={optiontwo}
                  closeOnScroll="true"
                />
              </div>
            </div>
            <div className="flex-auto mx-4 max-w-xs ">
              <p>Team</p>
              {/* <Dropdown
                options={options}
                onChange={(e) => console.log(e)}
                value={defaultOption}
                placeholder="Select an option"
              /> */}
              <Select
                options={options}
                onChange={(values) => console.log(values)}
                placeholder="Team"
                style={{
                  backgroundColor: "#fff",
                  border: 0,
                  height: 40,
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="flex-auto max-w-xs ">
              <p>Location</p>
              {/* <Dropdown
                options={options}
                onChange={(e) => console.log(e)}
                value={defaultOption}
                placeholder="Select an option"
              /> */}
              <Select
                options={options}
                onChange={(values) => console.log(values)}
                placeholder="Location"
                style={{
                  backgroundColor: "#fff",
                  border: 0,
                  height: 40,
                  borderRadius: 6,
                }}
              />
            </div>
          </div>
          <div className="mx-auto max-w-5xl p-2 md:p-0">
            <div className="mt-12 mb-5">
              <h5>Job openings</h5>
              <p style={{ color: "#869ab8" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              </p>
            </div>
          </div>
          <div>
            <TableContainer />
            <div className="mx-auto items-center justify-center flex py-7">
              <button className="hover:bg-blue-300 flex items-center  bg-blue-100 text-base text-blue-600 font-normal py-2 px-4 rounded cursor-pointer">
                View all open positions{" "}
                <FaArrowRight className="ml-2 text-normal" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobpositionBlock;
