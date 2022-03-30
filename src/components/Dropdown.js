import React from "react";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? "bg-secondary sticky top-16 grid grid-rows-4 text-center items-center" : "hidden"
      }
      onClick={toggle}
    >
      <a
        href="/"
        className="text-xl p-4 ransition ease-in-out delay-200 text-primary hover:text-accent hover:scale-105 hover:bg-primary"
      >
        About
      </a>
      <a
        href="/#projects"
        className="text-xl p-4 ransition ease-in-out delay-200 text-primary hover:text-accent hover:scale-105 hover:bg-primary"
      >
        Projects
      </a>
      <a
        className="text-xl p-4 ransition ease-in-out delay-200 text-primary hover:text-accent hover:scale-105 hover:bg-primary"
        href="/#skills"
      >
        Skills
      </a>
      <a
        className="text-xl p-4 ransition ease-in-out delay-200 text-primary hover:text-accent hover:scale-105 hover:bg-primary"
        href="/gameoflife"
      >
        Game Of Life
      </a>
    </div>
  );
};

export default Dropdown;
