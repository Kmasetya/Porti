import React from "react";
import data from "../data/data.json";

const Experiences = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6"> Experiences</h2>
      <div className="flex items-start mb-6">
        <div className="w-15 h-15 flex-shrink-0 mr-4">
          <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center border border-gray-100">
            <img
              src={data.skills[0].icon_url}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
