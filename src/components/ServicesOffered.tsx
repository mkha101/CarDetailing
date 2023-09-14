import React from "react";

export const ServicesOffered = () => {
  return (
    <div className="bg-black text-black">
      <div className="text-white uppercase flex flex-col gap-3  py-12 px-9 items-start border-[8px] sm:border-[16px] border-black">
        <h1 className="text-base font-semibold underline decoration-red-700 decoration-2 underline-offset-8">
          Our Services
        </h1>
        <p className="font-bold text-2xl">Top-Tier Detailing Services</p>
      </div>

      <div className="grid  sm:grid-cols-2 grid-col-4 sm:max-h-screen border-x-[8px] sm:border-x-[16px] gap-2 sm:gap-3 border-black min-w-screen w-full grid-rows-4 sm:grid-rows-2 text-white">
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/rims.jpeg"
            alt=""
            className="object-cover  w-full h-full  shadow-inner opacity-190 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white  uppercase  tracking-tighter text-3xl drop-shadow-2xl text-center font-bold md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-7xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/matte.webp"
            alt=""
            className="object-cover w-full h-full  shadow-inner opacity-190 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl drop-shadow-2xl text-center font-bold md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-7xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/rim.jpeg"
            alt=""
            className="object-cover  w-full h-full  shadow-inner opacity-190 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl drop-shadow-2xl text-center font-bold md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-7xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/porsche.jpeg"
            alt=""
            className="object-cover w-full h-full  shadow-inner opacity-190 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl drop-shadow-2xl text-center font-bold md:text-4xl sm:text-3xl xl:text-5xl  2xl:text-7xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
