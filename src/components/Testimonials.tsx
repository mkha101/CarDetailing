import React, { useEffect } from "react";

export const Testimonials = () => {
  return (
    <div className=" bg-white flex border-b-2 border-b-black flex-col items-center    text-white">
      <div className="mt-10 w-96 flex flex-col gap-4">
        <h1 className="text-xl  font-bold uppercase text-center text-black underline decoration-red-700 decoration-2 underline-offset-8">
          Reviews
        </h1>
        <h1 className="text-3xl text-center text-black absolute "></h1>
      </div>
      <div className="sm:grid grid-rows-2 grid-cols-3 flex py-20 sm:items-center sm:justify-center flex-wrap px-6   gap-10 flex-col sm:flex-row">
        {" "}
        <div className="border sm:mt-32 relative px-2 flex justify-center items-center text-black flex-col    bg-zinc-100 shadow-xl  w-[20rem] h-72 rounded-xl">
          <img
            className="absolute top-4 left-3 w-10"
            src="/google.png"
            alt=""
          />
          <h1>Reviewer</h1>
          <p>Review Here</p>
        </div>
        <div className="border relative flex justify-center items-center text-black flex-col  sm:mb-32 px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
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
        <div className="border sm:mt-32 flex justify-center items-center text-black flex-col  relative px-2 bg-zinc-100 shadow-xl w-[20rem]  h-72 rounded-xl">
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
        <div className="border flex justify-center items-center text-black flex-col   sm:mt-32 relative px-2 bg-zinc-100 shadow-xl w-[20rem]  h-72 rounded-xl">
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
        <div className="border sm:flex justify-center items-center text-black flex-col  hidden sm:mb-32  relative px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
          <img
            className="top-4 absolute left-3 w-10"
            src="/google.png"
            alt=""
          />
          <div className="flex text-black absolute  justify-center items-center flex-col">
            <h1>Reviewer</h1>
            <p>Review Here</p>
          </div>
        </div>{" "}
        <div className="border sm:flex justify-center items-center text-black flex-col  hidden sm:mt-32  relative px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
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
    </div>
  );
};
