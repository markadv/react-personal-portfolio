import React from "react";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "sticky top-16 z-20 grid grid-rows-4 items-center bg-secondary text-center"
          : "hidden"
      }
      onClick={toggle}
    >
      <a
        href="/"
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
      >
        About
      </a>
      <a
        href="/#projects"
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
      >
        Projects
      </a>
      <a
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        href="/#skills"
      >
        Skills
      </a>
      <a
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        href="/gameoflife"
      >
        Game Of Life
      </a>
    </div>
  );
};

export default Dropdown;
