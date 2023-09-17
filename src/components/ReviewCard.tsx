import { Star } from "lucide-react";
import React from "react";

export const ReviewCard = () => {
  return (
    <div className="border relative px-2 flex justify-center items-start text-black flex-col    border-none bg-zinc-100 shadow-xl   w-[23rem] sm:w-[20rem] h-48 rounded-xl">
      <div className="absolute top-10 flex left-3">
        <Star className=" " fill="black" /> <Star className="" fill="black" />{" "}
        <Star className=" " fill="black" /> <Star className=" " fill="black" />{" "}
        <Star className=" " fill="black" />{" "}
      </div>
      <div className="absolute top-4 left-3 flex gap-2">
        {" "}
        <p className=" text-sm font-medium  "> Posted by </p>
        <span className="text-sm font-semibold text-red-700">Google</span>
      </div>

      <div className="flex flex-col mt-1  px-1">
        {" "}
        <p className="font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo
          iusto enim, ipsa,
        </p>
      </div>
    </div>
  );
};
