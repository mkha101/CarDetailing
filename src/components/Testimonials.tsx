import React, { useEffect } from "react";

export const Testimonials = () => {
  return (
    <div className=" bg-black flex flex-col items-center    text-white">
      <div className="mt-10 w-96 sm:px-3 px-9  sm:ml-0 flex flex-col gap-3">
        <h1 className="text-base  font-semibold uppercase  text-white underline decoration-red-700 decoration-2 underline-offset-8">
          Reviews
        </h1>
        <p className="text-2xl font-bold  uppercase text-white  ">
          What our customers think
        </p>
      </div>
      <div className="sm:grid grid-rows-2 grid-cols-3 flex py-10 sm:items-center sm:justify-center flex-wrap px-6   gap-10 flex-col sm:flex-row">
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
        <div className="border relative flex justify-center items-center text-white flex-col  sm:mb-32 px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
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
        <div className="border sm:mt-32 flex justify-center items-center text-white flex-col  relative px-2 bg-zinc-100 shadow-xl w-[20rem]  h-72 rounded-xl">
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
        <div className="border flex justify-center items-center text-white flex-col   sm:mt-32 relative px-2 bg-zinc-100 shadow-xl w-[20rem]  h-72 rounded-xl">
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
        <div className="border sm:flex justify-center items-center text-white flex-col  hidden sm:mb-32  relative px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
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
        <div className="border sm:flex justify-center items-center text-white flex-col  hidden sm:mt-32  relative px-2 bg-zinc-100 shadow-xl  w-[20rem]  h-72 rounded-xl">
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
