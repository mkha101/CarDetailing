import React from "react";
import { Button } from "./ui/button";

export const TestimonialsReviews = () => {
  return (
    <div className=" bg-zinc-800 flex  flex-row justify-between items-center    text-white">
      <div className="flex flex-col  w-3/6  items-center justify-center">
        <div className="flex ml-20 w-96 flex-col gap-4">
          <h1 className="text-xl text-red-700">About Us</h1>
          <p className="text-6xl font-extrabold">Trusted for Over 10 Years</p>
          <p className=" mt-5 text-zinc-400 [word-spacing:3px] tracking-wide">
            Founded by a team of car aficionados, [Your Company Name] was born
            out of a shared love for cars and a desire to provide the best
            possible care for them. Our journey began in [Year Established] with
            a simple mission: to elevate the car detailing experience to a level
            of perfection that surpasses expectations.
          </p>
          <Button className="bg-transparent mt-10 tracking-widest font-semibold text-xl hover:bg-transparent hover:border-red-700 transition duration-100 ease-in-out hover:text-red-700 border-[2px] rounded-full px-20 py-6 ">
            Learn More
          </Button>
        </div>
      </div>
      <div className="w-3/4">
        <img className="" src="/vette.jpeg" alt="" />
      </div>
    </div>
  );
};
