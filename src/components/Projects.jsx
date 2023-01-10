import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import { projects } from "../data";
const Projects = () => {
  return (
    <section className="my-[100px]" name="projects">
      <div className="container mx-auto">
        <h2 className="lg:text-7xl text-5xl my-10 font-bold bg-gradient-to-l from-[#36bdf8] via-[#17e7678a] to-[#188fff] bg-clip-text text-transparent">
          Projects_
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              {/* items */}
              <div className="relative rounded-full">
                <img
                  src={project.img}
                  className="rounded-lg border-gray-700 border-2"
                  alt=""
                />
                <div className="absolute w-full bottom-0 bg-white/20 backdrop-blur-xl p-6">
                  <h4 className="font-semibold text-center lg:text-left text-xl mb-2 capitalize text-[#36bdf8]">
                    {project.name}
                  </h4>
                  {/* button */}
                  <div className="flex lg:justify-start justify-center items-center">
                    {/* live */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center hover:bg-[#36bdf8] hover:text-white font-bold px-5 items-center uppercase lg:text-md text-[15px] py-1 mt-2 border-2 border-[#36bdf8] text-[#36bdf8] rounded-full"
                    >
                      <HiExternalLink size={19} className="mr-2" /> Live
                    </a>
                    {/* repo */}
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center hover:bg-[#36bdf8] hover:text-white px-5 mx-2 items-center uppercase lg:text-md text-[15px] py-1 font-bold mt-2 border-2 border-[#36bdf8] text-[#36bdf8] rounded-full"
                    >
                      <AiOutlineGithub className="mr-2" size={18} />
                      repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
