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
        </div>
      </div>
    </div>
  );
};
