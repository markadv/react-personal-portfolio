import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-primary lg:h-screen">
      <div className="h-16"></div>
      <div className="container lg:h-full lg:w-screen px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-5">
          {/* Replace with better icon */}
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-primary">
            Apps I've Built
          </h1>
          <p className="text-secondary lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are the projects that I have built or been a part of.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 w-full p-4">
              <div className="flex flex-col">
                <img
                  alt="gallery"
                  className="inset-0 w-full h-64 object-cover object-center"
                  src={project.image}
                />
                <h1 className="title-font text-lg font-medium text-primary">{project.title}</h1>
                <h2 className="tracking-widest text-m font-medium text-secondary mb-1">
                  Made with {project.subtitle}
                </h2>
                <p className="leading-relaxed text-accent">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
