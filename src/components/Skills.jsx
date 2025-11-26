import React from "react";
import data from "../data/data.json";

const Skills = ({ skillsData }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex w-full flex-col md:flex-row items-center md:items-start gap-6 mb-4">
              <img
                src={skill.icon_url}
                alt={skill.name}
                className="w-12 h-12 flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {skill.name}
                  </h3>
                  <span className="bg-blue-300 px-3 py-1 rounded-full text-sm flex-shrink-0">
                    Main
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  {skill.years_of_experience}
                </p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2 font-medium">
              <span>{skill.level}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
