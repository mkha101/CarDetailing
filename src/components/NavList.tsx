import React, { useState } from "react";
import { Services } from "./Services";
import { X, Menu } from "lucide-react";
import "../styles/globals.css";

interface NavListProps {
  positionprop: string;

  setServices: (value: boolean) => void; // Assuming setServices is a function that takes a boolean argument
}

export const NavList: React.FC<NavListProps> = ({ setServices }) => {
  return (
    <nav
      className={`hidden   lg:flex flex-row items-center max-h-[13vh]  px-3  justify-between`}
    >
      <a href="/">
        <img className="w-36 h-36  " src="/logo1.png" alt="" />
      </a>

      <ul
        className={`flex  flex-row text-white tracking-[0.2em] text-base text-opacity-200 gap-16`}
      >
        <li className="  hover:text-gray-500 font-extralight">
          <a href="/">Home</a>
        </li>{" "}
        <li className="  hover:text-gray-500 font-extralight">
          <a href="/portfolio">Portfolio</a>
        </li>{" "}
        <button
          onMouseEnter={() => setServices(true)}
          className="cursor-pointer tracking-[0.2em]   hover:text-gray-500 font-extralight"
        >
          Services
        </button>
        <li className="  hover:text-gray-500 font-extralight">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <ul className={`flex flex-row  text-white text-opacity-200 gap-6`}>
        <li className="hover:bg-transparent text-xl border-[2px]   transition ease-in-out hover:border-red-700  duration-100 hover:text-red-700 hover:bg-opacity-50  px-7 py-1 rounded-3xl cursor-pointer  font-semibold">
          <a href="/">Get Quote!</a>
        </li>
      </ul>
    </nav>
  );
};

export const MobileNavList = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div>
      {" "}
      <nav className="lg:hidden flex   flex-row items-center px-3 max-h-[11vh]  justify-between">
        <a href="/">
          <img className="w-24 pt-3" src="./logo1.png" alt="" />
        </a>
        <button
          className="flex flex-col h-12 w-12 justify-center items-center group"
          onClick={toggleMenu}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : " group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : " group-hover:opacity-100"
            }`}
          />
        </button>
      </nav>
      <div
        className={`overflow-hidden transition-all ease-in-out duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {isOpen && (
          <nav className="min-h-[87vh] flex justify-center items-center ">
            <ul
              className={`flex flex-col justify-center items-center text-white tracking-[0.2em] text-base text-opacity-200 gap-8`}
            >
              <li className="hover:text-gray-500 font-extralight">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-gray-500 font-extralight">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="hover:text-gray-500 font-extralight">
                <a href="/contact">Contact</a>
              </li>
              <li className="hover:text-gray-500 font-extralight">
                <a href="/Services">Services</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
