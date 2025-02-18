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
      className="sm:min-h-screen  min-h-[82vh] z-0 relative"
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
            className="bg-center shadow-inner  sm:min-h-screen min-h-[82vh]"
            key={slideIndex}
            style={{
              flex: `0 0 ${slideWidth}%`,
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
              boxShadow: "10px 80px 80px 20px black inset",
            }}
          ></div>
        ))}
      </div>
      <div className="absolute flex flex-col justify-center items-center inset-0 bg-black bg-opacity-20">
        <div className=" flex  sm:gap-10 gap-16 mt-12 sm:px-4 px-3  flex-col justify-center items-center ">
          <div className="flex flex-col gap-3  items-center">
            {" "}
            <div
              className="flex flex-row items-center
             gap-3"
            >
              {" "}
              <div className="border px-6 sm:px-12 border-1 opacity-80 border-[#FE3C3B]"></div>
              <p className="sm:text-lg text-sm drop-shadow-2xl uppercase  tracking-widest  text-white font-normal">
                Mirror <span className="text-[#FE3C3B]">Magic</span> Auto
                <span className="text-[#FE3C3B]"> Detailing</span>
              </p>
              <div className="border px-6 sm:px-12 border-1 opacity-80 border-[#FE3C3B]"></div>
            </div>
            <div className="flex flex-col items-center gap-6">
              {" "}
              <h1 className="text-white m drop-shadow-2xl leading-tight uppercase  tracking-tight text-3xl text-center font-semibold xl:text-7xl lg:text-5xl">
                Mobile Car Detailing <br />
                Services
              </h1>
              <p className="sm:text-lg  text-xs drop-shadow-2xl uppercase text-center  tracking-widest  text-white font-normal">
                Long Island's destination for <br /> expert car detailing
              </p>
              <Button className="bg-transparent drop-shadow-2xl uppercase tracking-widest text-white hover:bg-black  font-semibold text-base  border-[#FE3C3B] transition duration-100 ease-in-out hover:text-[#FE3C3B] border-[2px] rounded-full px-10 py-3 mt  sm:px-20 sm:py-6 ">
                Learn More
              </Button>
            </div>
          </div>

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
          <div className="absolute hidden sm:block cursor-pointer right-2 sm:right-14">
            <ChevronRight onClick={nextSlide} size={56} color="white" />
          </div>
          <div className="absolute  hidden  sm:block  cursor-pointer left-2 sm:left-14">
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
