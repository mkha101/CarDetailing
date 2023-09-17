import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData";
import "@fontsource/poppins";

import React, { useEffect, useState } from "react";

export const ContentGraphic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideWidth = 100 / slides.length;
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
      className="sm:min-h-screen min-h-[82vh] z-0 relative"
    >
      <div
        style={{
          display: "flex",
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          transition: "transform 1.2s ease-in-out",
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            className="bg-center sm:min-h-screen min-h-[82vh]"
            key={slideIndex}
            style={{
              flex: `0 0 ${slideWidth}%`,
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>
      <div className="absolute flex flex-col justify-center items-center inset-0 bg-black bg-opacity-20">
        <div className=" flex  sm:gap-10 gap-16 mt-10 sm:px-4 px-3  flex-col justify-center items-center ">
          <div className="flex flex-col gap-1  items-center">
            {" "}
            <p className="text-xs drop-shadow-2xl uppercase  tracking-widest  text-white font-medium">
              Premium Auto Detailing
            </p>
            <h1 className="text-white drop-shadow-2xl leading-tight uppercase  tracking-wide text-3xl text-center font-medium xl:text-7xl lg:text-5xl">
              Fall in <span className="text-red-700">love</span> with your{" "}
              <br />
              car all over again
            </h1>
          </div>

          <Button className="bg-transparent drop-shadow-2xl uppercase    font-medium text-base hover:bg-transparent hover:border-red-700 transition duration-100 ease-in-out hover:text-red-700 border-[2px] rounded-full px-10 py-3  sm:px-20 sm:py-6 ">
            Learn More
          </Button>
          <div className="flex flex-row absolute justify-centers bottom-5 gap-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`${
                  currentIndex === slideIndex ? "bg-white" : "bg-gray-500"
                } p-[5px] cursor-pointer hover:bg-white transition ease-in-out w-1 h-1 rounded-full`}
              ></div>
            ))}
          </div>
          <div className="absolute hidden cursor-pointer right-2 sm:right-14">
            <ChevronRight onClick={nextSlide} size={56} color="white" />
          </div>
          <div className="absolute  hidden  cursor-pointer left-2 sm:left-14">
            <ChevronLeft onClick={prevSlide} size={56} color="white" />
          </div>
          <div className="absolute hidden cursor-pointer  bottom-9  right-6 sm:right-14">
            <ChevronRight onClick={nextSlide} size={36} color="white" />
          </div>
          <div className="absolute hidden cursor-pointer bottom-9  left-6 sm:left-14">
            <ChevronLeft onClick={prevSlide} size={36} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
