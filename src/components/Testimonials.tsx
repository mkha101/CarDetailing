import React, { useEffect } from "react";

export const Testimonials = () => {
  return (
    <div className=" bg-white flex  flex-col items-center    text-white">
      <div className="mt-10 w-96 flex flex-col gap-4">
        <h1 className="text-xl text-center text-red-700 underline decoration-red-700 decoration-2 underline-offset-8">
          Reviews
        </h1>
        <h1 className="text-3xl text-center text-black"></h1>
      </div>
      <div className="flex py-10   gap-10 flex-col sm:flex-row">
        {" "}
        <div className="border relative  bg-zinc-100 shadow-xl w-72 h-72 rounded-xl">
          <img
            className="absolute top-4 left-3 w-10"
            src="/google.png"
            alt=""
          />
        </div>
        <div className="border relative bg-zinc-100 shadow-xl w-64 h-72 rounded-xl">
          <img
            className="absolute top-4  left-3 w-10"
            src="/google.png"
            alt=""
          />
        </div>
        <div className="borde relative bg-zinc-100 shadow-xl w-56 h-72 rounded-xl">
          <img
            className="top-4 absolute left-3 w-10"
            src="/google.png"
            alt=""
          />
        </div>
        <div className="border relative bg-zinc-100 shadow-xl w-44 h-72 rounded-xl">
          <img
            className="top-4 absolute left-3 w-10"
            src="/google.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
