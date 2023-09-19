import React from "react";
import RevealOnScroll from "./RevealOnScroll";

export const ServicesOffered = () => {
  return (
    <div className="bg-black sm:min-h-screen text-black">
      <RevealOnScroll>
        <div className="grid  sm:grid-cols-2 grid-col-4  border-x-[4px] sm:border-[12px] max-sm:py-2  sm:gap-3 border-black min-w-screen w-full grid-rows-4 sm:grid-rows-2 text-white">
          <div className="relative  max-sm:p-2   cursor-pointer border-black bg-cover bg-center bg-no-repeat">
            <img
              src="/rims.jpeg"
              alt=""
              className="object-cover   max-sm:rounded-lg max-sm:border border-black  w-full h-full  shadow-inner opacity-80 "
            />
            <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
              <h1 className="text-white  uppercase  tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
                Ceramic Coating
              </h1>
              <p className="text-sm text-center font-medium  "></p>
            </div>
          </div>

          <div className="relative  max-sm:p-2   cursor-pointer border-black bg-cover bg-center bg-no-repeat">
            <img
              src="/matte.webp"
              alt=""
              className="object-cover   max-sm:rounded-lg max-sm:border border-black  w-full h-full  shadow-inner opacity-80 "
            />
            <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
              <h1 className="text-white  uppercase  tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
                Interior/Exterior Cleaning
              </h1>
              <p className="text-sm text-center font-medium  "></p>
            </div>
          </div>

          <div className="relative  max-sm:p-2 cursor-pointer border-black bg-cover bg-center bg-no-repeat">
            <img
              src="/rim.jpeg"
              alt=""
              className="object-cover  w-full h-full max-sm:border border-black max-sm:rounded-lg  shadow-inner opacity-80 "
            />
            <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
              <h1 className="text-white uppercase tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
                Glass and Plastic Restoration
              </h1>
              <p className="text-sm text-center font-medium  "></p>
            </div>
          </div>

          <div className="relative  max-sm:p-2 cursor-pointer border-black bg-cover bg-center bg-no-repeat">
            <img
              src="/porsche.jpeg"
              alt=""
              className="object-cover w-full h-full max-sm:rounded-lg max-sm:border border-black  shadow-inner opacity-80 "
            />
            <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
              <h1
                className="text-white uppercase tracking-wider text-2xl drop-shadow-2xl text-center font-medium
             md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl"
              >
                Paint Correction
              </h1>
              <p className="text-sm text-center font-medium  "></p>
            </div>
          </div>
        </div>{" "}
      </RevealOnScroll>
    </div>
  );
};
