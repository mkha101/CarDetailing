import React from "react";

export const Services = () => {
  return (
    <div className="min-h-[80vh] inset-0 bg-black bg-opacity-90">
      <div className="grid grid-cols-4 bg-black min-h-[40vh] border-[4px] gap-1 border-black px-60 grid-rows-2 text-white">
        <div className="border-[1px]    hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center ">
          <h1 className="text-white text-center  font-medium text-5xl">
            Wheels and Tires
          </h1>
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Paint Protection
          </h1>
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Ceramic Coating
          </h1>
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Mobile Detailing
          </h1>
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer   border-black bg-[url(./rims.jpeg)] bg-cover flex flex-col justify-center items-center ">
          <h1 className="text-white text-center  font-medium text-5xl">
            Headlight Restoration
          </h1>{" "}
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./matte.webp)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Engine Bay Cleaning
          </h1>
        </div>
        <div className=" hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-[1px] border-black bg-[url(./rim.jpeg)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Interior/Exterior Detail
          </h1>
        </div>
        <div className="border-[1px]  hover:shadow-inner hover:inset-0  hover:opacity-90 transition ease-in-out cursor-pointer  border-black bg-[url(./porsche.jpeg)] bg-cover flex flex-col justify-center items-center ">
          {" "}
          <h1 className="text-white text-center  font-medium text-5xl">
            Trim and Plastic Restoration
          </h1>
        </div>
      </div>
    </div>
  );
};
