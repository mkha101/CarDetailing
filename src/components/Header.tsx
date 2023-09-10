import { useState } from "react";
import { Container } from "./Container.tsx";
import { Button } from "./ui/button.tsx";
import { X, Menu } from "lucide-react";
import { Services } from "./Services.tsx";

interface Props {
  position: string;
}

export const Header = ({ position }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full bg-black   ${position} z-10  max-w-screen `}>
      <Container>
        <>
          <nav className="hidden sticky sm:flex flex-row items-center max-h-[8rem]  px-3  justify-between">
            <a href="/">
              <img className="w-36 h-36  " src="./logo1.png" alt="" />
            </a>

            <ul
              className={`flex  flex-row text-white tracking-[0.2em] text-xl text-opacity-200 gap-16`}
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
              <li className="hover:bg-transparent text-xl border-[2px]   transition ease-in-out hover:border-red-700  duration-100 hover:text-red-700 hover:bg-opacity-50  px-10 py-1 rounded-3xl cursor-pointer  font-semibold">
                <a href="/">Get Quote!</a>
              </li>
            </ul>
          </nav>
          <nav className=" sm:hidden flex flex-row items-center  px-3 justify-between">
            <a href="/">
              <img className="w-24" src="./logo1.png" alt="" />
            </a>
            <button onClick={toggleNavbar} className="mr-3 ">
              {" "}
              {isOpen ? (
                <X size={35} color="white" />
              ) : (
                <Menu size={35} color="white" />
              )}
            </button>
          </nav>
          {isOpen && (
            <div
              className={`block sm:hidden bg-black transform translate-x-0 duration-500 ease-in-out ${
                isOpen ? "h-[10rem]" : "h-0"
              }`}
            >
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
          className="absolute w-full top-32  "
        >
          <Services />
        </div>
      )}
    </header>
  );
};
