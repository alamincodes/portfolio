import React from "react";
import { FiMail } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
const ContactForm = () => {
  // const handleForm = (e) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   const contact = { name, email, message };
  //   console.log(contact);
  //   const url = `https://formsubmit.co/mdalamincodes@gmail.com`;
  //   fetch(url, {
  //     method: 'POST',
  //     body:JSON.stringify(contact)
  //   })
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log('data success', data);
  //   })

  // };

  return (
    <section className="my-[100px]" name="contact">
      <div className="container mx-auto">
        <h2 className="text-right lg:text-7xl text-5xl my-10 font-bold bg-gradient-to-l from-[#f34949] via-[#ff0ecb8a] to-[#ff18c5] bg-clip-text text-transparent">
          Contact_
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {/* info */}
          <div className="flex flex-col justify-center space-y-3">
            <a
              href="mailto:mdalamincodes@gmail.com"
              className="flex flex-col items-start bg-slate-800/[0.7] p-4 rounded-xl text-lg text-white/75"
            >
              <FiMail size={30} className="mr-2 text-pink-600 mb-1" />
              mdalamincodes@gmail.com
            </a>

            <a
              href="tel:+8801630328733"
              className="flex flex-col items-start bg-slate-800/[0.7] p-4 rounded-xl text-lg text-white/75"
            >
              <HiPhone size={30} className="mr-2 text-pink-600 mb-1" />
              01630328733
            </a>
            <div className="flex flex-col items-start bg-slate-800/[0.7] p-4 rounded-xl">
              <ImLocation size={30} className="mr-2 text-pink-600 mb-1" />
              <h2 className="flex items-center text-lg text-white/75">
                Bangladesh
              </h2>
            </div>

            {/* icons */}
            <div className="my-4 flex gap-3 lg:justify-center justify-start px-4 md:px-0">
              <a
                href="https://www.facebook.com/alamincodes/"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8] group hover:bg-[#36bdf8] flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <GrFacebookOption className="text-[#36bdf8] group-hover:text-white" />
              </a>
              <a
                href="https://github.com/alamincodes"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8] group hover:bg-[#36bdf8] flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <BsGithub className="text-[#36bdf8] group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/alamincodes/"
                rel="noreferrer"
                target="_blank"
                className="p-2 border-[#36bdf8] group hover:bg-[#36bdf8] flex justify-center items-center border-2 rounded-full"
              >
                {" "}
                <FaLinkedin className="text-[#36bdf8] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* contact */}
          <div>
            <form method="POST" className="flex flex-col">
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
                rows="7"
                placeholder="Message"
                className="my-1 w-full bg-gradient-to-t from-[#341D38] to-[#271223] outline-none px-4 rounded-md"
              />
              <button className="flex group justify-center items-center border-2 py-2 rounded-full my-3 text-xl font-bold w-full hover:border-primary">
                Send Message
                <RiMailSendLine className="ml-2 transform transition-transform group-hover:translate-x-2 group-hover:text-pink-600" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
