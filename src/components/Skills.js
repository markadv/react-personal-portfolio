import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="bg-primary lg:h-screen" id="skills">
      <div className="h-16"></div>
      <div className="container mx-auto h-full w-full px-5 py-10">
        <div className="mb-20 text-center">
          <ChipIcon className="mb-4 inline-block w-10" />
          <h1 className="title-font mb-4 text-3xl font-medium text-primary sm:text-4xl">
            Skills &amp; Technologies
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary lg:w-3/4 xl:w-2/4">
            These are the skills and tech that I have learned.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-secondary p-4">
                <BadgeCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-accent" />
                <span className="title-font text-xl font-medium text-primary">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
