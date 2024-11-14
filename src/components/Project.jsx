import React from "react";
import FadeLeftOnScroll from "./FadeLeftOnScroll";
import {projects} from '../constant.js'
import eye from '../assets/svg/eye.svg'
import github from '../assets/svg/github.svg'
function Project() {
  
  return (
    <FadeLeftOnScroll>
      <h1>PROJECTS</h1>

      <div className="mt-5 w-fit">
        <div className="grid gap-2">
          {projects.map((proj) => (
            <span
              key={proj.id}
              className="glowing transition grid-cols-1 justify-center place-items-center self-center md:flex gap-6 border-purple-500 border rounded-lg p-2 shadow-purple-500">
              <img
                className=" md:w-64 md:h-40 rounded-lg duration-1000 ease-in-out hover:scale-110 "
                src={proj.img}
                alt={proj.name}
              />
              <div className="w-[100%]">
                <span className="font-bold text-md text-slate-200 mb-0">
                  {proj.name}
                </span>
                <p className="text-stone-400">{proj.des}</p>
                <span className="grid grid-cols-5 gap-1 mt-2">
                  {Array.isArray(proj.tech)
                    ? proj.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-thin flex place-content-center text-white border border-purple-500 p-1 rounded-md">
                          {tech}
                        </span>
                      ))
                    : null}
                </span>
                <span className="w-full grid grid-cols-2 place-items-center cursor-pointer mt-8">
                  <a
                    className="flex gap-2 items-center font-bold text-purple-700 hover:text-purple-800"
                    href={proj.view}>
                    <img
                      className="w-8"
                      style={{ filter: "brightness(0) invert(1)" }}
                      src={eye}
                      alt=""
                    />
                    VIEW
                  </a>
                  <a
                    className="flex gap-2 items-center font-bold text-purple-700 hover:text-purple-800"
                    href={proj.code}>
                    <img
                      className="w-5"
                      style={{ filter: "brightness(0) invert(1)" }}
                      src={github}
                      alt=""
                    />{" "}
                    CODE
                  </a>
                </span>
              </div>
            </span>
          ))}
        </div>
      </div>
    </FadeLeftOnScroll>
  );
}

export default Project;
