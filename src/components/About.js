import React from "react";
import { useDarkMode } from "./useDarkMode";
import Typewriter from "typewriter-effect";

export default function About() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <section id="about" className="h-screen bg-primary">
      <div className="h-full w-screen container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="h-28">
            <h1 className="sm:text-5xl text-3xl font-light text-primary">
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
          <p className="text-xl mb-8 leading-relaxed text-accent">
            I'm a career-shifter who has recently started my journey as a programmer.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-accent bg-secondary border-0 py-2 px-6 focus:outline-none transition ease-in-out delay-50 
              hover:bg-light- hover:scale-105 rounded text-lg hover:text-black"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none transition ease-in-out delay-50 
              hover:bg-gray-900 hover:scale-105 rounded text-lg hover:text-gray-200"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-0">
          <div className="relative">
            <img
              className="cursor-pointer top-0 left-0 object-cover object-center rounded z-10"
              alt="hero"
              src="./sephiroth_parta.png"
              onClick={(e) => setIsDark(!isDark)}
            />
            {isDark && (
              <img
                className="cursor-pointer absolute top-0 left-0 object-cover object-center rounded z-10"
                alt="hero"
                src="./sephiroth_partb.png"
                onClick={(e) => setIsDark(!isDark)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
