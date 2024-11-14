import React from "react";
import profile from "../assets/profile.png";
import Typewriter from "./Typewriter"; // Import the Typewriter component
import facebook from "../assets/svg/fb.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import "boxicons";
function Hero() {
  return (
    <main className="md:grid grid-cols-2 gap-10 items-center">
      <div className="flex justify-center md:justify-end ">
        <img
          className="profile w-60 rounded-full brightness-75 animate-fade-down animate-duration-[3000ms]"
          src={profile}
          alt="profile"
        />
      </div>
      <div className=" md:mt-0 mt-8 animate-fade-right">
        <span className="text-2xl font-semibold">Hello!👋🏼</span>
        <div className="text-xl text-purple-700 font-bold">
          <span className=" text-stone-400 font-thin">
            <span className="text-nowrap flex place-items-baseline gap-1">
              I'm
              <p className="text-4xl font-bold text-white">Michael Yalon</p>,
            </span>
            <Typewriter
              sentences={["Front-end Developer.", "Self-taught Developer."]}
              typingSpeed={100}
              deleteSpeed={50}
              pause={1500}
            />
            passionate learning new things and developing from nothing to
            something.
          </span>
        </div>
        <div className="flex gap-3 mt-5 ">
          <a
            href="https://www.facebook.com/michaelyalonofficial"
            itemProp="url"
            target="_blank">
            <span className="flex place-content-center gap-2 bg-[#171E27] hover:bg-[#0f1319] cursor-pointer backdrop-blur-md py-2 px-5  rounded-full animate-fade-left animate-once animate-duration-[2000ms] animate-delay-500">
              <img className="w-6 invert" src={facebook} alt="facebook" />
              Facebook
            </span>
          </a>
          <a
            href="https://github.com/themickymix"
            itemProp="url"
            target="_blank">
            <span className="flex place-content-center gap-2 bg-[#171E27] hover:bg-[#0f1319] cursor-pointer backdrop-blur-md py-2 px-5  rounded-full animate-fade-left animate-once animate-duration-[2000ms] animate-delay-[1000ms]">
              <img className="w-6 invert" src={github} alt="github" />
              Github
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/michaelyalon/"
            itemProp="url"
            target="_blank">
            <span className="flex place-content-center gap-2 bg-[#171E27] hover:bg-[#0f1319] cursor-pointer backdrop-blur-md py-2 px-5  rounded-full animate-fade-left animate-once animate-duration-[2000ms] animate-delay-[1500ms]">
              <img className="w-6 invert" src={linkedin} alt="linkedin" />
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
