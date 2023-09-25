import React from "react";
import RevealOnScroll from "./RevealOnScroll";

export const ServicesOffered = () => {
  return (
    <div className="bg-black  text-black">
      <div className="grid  sm:grid-cols-2 grid-col-4  border-x-[4px] sm:gap-[12px] gap-[18px]  sm:border-[12px] max-sm:py-4 max-sm:p-2  border-black min-w-screen max-h-[150vh] min-h-[150vh] sm:max-h-[100vh] sm:min-h-[100vh] grid-rows-4 sm:grid-rows-2 text-white">
        <div
          style={{
            backgroundImage: `url(./rims.jpeg)`,
            backgroundSize: "cover",
            boxShadow: "0px 0px 200px 0px black inset",
          }}
          className="relative   max-sm:p-2 rounded-lg sm:p-2 cursor-pointer border-black bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
            <h1 className="text-white  uppercase  tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
              Ceramic Coating
            </h1>
            <p className="text-sm text-center font-medium  "></p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(./matte.webp)`,
            backgroundSize: "cover",
            boxShadow: "0px 0px 200px 0px black inset",
          }}
          className="relative  max-sm:p-2 rounded-lg sm:p-2  cursor-pointer border-black bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
            <h1 className="text-white  uppercase  tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
              Interior/Exterior Cleaning
            </h1>
            <p className="text-sm text-center font-medium  "></p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(./rim.jpeg)`,
            backgroundSize: "cover",
            boxShadow: "0px 0px 200px 0px black inset",
          }}
          className="relative  max-sm:p-2 rounded-lg sm:p-2  cursor-pointer border-black bg-cover bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 flex px-6 gap-2 flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-wider text-2xl drop-shadow-2xl text-center font-medium md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-5xl">
              Glass and Plastic Restoration
            </h1>
            <p className="text-sm text-center font-medium  "></p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(./porsche.jpeg)`,
            backgroundSize: "cover",
            boxShadow: "0px 0px 200px 0px black inset",
          }}
          className="relative  max-sm:p-2 rounded-lg sm:p-2 cursor-pointer border-black bg-cover bg-center bg-no-repeat"
        >
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
    </div>
  );
};
