import React from "react";
import myImage from "../assets/img/alamin.jpg";
const About = () => {
  return (
    <section className="container mx-auto my-[100px]">
      <div>
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
          {/* text */}
          <div className="lg:text-left text-center">
            <h2 className="text-7xl font-bold bg-gradient-to-r from-purple-600 via-[#776ef5] to-pink-600 bg-clip-text text-transparent">Alamin_</h2>
            <p className="max-w-[600px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim
              nobis error rem molestias quasi velit dolor deserunt iste omnis.
            </p>
            <div className="flex items-center justify-center lg:justify-start my-10">
              <button className="btn mr-5 font-semibold">Hire Me</button>
              <h2 className="border-b-2 border-transparent hover:border-white">
                Download CV
              </h2>
            </div>
          </div>
          {/* image */}
          <div className="mb-10 lg:mb-0">
            <img
              src={myImage}
              className=" lg:w-[400px] md:w-[300px] lg:h-[400px] w-[300px] h-[300px] shadow-lg border-4 border-4 shadow-primary rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
