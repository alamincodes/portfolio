import React from "react";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
const ContactForm = () => {
  return (
    <section className="my-[100px]" name="contact">
      <div className="container mx-auto">
        <h2 className="text-right lg:text-7xl text-5xl my-10 font-bold bg-gradient-to-l from-[#f34949] via-[#ff0ecb8a] to-[#ff18c5] bg-clip-text text-transparent">
          Contact_
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {/* info */}
          <div className="flex flex-col justify-center">
            <a
              className="flex items-center text-lg"
              href="mailto:mdalamincodes@gmail.com"
            >
              <FiMail size={20} className="mr-2 text-[#26bdf8]" />
              mdalamincodes@gmail.com
            </a>
            <a className="flex items-center text-lg" href="tel:+8801630328733">
              <HiPhone size={20} className="mr-2 text-[#26bdf8]" />
              01630328733
            </a>
            <a
              className="flex items-center text-lg"
              href="mailto:mdalamincodes@gmail.com"
            >
              <ImLocation size={20} className="mr-2 text-[#26bdf8]" />
              Bangladesh
            </a>
            {/* icons */}
            <div className="my-7 flex gap-3">
              <a
                href="https://www.facebook.com/alamincodes/"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8]  flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <GrFacebookOption className="text-[#36bdf8]" />
              </a>
              <a
                href="https://github.com/alamincodes"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8]  flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <BsGithub className="text-[#36bdf8]" />
              </a>
              <a
                href="https://www.linkedin.com/in/alamincodes/"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8]  flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <FaLinkedin className="text-[#36bdf8]" />
              </a>
            </div>
          </div>

          {/* contact */}
          <div>
            <form
              action="https://formsubmit.co/mdalamincodes@gmail.com"
              method="POST"
              className="flex flex-col"
            >
              <div className="flex lg:flex-row flex-col gap-0 lg:gap-3">
                <input
                  type="Name"
                  name="name"
                  placeholder="Your name"
                  className="my-1 w-full bg-gradient-to-t from-[#341D38] to-[#271223] h-12 outline-none px-4 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="my-1 w-full bg-gradient-to-t from-[#341D38] to-[#271223] h-12 outline-none px-4 rounded-md"
                />
              </div>
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                className="my-1 w-full bg-gradient-to-t from-[#341D38] to-[#271223] h-12 outline-none px-4 rounded-md"
              />
              <textarea
                type="text"
                name="message"
                rows="10"
                placeholder="Message"
                className="my-1 w-full bg-gradient-to-t from-[#341D38] to-[#271223] outline-none px-4 rounded-md"
              />
              <button className="btn my-1 text-xl font-bold w-full">
                Send Message
                <RiSendPlaneFill className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
