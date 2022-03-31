import React from "react";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "sticky top-16 z-50 grid grid-rows-4 items-center bg-secondary text-center"
          : "hidden"
      }
      onClick={toggle}
    >
      <a
        href="/#"
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        onClick={toggle}
      >
        About
      </a>
      <a
        href="/#projects"
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        onClick={toggle}
      >
        Projects
      </a>
      <a
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        href="/#skills"
        onClick={toggle}
      >
        Skills
      </a>
      <a
        className="ransition p-4 text-xl text-primary delay-200 ease-in-out hover:scale-105 hover:bg-primary hover:text-accent"
        href="/gameoflife"
        onClick={toggle}
      >
        Game Of Life
      </a>
    </div>
  );
};

export default Dropdown;
