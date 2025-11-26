import React from "react";
import data from "../data/data.json";

const Experiences = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6"> Experiences</h2>
        {/* 2. TEKS (Mengambil SISA ruang penuh) */}
        <div className="flex-1 text-center md:text-left">
          {/* 3. BARIS JUDUL (Memaksa H3 dan SPAN ke ujung) */}
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              {data.skills[1].name}
            </h3>
            <span className="bg-blue-300 px-3 py-1 rounded-full backdrop-blur-sm flex-none">
              Main
            </span>
          </div>
          <h1 className="font-normal text-gray-500 text-lg">
            {data.skills[1].years_of_experience} years experience
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
