import React from "react";
import { data } from "../data";

const Skills = () => {
  return (
    <section className="my-11" name='Skill'>
      <div className="container mx-auto divide-y">
        <div className="text-right">
          <h2 className="lg:text-7xl text-5xl mb-6 font-bold bg-gradient-to-r from-purple-600 via-[#b3420e] to-yellow-600 bg-clip-text text-transparent">
            Skills_
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
            {data.map((dat) => (
              <div
                key={dat.id}
                className="flex group bg-slate-800/[0.7] border border-transparent hover:border-primary rounded-md p-4  flex-col justify-center items-center"
              >
                <img
                  src={dat.icon}
                  className="w-12 group-hover:scale-110 duration-300"
                  alt=""
                />
                <h2 className="uppercase lg:text-md text-[12px] py-1 font-semibold mt-2 border border-[#36bdf8] text-[#36bdf8] px-4 rounded-full">
                  {dat.name}
                </h2>
                <h2 className="uppercase lg:text-md text-[10px] py-1 font-semibold mt-2 border border-[#36bdf8] text-[#36bdf8] px-4 rounded-full">
                  {dat.experience}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
