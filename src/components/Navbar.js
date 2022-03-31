import React from "react";
import Menu from "./Menu";
import { useSpring } from "react-spring";

const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175,
};

const Navbar = ({ isOpen, toggle }) => {
  const [styles, api] = useSpring(() => ({
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -10px) rotate(0deg)",
    widthTop: "24px",
    widthBottom: "20px",
    config: {
      mass: animationConfig.mass,
      friction: animationConfig.frictionHeavy,
      tension: animationConfig.tension,
    },
  }));
  return (
    <header
      className="sticky top-0 flex justify-between items-center h-16 bg-secondary text-primary shadow-sm z-50"
      role="navigation"
    >
      <div className="flex flex-row">
        <a href="/#about">
          <img
            src="../logo.png"
            alt="Blue A logo for Mark Advento"
            className="h-8 ml-8 transition ease-in-out hover:scale-110"
          />
        </a>
        <a
          href="/#about"
          className="text-2xl ml-4 transition ease-in-out hover:scale-110 hover:text-accent"
        >
          mark.advento
        </a>
      </div>
      <div className="p-4 cursor-pointer md:hidden" onClick={toggle}>
        <Menu
          open={isOpen}
          toggle={toggle}
          styles={styles}
          api={api}
          animationConfig={animationConfig}
        />
        {/* {!isOpen ? (
          <svg
            className="w-6 h-6 transition ease-in-out delay-150"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )} */}
      </div>
      <nav className="pr-8 md:block hidden">
        {/* p-4 transition ease-in-out hover:scale-110 hover:text-blue-800 */}
        <a
          href="/#about"
          className="text-xl p-4 transition ease-in-out delay-5 0 hover:border-2 hover:border-primary hover:text-accent"
        >
          About
        </a>
        <a
          className="text-xl p-4 transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/#projects"
        >
          Projects
        </a>
        <a
          className="text-xl p-4 transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/#skills"
        >
          Skills
        </a>
        <a
          className="text-xl p-4 transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/gameoflife"
        >
          Game of Life
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
