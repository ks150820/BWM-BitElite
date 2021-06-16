import React from "react";

const TableContainer = () => {
  return (
    <div className="bg-white max-w-5xl mx-auto rounded-md">
      <tr className="flex  p-3   border-gray-100">
        <th className="font-medium" style={{ flex: 0.6, display: "flex" }}>
          ROLES
        </th>
        <th className="font-medium" style={{ flex: 0.2, display: "flex" }}>
          TEAM
        </th>
        <th className="font-medium" style={{ flex: 0.2, display: "flex" }}>
          LOCATION
        </th>
      </tr>
      <div>
        <ul className="flex border-t-2 border-gray-100  p-3 ">
          <ul style={{ flex: 0.6 }}>
            <li style={{ color: "#1c162d" }} className="text-xl font-normal">
              Senior UX Designer
            </li>
            <li style={{ color: "#869ab8" }}>
              Responsible for design systems and brand management.
            </li>
          </ul>
          <li style={{ flex: 0.2, display: "flex" }}>Consumers</li>
          <li style={{ flex: 0.2, display: "flex" }}>Los Angeles</li>
        </ul>
        <ul className="flex border-t-2 border-gray-100 p-3">
          <ul style={{ flex: 0.6 }}>
            <li style={{ color: "#1c162d" }} className="text-xl font-normal">
              Motion Designer
            </li>
            <li style={{ color: "#869ab8" }}>
              Responsible for creating life in our apps.
            </li>
          </ul>
          <li style={{ flex: 0.2, display: "flex" }}>Consumers</li>
          <li style={{ flex: 0.2, display: "flex" }}>Los Angeles</li>
        </ul>
        <ul className="flex border-t-2 border-gray-100 p-3">
          <ul style={{ flex: 0.6 }}>
            <li style={{ color: "#1c162d" }} className="text-xl font-normal">
              Design Researcher
            </li>
            <li style={{ color: "#869ab8" }}>
              Help us make the best decisions with qualitative experiments.
            </li>
          </ul>
          <li style={{ flex: 0.2, display: "flex" }}>Consumers</li>
          <li style={{ flex: 0.2, display: "flex" }}>Los Angeles</li>
        </ul>
        <ul className="flex border-t-2 border-gray-100 p-3">
          <ul style={{ flex: 0.6 }}>
            <li style={{ color: "#1c162d" }} className="text-xl font-normal">
              Production Designer
            </li>
            <li style={{ color: "#869ab8" }}>
              Create, collect, and distribute beautiful assets.
            </li>
          </ul>
          <li style={{ flex: 0.2, display: "flex" }}>Consumers</li>
          <li style={{ flex: 0.2, display: "flex" }}>Los Angeles</li>
        </ul>
      </div>
    </div>
  );
};

export default TableContainer;
