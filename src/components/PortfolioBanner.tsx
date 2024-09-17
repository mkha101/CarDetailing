import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData";
import "@fontsource/poppins";

import React, { useEffect, useState } from "react";
import Container from "./Container";

export const PortfolioBanner = () => {
  return (
    <div className="bg-black">
      <div className="sm:min-h-screen min-h-[82vh] bg-black z-0  relative">
        <div className="absolute flex flex-col justify-start gap-3 pt-36 px-6 items-center inset-0 bg-black ">
          <div
            style={{
              backgroundImage: `url(./aboutusbigbd.webp)`,
              backgroundSize: "cover",
              boxShadow: "0px 0px 200px 0px black inset",
            }}
            className="flex gap-3 flex-col items-center  bg-black w-full justify-center h-96  "
          >
            <p className="text-base drop-shadow-2xl uppercase  tracking-widest  text-white font-normal">
              Portfolio
            </p>
            <h1 className="text-white drop-shadow-2xl leading-tight uppercase  tracking-widest text-3xl  font-semibold xl:text-7xl lg:text-5xl">
              Detailing Portfolio
            </h1>
          </div>
          <div className="grid w-full grid-cols-3   bg-black h-full border-[4px] gap-2  border-black grid-rows-3 text-white">
            <div className="border-[1px]    hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/rims.jpeg)] bg-cover flex flex-col justify-center items-center ">
              <h1 className="text-white text-center  font-medium text-xl">
                Wheels and Tires
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/matte.webp)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Paint Protection
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/rim.jpeg)] bg-cover flex flex-col justify-center items-center ">
              <h1 className="text-white text-center  font-medium text-xl">
                Ceramic Coating
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/porsche.jpeg)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Mobile Detailing
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer   border-black bg-[url(/rims.jpeg)] bg-cover flex flex-col justify-center items-center ">
              <h1 className="text-white text-center  font-medium text-xl">
                Headlight Restoration
              </h1>{" "}
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/matte.webp)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Engine Bay Cleaning
              </h1>
            </div>
            <div className=" hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-[1px] border-black bg-[url(/rim.jpeg)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Interior/Exterior Detail
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/porsche.jpeg)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Trim and Plastic Restoration
              </h1>
            </div>
            <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(/porsche.jpeg)] bg-cover flex flex-col justify-center items-center ">
              {" "}
              <h1 className="text-white text-center  font-medium text-xl">
                Trim and Plastic Restoration
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
