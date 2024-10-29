import {
  FacebookIcon,
  Github,
  GithubIcon,
  InstagramIcon,
  Linkedin,
} from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" text-white gap-10  bg-black py-20 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-base uppercase underline decoration-[#FE3C3B] decoration-2 underline-offset-8 ">
          Pages
        </h1>
        <ul className="flex text-sm uppercase flex-col justify-center items-center gap-3">
          <li className="cursor-pointer  hover:text-[#FE3C3B]">
            <a href="/">Home</a>
          </li>{" "}
          <li className="cursor-pointer  hover:text-[#FE3C3B]">
            <a href="/services">Services</a>
          </li>
          <li className="cursor-pointer  hover:text-[#FE3C3B]">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="cursor-pointer  hover:text-[#FE3C3B]">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>{" "}
      <div className="flex uppercase flex-col justify-center items-center gap-3">
        <h1 className="text-base underline decoration-[#FE3C3B] decoration-2 underline-offset-8 ">
          Business Info
        </h1>
        <ul className="flex text-sm flex-col justify-center items-center gap-3">
          <li>Hours:</li>
          <li>DM or Email: mm6detailing@gmail.com </li>
        </ul>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center justify-center">
        {" "}
        <h1 className="text-white rounded-full border-none bg-zinc-900 p-2">
          <a href="/"> Mirror Magic Detailing</a>
        </h1>{" "}
        <div className="flex gap-3 items-center justify-center  flex-row">
          <a target="_blank" href="https://www.instagram.com/mm6detailing/">
            {" "}
            <InstagramIcon className="cursor-pointer hover:text-[#FE3C3B]" />
          </a>

          <FacebookIcon className="cursor-pointer hover:text-[#FE3C3B]" />
        </div>
      </div>
      <div className="min-w-[80vw] border-[2px]"></div>
      <div className="flex text-sm flex-col justify-center gap-3 items-center">
        <h1>Copyright 2023 All Rights Reserved</h1>
        <p>Website By Muzamil Khan</p>
        <div className="flex gap-3 items-center justify-center  flex-row">
          <Github className="cursor-pointer hover:text-[#FE3C3B]" />
          <Linkedin className="cursor-pointer hover:text-[#FE3C3B]" />
        </div>
      </div>
    </footer>
  );
};
