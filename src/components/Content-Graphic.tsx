import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import React from "react";

export const ContentGraphic = () => {
  return (
    <div className="min-h-screen lg:min-h-[53rem] z-0 bg-cover bg-[url('/ferrari.jpeg')] relative  bg-no-repeat  flex flex-col justify-center items-center px-20 text-black">
      <div className="absolute flex   flex-col justify-center  items-center inset-0 bg-black bg-opacity-75">
        <div className="mb-20 flex  gap-20  flex-col justify-center  items-center ">
          {" "}
          <h1 className="text-white text-3xl    text-center font-extrabold sm:text-8xl">
            Fall in love with your car <br /> all over again
          </h1>
          <Button className="bg-transparent font-semibold text-lg hover:bg-transparent hover:border-red-600 transition duration-500 ease-in-out hover:text-red-600  border rounded-full px-20 py-6 ">
            Learn More
          </Button>
          <div className="flex flex-row absolute   bottom-12 gap-1">
            <div className="bg-white p-[5px] cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full"></div>
            <div className="bg-white p-[5px] cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full"></div>
            <div className="bg-white p-[5px] cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full"></div>
            <div className="bg-white p-[5px] cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full"></div>
          </div>
          <div className="absolute cursor-pointer right-14 bottom-80">
            <ChevronRight size={56} color="white" />
          </div>
          <div className="absolute cursor-pointer left-14 bottom-80">
            <ChevronLeft size={56} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
