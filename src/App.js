import Navbar from "./components/Navbar.js";
import Dropdown from "./components/Dropdown";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import GameOfLife from "./pages/gol";
import Footer from "./components/Footer.js";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    //main initial style text-gray-400 bg-gray-900 body-font
    <main className="font-mono">
      {/* <GameOfLife /> */}
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameoflife" element={<GameOfLife />} />
      </Routes>
      <Footer />
    </main>
  );
}
