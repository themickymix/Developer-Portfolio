import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <footer className="h-10 w-[100%] flex items-center justify-center bg-purple-900">
        Created by: Michael Yalon
      </footer>
    </div>
  );
}

export default App;
