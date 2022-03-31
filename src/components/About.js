import React from "react";
import { useDarkMode } from "./useDarkMode";
import Typewriter from "typewriter-effect";

export default function About() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <section id="about" className="h-screen bg-primary">
      <div className="container mx-auto flex h-full w-screen flex-col items-center px-10 py-20 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <div className="h-28">
            <h1 className="text-3xl font-light text-primary sm:text-5xl">
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
          <div className="flex justify-center">
            <a
              href="#contact"
              className="delay-50 inline-flex rounded border-0 bg-secondary py-2 px-6 text-lg text-accent transition 
              ease-in-out hover:scale-105 hover:bg-accent hover:text-primary focus:outline-none"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="delay-50 ml-4 inline-flex rounded border-0 bg-secondary py-2 px-6 text-lg text-accent transition 
              ease-in-out hover:scale-105 hover:bg-accent hover:text-primary focus:outline-none"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="z-0 w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <div className="relative">
            <img
              className="top-0 left-0 z-10 max-h-96 cursor-pointer rounded object-cover object-center sm:max-h-full"
              alt="hero"
              src="./sephiroth_parta.png"
              onClick={(e) => setIsDark(!isDark)}
            />
            {isDark && (
              <img
                className="absolute top-0  left-0 z-10 max-h-96 cursor-pointer rounded object-cover object-center sm:max-h-full"
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
