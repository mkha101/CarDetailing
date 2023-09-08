import { useState } from "react";
import { Container } from "./Container.tsx";
import { Button } from "./ui/button.tsx";
import { X, Menu } from "lucide-react";
import { Services } from "./Services.tsx";

interface Props {
  headerTextColor: string;
}

export const Header = ({ headerTextColor }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full bg-black z-10 relative max-w-screen `}>
      <div className="absolute  inset-0 bg-black  ">
        <Container>
          <>
            <nav className="hidden sm:flex flex-row items-center py-2 px-3  justify-between">
              <a href="/">
                <img className="w-40" src="./logo1.png" alt="" />
              </a>
              <ul
                className={`flex relative flex-row text-${headerTextColor} text-lg text-opacity-200 gap-16`}
              >
                <li className=" underline-offset-4 hover:border-red-600 font-light">
                  <a href="/">Home</a>
                </li>{" "}
                <li className=" underline-offset-4 hover:border-red-600 font-light">
                  <a href="/about">Portfolio</a>
                </li>{" "}
                <button
                  onMouseEnter={() => setServices(true)}
                  className="cursor-pointer  hover:border-red-600 font-light"
                >
                  Services
                </button>
                <li className=" underline-offset-4 hover:border-red-600 font-light">
                  <a href="/about">About</a>
                </li>
              </ul>
              <ul
                className={`flex flex-row  text-${headerTextColor}  text-opacity-200 gap-6`}
              >
                <li className="hover:bg-transparent hover:border-red-600 transition duration-500 ease-in-out hover:text-red-600 border hover:bg-opacity-50  px-10 py-1 rounded-3xl cursor-pointer  font-semibold">
                  <a href="/">Book Us</a>
                </li>
              </ul>
            </nav>
            <nav className=" sm:hidden flex flex-row items-center py-5 px-3 justify-between">
              <a href="/">
                <h1 className="hover:text-blue-500 text-white font-bold text-2xl">
                  SimplyClean
                </h1>
              </a>
              <button onClick={toggleNavbar} className="">
                {" "}
                {isOpen ? <X className="" /> : <Menu />}
              </button>
            </nav>
            {isOpen && (
              <div className="block sm:hidden transition  ">
                <nav className="h-[10rem]  ">
                  <ul className="flex flex-col items-center justify-center text-white gap-6">
                    <li className=" underline-offset-4 hover:text-blue-500 font-semibold">
                      <a href="/">Home</a>
                    </li>
                    <li className=" underline-offset-4 hover:text-blue-500 font-semibold">
                      <a href="/">Contact</a>
                    </li>
                    <li className=" underline-offset-4 hover:text-blue-500 font-semibold">
                      <a href="/">About</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>{" "}
        </Container>{" "}
        {services && (
          <div
            onMouseLeave={() => setServices(false)}
            className="absolute w-full  "
          >
            <Services />
          </div>
        )}
      </div>
    </header>
  );
};
