import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-primary lg:h-screen">
      <div className="h-16"></div>
      <div className="container mx-auto px-5 py-10 text-center lg:h-full lg:w-screen lg:px-40">
        <div className="mb-5 flex w-full flex-col">
          {/* Replace with better icon */}
          <CodeIcon className="mx-auto mb-4 inline-block w-10 hover:fill-accent" />
          <h1 className="title-font mb-4 text-3xl font-medium text-primary sm:text-4xl">
            Apps I've Built
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-secondary lg:w-2/3">
            Here are the projects that I have built or been a part of.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="w-full p-4 sm:w-1/2">
              <div className="flex flex-col">
                <img
                  alt="gallery"
                  className="inset-0 h-64 w-full rounded-md object-cover object-center"
                  src={project.image}
                />
                <h1 className="title-font text-xl font-medium text-primary transition ease-in-out hover:scale-105">
                  {project.title}
                </h1>
                <h2 className="mb-1 text-lg font-medium tracking-widest text-secondary transition ease-in-out hover:scale-105">
                  Made with {project.subtitle}
                </h2>
                <p className="text-m leading-relaxed text-accent transition ease-in-out hover:scale-105">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
