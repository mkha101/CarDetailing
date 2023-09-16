import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronRight,
  MoveRight,
  Scroll,
  ScrollIcon,
  ScrollTextIcon,
  Stars,
  ToggleRight,
  Star,
} from "lucide-react";

export const Testimonials = () => {
  return (
    <div className=" bg-black relative overflow-hidden  flex flex-col items-center       sm:text-white text-white">
      <img className="opacity-50  block sm:hidden" src="/aboutme.jpg" alt="" />

      <div className="absolute">
        {" "}
        <div className="mt-10   sm:items-center  sm:px-3 px-8  sm:ml-0 flex flex-col sm:gap-6 gap-3">
          <h1 className="text-base sm:text-xl  font-semibold uppercase     sm:text-white text-white underline decoration-red-700 decoration-2 underline-offset-8">
            Reviews
          </h1>
          <p className="text-2xl sm:text-4xl  font-bold sm:text-center  uppercase    sm:text-white text-white  ">
            What our customers think
          </p>
        </div>
        <div className="sm:grid grid-rows-1  max-sm:overflow-x-auto max-sm:max-w-[25rem]  grid-cols-1 flex pt-10 py-20 sm:items-center sm:justify-center flex-wrap px-6   gap-10 flex-col sm:flex-row">
          {" "}
          <div className="flex gap-10 flex-row  ">
            {" "}
            <div className="border relative px-2 flex justify-center items-start text-black flex-col    border-none bg-zinc-400 shadow-xl   w-[22rem] sm:w-[20rem] h-48 rounded-xl">
              <div className="absolute top-10 flex left-3">
                <Star className=" " fill="black" />{" "}
                <Star className="" fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
              </div>
              <div className="absolute top-4 left-3 flex gap-2">
                {" "}
                <p className=" text-sm font-medium  "> Posted by </p>
                <span className="text-sm font-semibold text-red-700">
                  Google
                </span>
              </div>

              <div className="flex flex-col mt-1  px-1">
                {" "}
                <p className="font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis illo iusto enim, ipsa,
                </p>
              </div>
            </div>
            <div className="border relative flex justify-center items-center     text-black flex-col   px-2 border-none bg-zinc-400 shadow-xl  w-[22rem] sm:w-[20rem]  h-48 rounded-xl">
              <div className="absolute top-10 flex left-3">
                <Star className=" " fill="black" />{" "}
                <Star className="" fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
              </div>
              <div className="absolute top-4 left-3 flex gap-2">
                {" "}
                <p className=" text-sm font-medium  "> Posted by </p>
                <span className="text-sm font-semibold text-red-700">
                  Google
                </span>
              </div>

              <div className="flex flex-col mt-1  px-1">
                {" "}
                <p className="font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis illo iusto enim, ipsa,
                </p>
              </div>
            </div>
            <div className="border  flex justify-center items-center     text-black flex-col  relative px-2 border-none bg-zinc-400 shadow-xl w-[22rem] sm:w-[20rem]  h-48 rounded-xl">
              <div className="absolute top-10 flex left-3">
                <Star className=" " fill="black" />{" "}
                <Star className="" fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
                <Star className=" " fill="black" />{" "}
              </div>
              <div className="absolute top-4 left-3 flex gap-2">
                {" "}
                <p className=" text-sm font-medium  "> Posted by </p>
                <span className="text-sm font-semibold  text-red-700">
                  Google
                </span>
              </div>

              <div className="flex flex-col mt-1  px-1">
                {" "}
                <p className="font-medium ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis illo iusto enim, ipsa,
                </p>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden ml-[5.5rem]   border-white   flex-row gap-2">
            <ArrowLeftCircle />

            <p className="font-semibold text-base uppercase">Scrollable</p>
            <ArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
};
