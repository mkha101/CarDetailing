import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./slidesData";
import React, { useEffect, useState } from "react";

export const ContentGraphic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };

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
      className="min-h-screen z-0 relative"
    >
      <div
        style={{
          display: "flex",
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="bg-center"
            key={slideIndex}
            style={{
              flex: `0 0 ${slideWidth}%`,
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
        ))}
      </div>
      <div className="absolute flex flex-col justify-center items-center inset-0 bg-black bg-opacity-60">
        <div className="mb-20 flex gap-20 flex-col justify-center items-center ">
          <h1 className="text-white text-3xl tracking-widest text-center font-extrabold sm:text-8xl">
            Fall in love with your car <br /> all over again
          </h1>
          <Button className="bg-transparent tracking-widest font-semibold text-xl hover:bg-transparent hover:border-red-700 transition duration-100 ease-in-out hover:text-red-700 border rounded-full px-20 py-6 ">
            Learn More
          </Button>
          <div className="flex flex-row absolute justify-centers bottom-12 gap-4">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`${
                  currentIndex === slideIndex ? "bg-gray-500" : "bg-white"
                } p-[5px] cursor-pointer hover:bg-gray-500 transition ease-in-out w-2 h-2 rounded-full`}
              ></div>
            ))}
          </div>
          <div className="absolute hidden sm:block cursor-pointer right-2 sm:right-14">
            <ChevronRight onClick={nextSlide} size={56} color="white" />
          </div>
          <div className="absolute  hidden sm:block cursor-pointer left-2 sm:left-14">
            <ChevronLeft onClick={prevSlide} size={56} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
