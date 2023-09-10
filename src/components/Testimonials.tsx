import React from "react";

export const Testimonials = () => {
  return (
    <div className=" bg-white flex  flex-col items-center    text-white">
      <div className="mt-10 w-96 flex flex-col gap-4">
        <h1 className="text-xl text-center text-red-700">Reviews</h1>
        <h1 className="text-3xl text-center text-black">
          Don't take it from us
          <br /> Listen to what our happy customers have to say
        </h1>
      </div>
      <div className="flex mt-20 gap-10 flex-col sm:flex-row">
        <div className="border bg-gray-300 shadow-xl w-72 h-72 rounded-xl">
          ds
        </div>
        <div className="border bg-gray-300 shadow-xl w-72 h-72 rounded-xl">
          ds
        </div>
        <div className="border bg-gray-300 shadow-xl w-72 h-72 rounded-xl">
          ds
        </div>
        <div className="border bg-gray-300 shadow-xl w-72 h-72 rounded-xl">
          ds
        </div>
      </div>
    </div>
  );
};
