import React from "react";
import data from "../data/data.json";
import fosti from "../assets/fosti.webp";

const Experiences = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Experiences</h2>
      <div className="flex items-start gap-6">
        <div className="flex-none flex flex-col items-center">
          <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow-sm z-10">
            <img src={fosti} alt="" className="w-20 h-15 flex-shrink-0" />
          </div>
        </div>
        <div className="flex-1 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-900 text-lg">
              Fosti (UI/UX Designer)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
