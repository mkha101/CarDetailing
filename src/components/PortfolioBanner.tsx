import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData";
import "@fontsource/poppins";

import React, { useEffect, useState } from "react";

export const PortfolioBanner = () => {
  return (
    <div className="sm:min-h-screen min-h-[82vh] z-0 relative">
      <div className="absolute flex flex-col justify-start gap-3 pt-56 px-24 items-start inset-0 bg-black ">
        <p className="text-base drop-shadow-2xl uppercase  tracking-widest  text-white font-normal">
          Portfolio
        </p>
        <h1 className="text-white drop-shadow-2xl leading-tight uppercase  tracking-widest text-3xl text-center font-semibold xl:text-7xl lg:text-5xl">
          Detailing Portfolio
        </h1>
      </div>
    </div>
  );
};
