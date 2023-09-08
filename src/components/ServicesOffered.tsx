import React from "react";

export const ServicesOffered = () => {
  return (
    <div className="bg-black text-black">
      <div className="grid grid-cols-2 h-[83rem] border-[16px] gap-3 border-black min-w-screen w-full grid-rows-2 text-white">
        <div className="border-[8px] border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center">
          <h1 className="text-white text-center font-medium text-7xl"></h1>
        </div>
        <div className="border-[8px] border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[8px] border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[8px] border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};
