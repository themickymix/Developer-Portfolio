import React from "react";
import Hero from "../components/Hero";
import Techstack from "../components/Techstack";
import Project from "../components/Project";
function Home() {
  return (
    <div className="px-2 md:px-[10%] text-white">
      <main id="main" className="pt-20 md:pt-[20vh]">
        <Hero />
      </main>
      <section id="project" className="pt-20 md:px-[20%]">
        <Project />
      </section>
      <article id="technology" className="md:px-[20%]">
        <Techstack />
      </article>
    </div>
  );
}

export default Home;
