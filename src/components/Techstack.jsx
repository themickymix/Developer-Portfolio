import React, { useState } from "react";
import FadeInOnScroll from "./FadeInOnScroll ";
import { tech,tools } from "../constant";

function Techstack() {
  const [activeSection, setActiveSection] = useState("all");

  

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <FadeInOnScroll>
      <div className="h-96">
        <h1 className="font-thin">STACK & TOOLS</h1>
        <div className="flex justify-center gap-8 m-3 px-10 text-stone-500 rounded-full">
          <button
            onClick={() => handleNavClick("all")}
            className={`hover:text-purple-700 transition-all duration-1000 ${
              activeSection === "all" ? "text-purple-700" : ""
            }`}>
            All
          </button>
          <button
            onClick={() => handleNavClick("technology")}
            className={`hover:text-purple-700 transition-all duration-1000 ${
              activeSection === "technology" ? "text-purple-700" : ""
            }`}>
            Technology
          </button>
          <button
            onClick={() => handleNavClick("tools")}
            className={`hover:text-purple-700 transition-all duration-1000 ${
              activeSection === "tools" ? "text-purple-700" : ""
            }`}>
            Tools
          </button>
        </div>

        <div>
          {activeSection === "all" && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-content-center">
              {tech.concat(tools).map((item, index) => (
                <div key={index}>
                  <span className="flex place-content-center gap-2 border border-purple-800 cursor-pointer backdrop-blur-md py-1 px-2 rounded-lg">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <p className="text-sm font-semibold">{item.name}</p>
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeSection === "technology" && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-content-center">
              {tech.map((item, index) => (
                <div key={index}>
                  <span className="flex place-content-center gap-2 border border-purple-800 pointer-events-none cursor-pointer backdrop-blur-md py-1 px-2 rounded-md">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <p className="text-sm font-semibold">{item.name}</p>
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeSection === "tools" && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 place-content-center">
              {tools.map((item, index) => (
                <div key={index}>
                  <span className="flex place-content-center gap-2 border border-purple-800 pointer-events-none backdrop-blur-md py-1 px-2 rounded-md">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <p className="text-sm font-semibold">{item.name}</p>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export default Techstack;
