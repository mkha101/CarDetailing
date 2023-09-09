import React from "react";

export const Services = () => {
  return (
    <div className="min-h-[80vh] inset-0 bg-black bg-opacity-90">
      {" "}
      <div className="grid grid-cols-4 bg-black min-h-[35rem]   border-[4px] gap-1 border-black px-60 grid-rows-2 text-white">
        <div className="border-[1px] border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center">
          <h1 className="text-white text-center font-medium text-7xl"></h1>
        </div>
        <div className="border-[1px] border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[1px] border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[1px] border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[1px] border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center">
          <h1 className="text-white text-center font-medium text-7xl"></h1>
        </div>
        <div className="border-[1px] border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[1px] border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
        <div className="border-[1px] border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};
