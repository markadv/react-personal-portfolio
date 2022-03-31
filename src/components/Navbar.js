import React from "react";
import { Toggle } from "./toggle";
import { useSpring } from "react-spring";
import Menu from "./Menu";

const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175,
};

const Navbar = ({ toggle, isOpen }) => {
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
      className="sticky top-0 z-50 flex h-16 items-center justify-between bg-secondary text-primary shadow-sm"
      role="navigation"
    >
      <div className="flex flex-row">
        <a href="/#about">
          <img
            src="../logo.png"
            alt="Blue A logo for Mark Advento"
            className="ml-8 h-8 transition ease-in-out hover:scale-110"
          />
        </a>
        <a
          href="/#about"
          className="ml-4 text-2xl transition ease-in-out hover:scale-110 hover:text-accent"
        >
          mark.advento
        </a>
        <Toggle />
      </div>
      <div className="cursor-pointer p-4 md:hidden" onClick={toggle}>
        <Menu
          isOpen={isOpen}
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
      <nav className="hidden pr-8 md:block">
        {/* p-4 transition ease-in-out hover:scale-110 hover:text-blue-800 */}
        <a
          href="/#about"
          className="delay-5 0 p-4 text-xl transition ease-in-out hover:border-2 hover:border-primary hover:text-accent"
        >
          About
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/#projects"
        >
          Projects
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/#skills"
        >
          Skills
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:border-2 hover:border-primary hover:text-accent"
          href="/gameoflife"
        >
          Game of Life
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
