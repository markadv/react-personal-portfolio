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
          <svg
            className="ml-8 h-8 fill-blue-800 transition ease-in-out hover:scale-110 hover:fill-blue-600 hover:stroke-primary"
            version="1.0"
            viewBox="0 0 192 192"
          >
            <path d="M93.7 1.7C91.5 3.9 1.8 186 1.7 188.5l-.2 3h19l17.5-35c42.5-85.1 67.1-135.4 67.3-137.4C105.5 15.9 97.9 1 96 1c-.9 0-2 .3-2.3.7zM67 107c-22.6 45.2-40.9 82.9-40.6 83.6.4 1.1 3 1.4 10.5 1.4 9.9 0 10.1 0 11.8-2.8 10.6-17 27.1-28.9 45.3-32.7 7.1-1.5 27.3-2.1 30.5-.9.9.4 5.6 8.7 10.6 18.5L144 192h10c7.6 0 10.2-.3 10.6-1.4.3-.7-12.6-27.6-28.6-59.6-27.3-54.6-30.5-62-27.2-62 .4 0 14.5 27.7 31.5 61.5L171 192h9.5c7.2 0 9.7-.3 10.1-1.4.4-1.2-79.4-162.7-81.6-165-.5-.5-19 35.4-42 81.4zm38.1 7.2c6 12.1 7.9 16.6 7.2 17.8-.7 1.1-3.6 1.7-10.4 2.2-5.2.4-12.3 1.6-15.9 2.7-8.7 2.8-10 2.7-10-.4C76 132.9 93.7 98 95.5 98c.9 0 4.6 6.2 9.6 16.2z" />
          </svg>
          {/* <img
            src="../logo.png"
            alt="Blue A logo for Mark Advento"
            className="ml-8 h-8 transition ease-in-out hover:scale-110"
          /> */}
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
          className="delay-5 0 p-4 text-xl transition ease-in-out hover:rounded-sm hover:border-2 hover:border-primary hover:text-accent"
        >
          About
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:rounded-sm hover:border-2 hover:border-primary hover:text-accent"
          href="/#projects"
        >
          Projects
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:rounded-sm hover:border-2 hover:border-primary hover:text-accent"
          href="/#skills"
        >
          Skills
        </a>
        <a
          className="p-4 text-xl transition ease-in-out  hover:rounded-sm hover:border-2 hover:border-primary hover:text-accent"
          href="/gameoflife"
        >
          Game of Life
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
