import React from "react";
import { useDarkMode } from "./useDarkMode";
import Typewriter from "typewriter-effect";
import SamuraiSVG from "./SamuraiSVG";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function About() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <section id="about" className="bg-primary lg:h-screen">
      <div className="container mx-auto flex h-full w-screen flex-col items-center px-10 sm:py-20 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <div className="h-28">
            <h1 className="2xl:5xl text-3xl font-light text-primary sm:text-3xl xl:text-4xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(50)
                    .changeDeleteSpeed(50)
                    .typeString("Hi, I am <strong>Mark Timothy Advento</strong>.")
                    .pauseFor(1000)
                    .deleteChars(17)
                    .typeString(".<br>")
                    .pauseFor(500)
                    .typeString("a self-taught programmer.")
                    .changeDeleteSpeed(27)
                    .deleteChars(25)
                    .typeString("a gamer.")
                    .changeDeleteSpeed(100)
                    .deleteChars(8)
                    .typeString("a weightlifting enthusiast.")
                    .changeDeleteSpeed(25)
                    .deleteChars(27)
                    .typeString("a dad.")
                    .changeDeleteSpeed(100)
                    .deleteChars(6)
                    .typeString("an engineer.")
                    .changeDeleteSpeed(75)
                    .deleteChars(12)
                    .typeString("a self-taught programmer.")
                    .callFunction(function (state) {
                      state.elements.cursor.style.display = "none";
                    })
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className="mb-8 text-xl leading-relaxed text-accent">
            I'm a career-shifter who has recently started my journey as a programmer.
          </p>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <a
                href="#projects"
                className="delay-50 inline-flex rounded border-0 bg-secondary py-2 px-6 text-lg text-accent transition 
              ease-in-out hover:scale-105 hover:bg-accent hover:text-primary focus:outline-none"
              >
                See My Past Work
              </a>
              <a
                href="#skills"
                className="delay-50 ml-4 inline-flex rounded border-0 bg-secondary py-2 px-6 text-lg text-accent 
              transition ease-in-out hover:scale-105 hover:bg-accent hover:text-primary focus:outline-none "
              >
                Skills that I know
              </a>
            </div>
            <div className="m-2 flex flex-row justify-center gap-4 p-4 ">
              <a href="https://github.com/markadv/">
                <IoLogoGithub className="h-16 w-16 fill-primary hover:scale-105 hover:fill-blue-700" />
              </a>
              <a href="https://www.linkedin.com/in/markadvento/">
                <IoLogoLinkedin className="h-16 w-16 fill-primary hover:scale-105 hover:fill-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="z-0 w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <div className="relative">
            <SamuraiSVG
              className="top-0 left-0 z-10 cursor-pointer rounded fill-primary object-cover object-center"
              isDark={isDark}
              setIsDark={setIsDark}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
