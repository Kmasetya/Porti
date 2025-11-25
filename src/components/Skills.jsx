import React from "react";
import data from "../data/data.json";

const Skills = ({ skillsData }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KARTU SKILL 1 */}
        <div className="bg-gray-100/40 px-4 py-5 rounded-3xl p-8 shadow-sm mb-6 border border-gray-100 gap-2">
          <div className="flex items-center justify-between mb-2">
            {/* PASTIKAN WADAH INI MENGISI LEBAR PENUH DARI KARTU */}
            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-6">
              {/* 1. ICON (Mengambil ruang sesuai isinya) */}
              <img
                src={data.skills[0].icon_url}
                alt={data.skills[0].name}
                style={{ width: "50px", height: "50px" }}
              />
              {/* 2. TEKS (Mengambil SISA ruang penuh) */}
              <div className="flex-1 text-center md:text-left">
                {/* 3. BARIS JUDUL (Memaksa H3 dan SPAN ke ujung) */}
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {data.skills[0].name}
                  </h3>
                  <span className="bg-blue-300 px-3 py-1 rounded-full backdrop-blur-sm flex-none">
                    Main
                  </span>
                </div>
                <h1 className="font-normal text-gray-500 text-lg">
                  {data.skills[0].years_of_experience} years experience
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left mb-3">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-500">{data.skills[0].level}</h1>
              <h1 className="text-gray-500">100%</h1>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "100%" }} // Ganti dengan data.skills[0].percentage_value
            ></div>
          </div>
        </div>
        {/* KARTU SKILL 2 */}
        <div className="bg-gray-100/40 px-4 py-5 rounded-3xl p-8 shadow-sm mb-6 border border-gray-100 gap-2">
          <div className="flex items-center justify-between mb-2">
            {/* PASTIKAN WADAH INI MENGISI LEBAR PENUH DARI KARTU */}
            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-6">
              {/* 1. ICON (Mengambil ruang sesuai isinya) */}
              <img
                src={data.skills[1].icon_url}
                alt={data.skills[1].name}
                style={{ width: "50px", height: "50px" }}
              />
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
          <div className="flex-1 text-center md:text-left mb-3">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-500">{data.skills[1].level}</h1>
              <h1 className="text-gray-500">60%</h1>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "60%" }} // Ganti dengan data.skills[0].percentage_value
            ></div>
          </div>
        </div>
        {/* KARTU SKILL 3 */}
        <div className="bg-gray-100/40 px-4 py-5 rounded-3xl p-8 shadow-sm mb-6 border border-gray-100 gap-2">
          <div className="flex items-center justify-between mb-2">
            {/* PASTIKAN WADAH INI MENGISI LEBAR PENUH DARI KARTU */}
            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-6">
              {/* 1. ICON (Mengambil ruang sesuai isinya) */}
              <img
                src={data.skills[2].icon_url}
                alt={data.skills[2].name}
                style={{ width: "50px", height: "50px" }}
              />
              {/* 2. TEKS (Mengambil SISA ruang penuh) */}
              <div className="flex-1 text-center md:text-left">
                {/* 3. BARIS JUDUL (Memaksa H3 dan SPAN ke ujung) */}
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {data.skills[2].name}
                  </h3>
                  <span className="bg-blue-300 px-3 py-1 rounded-full backdrop-blur-sm flex-none">
                    Main
                  </span>
                </div>
                <h1 className="font-normal text-gray-500 text-lg">
                  {data.skills[2].years_of_experience} years experience
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left mb-3">
            <div className="flex justify-between items-center">
              <h1 className="text-gray-500">{data.skills[2].level}</h1>
              <h1 className="text-gray-500">80%</h1>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "80%" }} // Ganti dengan data.skills[0].percentage_value
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
