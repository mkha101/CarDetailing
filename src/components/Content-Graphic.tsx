import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData"; // Import the slides array

import React, { useState } from "react";

export const ContentGraphic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  };

  return (
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className={`min-h-screen  z-0 bg-cover translate ease-in-out duration-300  relative  bg-no-repeat  flex flex-col justify-center items-center px-20 text-black`}
    >
      <div className="absolute flex   flex-col justify-center  items-center inset-0 bg-black bg-opacity-60">
        <div className="mb-20 flex  gap-20  flex-col justify-center  items-center ">
          {" "}
          <h1 className="text-white text-3xl    text-center font-extrabold sm:text-8xl">
            Fall in love with your car <br /> all over again
          </h1>
          <Button className="bg-transparent font-semibold text-lg hover:bg-transparent hover:border-gray-500 transition duration-500 ease-in-out hover:text-gray-500  border rounded-full px-20 py-6 ">
            Learn More
          </Button>
          <div className="flex flex-row absolute justify-center   bottom-12 gap-4">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={` ${
                  currentIndex === slideIndex ? "bg-gray-500" : "bg-white"
                } p-[5px]  cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full`}
              ></div>
            ))}
          </div>
          <div className="absolute cursor-pointer right-14 to">
            <ChevronRight onClick={nextSlide} size={56} color="white" />
          </div>
          <div className="absolute cursor-pointer left-14 ">
            <ChevronLeft onClick={prevSlide} size={56} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
