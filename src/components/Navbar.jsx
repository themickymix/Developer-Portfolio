import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#main");

  useEffect(() => {
    // Check for scroll position to change the border color
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("#main, #project, #technology");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Adjust visibility threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="top-0 p-1 sticky z-10 w-full place-items-center animate-fade-down animate-once animate-duration-[2000ms]">
      <div
        className={`flex justify-center p-1 gap-8 m-3 px-10 border-2 font-bold text-gray-400 rounded-full ${
          isScrolled
            ? "border-purple-600 bg-purple-600  transition-all duration-500 backdrop-blur "
            : "border-[#2B3440] transition-all duration-500"
        }`}>
        <a
          href="#main"
          className={`hover:text-purple-700 transition-all duration-1000 ${
            activeSection === "#main" ? "text-white " : ""
          }`}>
          Home
        </a>
        <a
          href="#project"
          className={`hover:text-purple-700 transition-all duration-1000 ${
            activeSection === "#project" ? "text-white " : ""
          }`}>
          Project
        </a>
        <a
          href="#technology"
          className={`hover:text-purple-700 transition-all duration-1000 ${
            activeSection === "#technology" ? "text-white " : ""
          }`}>
          Stack
        </a>
      </div>
    </div>
  );
}

export default Navbar;
