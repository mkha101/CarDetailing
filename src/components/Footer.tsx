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
        <h1 className="text-2xl underline decoration-red-700 decoration-2 underline-offset-8 ">
          Pages
        </h1>
        <ul className="flex flex-col justify-center items-center gap-3">
          <li className="cursor-pointer hover:text-red-700">Home</li>
          <li className="cursor-pointer hover:text-red-700">Portfolio</li>
          <li className="cursor-pointer hover:text-red-700">Services</li>
          <li className="cursor-pointer hover:text-red-700">Contact</li>
        </ul>
      </div>{" "}
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl underline decoration-red-700 decoration-2 underline-offset-8 ">
          Business Info
        </h1>
        <ul className="flex flex-col justify-center items-center gap-3">
          <li>Address:</li>
          <li>Hours:</li>
          <li>Phone: Call or Text (123)-456-7890 </li>
        </ul>
      </div>{" "}
      <div className="flex flex-col items-center justify-center">
        {" "}
        <img className="w-40 h-40  " src="./src/images//logo1.png" alt="" />
        <div className="flex gap-3 items-center justify-center  flex-row">
          <InstagramIcon className="cursor-pointer hover:text-red-700" />
          <FacebookIcon className="cursor-pointer hover:text-red-700" />
        </div>
      </div>
      <div className="min-w-[80vw] border-[2px]"></div>
      <div className="flex flex-col justify-center gap-3 items-center">
        <h1>Copyright 2023 All Rights Reserved</h1>
        <p>Website By Muzamil Khan</p>
        <div className="flex gap-3 items-center justify-center  flex-row">
          <Github className="cursor-pointer hover:text-red-700" />
          <Linkedin className="cursor-pointer hover:text-red-700" />
        </div>
      </div>
    </footer>
  );
};
