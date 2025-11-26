import React from "react";
import data from "../data/data.json";
import fosti from "../assets/fosti.webp";

const Experiences = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Experiences</h2>
      <div className="flex items-start gap-6">
        <div className="flex-none flex flex-col items-center">
          <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
            <img src={fosti} alt="" className="w-20 h-15 flex-shrink-0" />
          </div>
        </div>
        <div className="flex-1 border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-900 text-lg">
              {data.experiences[0].title}
            </h3>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Projek
            </span>
          </div>
          <p className="text-gray-600 mb-3">
            {data.experiences[0].organization}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-gray-500 text-sm">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {data.experiences[0].start_date} - {data.experiences[0].end_date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
