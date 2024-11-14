import html from "./assets/svg/html.svg";
import css from "./assets/svg/css.svg";
import bootstrap from "./assets/svg/bootstrap.svg";
import tailwind from "./assets/svg/tailwind.svg";
import javascript from "./assets/svg/javascript.svg";
import react from "./assets/svg/reactjs.svg";
import vite from "./assets/svg/vite.svg";
import redux from "./assets/svg/redux.svg";
import vscode from "./assets/svg/vscode.svg";
import github from "./assets/svg/github.svg";
import vercel from "./assets/svg/vercel.svg";
import postman from "./assets/svg/postman.svg";
import figma from "./assets/svg/figma.svg";
import profile from "./assets/profile.png";

export const tech = [
  { name: "HTML", icon: html, color: "#f16529" },
  { name: "CSS", icon: css, color: "#264de4" },
  { name: "Bootstrap", icon: bootstrap, color: "#563d7c" },
  { name: "Tailwind", icon: tailwind, color: "#06b6d4" },
  { name: "JavaScript", icon: javascript, color: "#f7df1e" },
  { name: "React JS", icon: react, color: "#61dbfb" },
];

export const tools = [
  { name: "Vite", icon: vite, color: "#646CFF" },
  { name: "Redux", icon: redux, color: "#764ABC" },
  { name: "VSCode", icon: vscode, color: "#007acc" },
  { name: "GitHub", icon: github, color: "#181717" },
  { name: "Vercel", icon: vercel, color: "#000000" },
  { name: "Postman", icon: postman, color: "#FF6C37" },
  { name: "Figma", icon: figma, color: "#F24E1E" },
];

export const projects = [
  {
    id: 1,
    name: "MOVIE API",
    img: "/tmdbapi.png",
    des: "This project allows users to search for the latest movies and TV series using the TMDB API (The Movie Database API).",
    tech: ["React JS", "Tailwind", "TMDB API"],
    view: "https://filmapi-omega.vercel.app/",
    code: "",
  },
];
