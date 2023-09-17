import React, { useState } from "react";
import { Services } from "./Services";
import { X, Menu } from "lucide-react";
import "../styles/globals.css";
import Container from "./Container";

interface NavListProps {
  positionprop: string;

  setServices: (value: boolean) => void;
}

export const NavList: React.FC<NavListProps> = ({ setServices }) => {
  return (
    <nav className="hidden   lg:flex flex-row items-center max-h-[13vh]  px-3  justify-between">
      <a href="/">
        <img className="w-36 h-36  " src="/logo1.png" alt="" />
      </a>
      <ul className="flex  flex-row text-white tracking-[0.2em] text-base text-opacity-200 gap-16">
        <li className="  hover:text-red-700 font-normal">
          <a href="/">Home</a>
        </li>{" "}
        <li className="  hover:text-red-700 font-normal">
          <a href="/portfolio">Portfolio</a>
        </li>{" "}
        <button
          onMouseEnter={() => setServices(true)}
          className="cursor-pointer tracking-[0.2em]   hover:text-red-700 font-normal"
        >
          Services
        </button>
        <li className="  hover:text-red-700 font-normal">
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
      <Container>
        <nav className="lg:hidden flex   flex-row items-center  max-h-[11vh]  justify-between">
          <a href="/">
            <img className="w-24 " src="./logo1.png" alt="" />
          </a>
          <button
            className="flex flex-col h-12 w-12 justify-center items-center "
            onClick={toggleMenu}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen && "rotate-45 translate-y-3 opacity-100 "
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen && "-rotate-45 -translate-y-3 "
              }`}
            />
          </button>
        </nav>
      </Container>
      <div
        className={`overflow-hidden  transition-all ease-in-out duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {isOpen && (
          <nav className=" flex   justify-between bg-zinc-900 items-center">
            <ul
              className={`grid grid-cols-1 w-full  text-center grid-rows-1 uppercase text-white tracking-[0.2em] text-base text-opacity-200 `}
            >
              <li className="hover:text-red-700 bg-zinc-900 py-5   font-normal">
                <a className="" href="/">
                  Home
                </a>
              </li>{" "}
              <li className="hover:text-red-700  bg-zinc-900 py-5   font-normal">
                <a href="/Services">Services</a>
              </li>{" "}
              <li className="hover:text-red-700  bg-zinc-900 py-5  font-normal">
                <a href="/portfolio">Portfolio</a>
              </li>{" "}
              <div className="flex items-center justify-center hover:bg-red-700 py-5 bg-blue-700">
                {" "}
                <li className="   font-normal">
                  <a href="/contact">Contact Now</a>
                </li>
              </div>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
