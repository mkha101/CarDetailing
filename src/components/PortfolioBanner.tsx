import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData";
import "@fontsource/poppins";

import React, { useEffect, useState } from "react";

export const PortfolioBanner = () => {
  return (
    <div className="sm:min-h-screen min-h-[82vh] z-0 relative">
      <div className="absolute flex flex-col justify-start pt-20 items-center inset-0 bg-zinc-700 ">
        <div className=" flex  sm:gap-10 gap-16 mt-12 sm:px-4 px-3  flex-col justify-center items-center ">
          <h1 className="text-white drop-shadow-2xl leading-tight uppercase  tracking-tight text-3xl text-center font-semibold xl:text-5xl lg:text-5xl">
            Portfolio
          </h1>
          <div className="flex flex-row absolute justify-centers bottom-5 gap-2"></div>
        </div>
      </div>
    </div>
  );
};
