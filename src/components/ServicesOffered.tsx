import React from "react";

export const ServicesOffered = () => {
  return (
    <div className="bg-black text-black">
      <div className="grid  sm:grid-cols-2 grid-col-4 sm:max-h-screen border-[8px] sm:border-[16px] gap-2 sm:gap-3 border-black min-w-screen w-full grid-rows-4 sm:grid-rows-2 text-white">
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/rims.jpeg"
            alt=""
            className="object-cover  w-full h-full  shadow-inner opacity-70 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="ttext-white uppercase tracking-tighter text-3xl text-center font-black xl:text-7xl lg:text-5xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/matte.webp"
            alt=""
            className="object-cover w-full h-full  shadow-inner opacity-70 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl text-center font-black xl:text-7xl lg:text-5xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/rim.jpeg"
            alt=""
            className="object-cover backdr w-full h-full  shadow-inner opacity-70 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl text-center font-black xl:text-7xl lg:text-5xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
        <div className="relative sm:border-[8px] cursor-pointer border-black bg-cover bg-center bg-no-repeat">
          <img
            src="/porsche.jpeg"
            alt=""
            className="object-cover w-full h-full  shadow-inner opacity-70 "
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white uppercase tracking-tighter text-3xl text-center font-black xl:text-7xl lg:text-5xl">
              Ceramic Coating
            </h1>
            <p>Your text here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
