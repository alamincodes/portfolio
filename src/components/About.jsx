import React from "react";
import { Link } from "react-scroll";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import myImage from "../assets/img/alamin.jpg";
import CV from "../CV/AlaminResume.pdf";
const About = () => {
  return (
    <section className="min-h-screen relative lg:pt-48 pt-28" name="home">
      <div className="container mx-auto">
        <div className="flex flex-col  justify-center items-center">
          {/* image */}
          <div className="mb-10 lg:mb-0">
            <img
              src={myImage}
              className="lg:min-w-[350px] md:w-[300px] lg:h-[350px] w-[300px] h-[300px] shadow-lg border-4 shadow-primary rounded-full object-cover"
              alt=""
            />
          </div>
          {/* text */}
          <div className="text-center lg:my-4 my-1">
            <h2 className="lg:text-7xl text-2xl mb-6 font-bold bg-gradient-to-r from-[#008be7f6] via-[#bb0cf0f6] to-pink-600 bg-clip-text text-transparent">
              Alamincodes_
            </h2>
            <h2 className="lg:text-4xl text-2xl mb-6 font-bold text-indigo-300">
              <Typewriter
                words={["Front-end Developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="mb-6 max-w-[900px]">
              I Have Been Learning HTML, CSS, JavaScript, React For The Last One
              Year. I Want To Work As A Front End Developer, Then I Want To Work
              In The Future Backend.
            </p>
            {/* button */}
            <div className="flex items-center justify-center">
              <Link to="contact" smooth duration={500}>
                <button className="border-2 px-6 py-2 rounded-full border-primary mr-5 font-bold bg-gradient-to-r from-[#f7d1ff] to-[#dab4f8] bg-clip-text text-transparent">
                  Hire Me
                </button>
              </Link>
              <a
                href={CV}
                download
                className="flex border-2 px-6 py-2 font-bold justify-center items-center rounded-full"
              >
                <MdOutlineStickyNote2 size={20} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
