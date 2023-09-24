import React from "react";
import RevealOnScroll from "./RevealOnScroll";

export const InstaBeholdFeed = () => {
  return (
    <div className=" px-7 py-10 sm:flex justify-center  bg-black">
      {" "}
      <div className="p-6  sm:w-[40rem]  sm:h-[32rem] bg-zinc-900 rounded-lg">
        {" "}
        <h1 className=" text-xl hidden sm:block  pb-3 sm:text-center font-semibold uppercase  leading-loose    text-white underline decoration-blue-700 decoration-2 underline-offset-8">
          Instagram Feed
        </h1>{" "}
        <h1 className=" text-xl block sm:hidden pb-3 sm:text-center font-semibold uppercase  leading-loose    text-white underline decoration-blue-700 decoration-2 underline-offset-8">
          Instagram <br /> Feed
        </h1>{" "}
        <figure className="pt-6" data-behold-id="GcWc7IDefG6DggI53Zqt"></figure>
      </div>
    </div>
  );
};
