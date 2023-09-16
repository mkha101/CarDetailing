import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  MoveRight,
  Scroll,
  ScrollIcon,
  ScrollTextIcon,
  ToggleRight,
} from "lucide-react";

export const Testimonials = () => {
  return (
    <div className=" bg-zinc-900 sm:bg-white  flex flex-col items-center       sm:text-white text-white">
      <div className="mt-10 w-96 sm:items-center  sm:px-3 px-3  sm:ml-0 flex flex-col sm:gap-6 gap-3">
        <h1 className="text-base sm:text-xl  font-semibold uppercase     sm:text-white text-white underline decoration-red-700 decoration-2 underline-offset-8">
          Reviews
        </h1>
        <p className="text-2xl sm:text-4xl  font-bold sm:text-center  uppercase    sm:text-white text-white  ">
          What our customers think
        </p>
      </div>
      <div className="sm:grid grid-rows-1 max-sm:overflow-x-auto max-sm:max-w-[24rem] grid-cols-3 flex pt-10 py-20 sm:items-center sm:justify-center flex-wrap px-6   gap-10 flex-col sm:flex-row">
        {" "}
        <div className="max-sm:flex gap-10 flex-row ">
          {" "}
          <div className="border relative px-2 flex justify-center items-center text-black flex-col    bg-zinc-100 shadow-xl   w-[22rem] sm:w-[20rem] h-72 rounded-xl">
            <img
              className="absolute top-4 left-3 w-10"
              src="/google.png"
              alt=""
            />
            <h1>Reviewer</h1>
            <p>Review Here</p>
          </div>
          <div className="border relative flex justify-center items-center    sm:text-white text-black flex-col   px-2 bg-zinc-100 shadow-xl  w-[22rem] sm:w-[20rem]  h-72 rounded-xl">
            <img
              className="absolute top-4  left-3 w-10"
              src="/google.png"
              alt=""
            />
            <div className="flex text-black absolute  justify-center items-center flex-col">
              <h1>Reviewer</h1>
              <p>Review Here</p>
            </div>
          </div>
          <div className="border  flex justify-center items-center    sm:text-white text-black flex-col  relative px-2 bg-zinc-100 shadow-xl w-[22rem] sm:w-[20rem]  h-72 rounded-xl">
            <img
              className="top-4 absolute left-3 w-10"
              src="/google.png"
              alt=""
            />
            <div className="flex text-black absolute  justify-center items-center flex-col">
              <h1>Reviewer</h1>
              <p>Review Here</p>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden  border-white  flex-row px-32 gap-2">
          <p className="font-medium">Scrollable</p>
          <MoveRight />
        </div>
      </div>
    </div>
  );
};
