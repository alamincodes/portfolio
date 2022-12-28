import React from "react";
import { HiMenuAlt3, HiOutlinePlus } from "react-icons/hi";
const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Skill",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <>
      <div className="fixed w-full top-0 h-24 bg-black/80 backdrop-blur-2xl text-white z-20">
        <div className="flex justify-between items-center container mx-auto h-full">
          {/* logo */}
          <div>
            <h2 className="tracking-widest text-3xl font-bold">Alamincodes_</h2>
          </div>
          {/* text */}
          <div>
            <ul className="lg:flex hidden items-center space-x-12">
              {links.map(({ link, id }) => (
                <li className="text-xl nav-link capitalize cursor-pointer" key={id}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? (
              <HiOutlinePlus className=" rotate-45" size={30} />
            ) : (
              <HiMenuAlt3 size={30} />
            )}
          </div>
        </div>
      </div>
      {/* phone */}
      <div
        className={`w-full bg-black/80 backdrop-blur-xl text-white fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 opacity-95" : "top-[-100%]"
        }`}
      >
        <ul className="space-y-5">
          {links.map(({ link, id }) => (
            <li key={id}>{link}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
