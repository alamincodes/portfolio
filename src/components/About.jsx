import React from "react";
import { Link } from "react-scroll";
import { MdOutlineStickyNote2 } from "react-icons/md";

import myImage from "../assets/img/alamin.jpg";
import CV from "../CV/AlaminResume.pdf";
const About = () => {
  return (
    <section className="min-h-[600px] relative lg:pt-48 pt-28" name="home">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse lg:space-x-[200px] space-x-0 justify-center items-center">
          {/* text */}
          <div className="lg:text-left text-center">
            <h2 className="text-7xl mb-6 font-bold bg-gradient-to-r from-purple-600 via-[#776ef5] to-pink-600 bg-clip-text text-transparent">
              Alamin_
            </h2>
            <p className="mb-6 ">
              I Have Been Learning HTML, CSS, JavaScript, React For The Last One
              Year. I Want To Work As A Front End Developer, Then I Want To Work
              In The Future Backend.
            </p>
            {/* button */}
            <div className="flex items-center lg:justify-start justify-center">
              <Link to="contact" smooth duration={500}>
                <button className="border-2 px-6 py-2 rounded-full border-primary mr-5 font-semibold">Hire Me</button>
              </Link>
              <a href={CV} download className="flex border-2 px-6 py-2 font-bold justify-center items-center rounded-full">
                Resume
                <MdOutlineStickyNote2 size={20} />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="mb-10 lg:mb-0">
            <img
              src={myImage}
              className=" lg:min-w-[350px] md:w-[300px] lg:h-[350px] w-[300px] h-[300px] shadow-lg border-4 shadow-primary rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
