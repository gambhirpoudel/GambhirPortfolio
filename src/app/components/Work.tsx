import React from "react";
import IconExternal from "./icons/external.jsx";
import IconFolder from "./icons/folder.jsx";
import IconGitHub from "./icons/github.jsx";
import { projects } from "../constants";

function Work() {
  return (
    <section
      className="w-[50%] sm:w-[80%]  lg:w-[70%] ml-4 sm:ml-10 lg:ml-20 py-10 sm:py-20"
      id="works"
    >
      <div className="flex items-center space-x-4 mb-10">
        <span className="text-green font-sfMono sm:text-lg text-xs">03.</span>
        <h2 className="font-calibre font-semibold sm:text-heading text-xxl text-lightest-slate whitespace-nowrap">
          Some Things I’ve Built
        </h2>
        <div className="w-[350px] h-px bg-lightest-navy"></div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] project-inner overflow-hidden shadow-lg mb-8 sm:mr-4 lg:mr-8 hover:-translate-y-2 transition-transform duration-300"
            style={{ height: "300px" }}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start">
                  <div className="sm:w-[50px] w-[40px] text-green">
                    <IconFolder />
                  </div>
                  <div className="ml-40 flex items-center space-x-2 ">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green w-5"
                      >
                        <IconGitHub />
                      </a>
                    )}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green w-5"
                      >
                        <IconExternal />
                      </a>
                    )}
                  </div>
                </div>
                <div className="pt-5 font-calibre text-xxl text-lightest-slate mt-2">
                  <p className="font-bold project-title hover:text-green">
                    {project.title}
                  </p>
                </div>
                <div
                  className="text-slate text-[17px] font-calibre overflow-hidden"
                  style={{ maxHeight: "6em", lineHeight: "1.3em" }}
                >
                  <p
                    className="overflow-hidden overflow-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="py-1 flex gap-2 items-center font-sfMono">
                {project.tools.map((tool, index) => (
                  <p key={index} className="text-xs text-slate">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
