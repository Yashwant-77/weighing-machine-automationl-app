import React from "react";

function CalculateWeight() {
  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">Logo</div>
        <div
          className="right-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2 className="bg-black text-white rounded-sm p-1 px-2">
            Calculate Weight
          </h2>
          <h2 className="bg-black text-white rounded-sm p-1 px-2 mx-2">
            About us
          </h2>
          <h2 className="bg-black text-white rounded-sm p-1 px-2">
            Your Details
          </h2>
        </div>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
}

export default CalculateWeight;
