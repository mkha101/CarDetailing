import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import RevealOnScroll from "./RevealOnScroll";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronRight,
  MoveRight,
  Scroll,
  ScrollIcon,
  ScrollTextIcon,
  Stars,
  ToggleRight,
  Star,
} from "lucide-react";

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftScrollButton, setShowLeftScrollButton] = useState(false);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setShowLeftScrollButton(container.scrollLeft > 20);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.addEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollTo = (scrollOffset: number) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.scrollLeft;
      const scrollTarget = scrollAmount + scrollOffset;
      const duration = 300;
      const startTime = performance.now();

      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollLeft = scrollAmount + progress * scrollOffset;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    }
  };
  return (
    <div className=" bg-black  max-sm:border-[4px] max-sm:pb-6 max-sm:px-2 border-black  relative overflow-hidden  flex flex-col items-center       sm:text-white text-white">
      <img
        className="opacity-30  w-full max-h-[30rem] max-sm:rounded-lg block sm:hidden"
        src="/aboutme.jpg"
        alt=""
      />

      <div className="max-sm:absolute">
        {" "}
        <div className="mt-10  sm:items-center  sm:px-3 px-8  sm:ml-0 flex flex-col sm:gap-6 gap-3">
          <h1 className="text-base sm:text-xl  font-medium uppercase     sm:text-white text-white underline decoration-blue-700 decoration-2 underline-offset-8">
            Reviews
          </h1>
          <p className="text-2xl sm:text-4xl  font-semibold sm:text-center  uppercase    sm:text-white text-white  ">
            What our customers think
          </p>
        </div>
        <RevealOnScroll>
          <div
            ref={containerRef}
            className="sm:grid grid-rows-1  max-sm:overflow-x-auto max-sm:max-w-[25rem]  grid-cols-1 flex pt-10 py-20 sm:items-center sm:justify-center flex-wrap px-6   gap-10 flex-col sm:flex-row"
          >
            {" "}
            <div className="flex gap-10 flex-row  ">
              {" "}
              <div className="border relative px-2 bg-zinc-700  flex justify-center items-start text-black flex-col    border-none  shadow-xl   min-w-[23rem] sm:w-[20rem] h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400  ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal text-blue-600">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 px-1">
                  {" "}
                  <p className="font-normal text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
              <div className="border relative px-2 bg-zinc-700  flex justify-center items-start text-black flex-col    border-none  shadow-xl   min-w-[23rem] sm:w-[20rem] h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400  ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal text-blue-600">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 px-1">
                  {" "}
                  <p className="font-normal text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
              <div className="border relative px-2 bg-zinc-700  flex justify-center items-start text-black flex-col    border-none  shadow-xl   min-w-[23rem] sm:w-[20rem] h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                  <Star className="text-blue-600 fill-blue-600 " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400  ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal text-blue-600">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 px-1">
                  {" "}
                  <p className="font-normal text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden left-32  absolute bottom-7   border-white   flex-row gap-2"></div>
          </div>
        </RevealOnScroll>
      </div>
      {showLeftScrollButton && (
        <div className="absolute bottom-52 min-[1800px]:hidden  left-0">
          {" "}
          <ArrowLeftCircle
            size={32}
            className="cursor-pointer bg-transparent hover:text-blue-600"
            onClick={() => scrollTo(-410)}
          />
        </div>
      )}
      <div className="absolute  bottom-52 min-[1800px]:hidden  right-0">
        {" "}
        <ArrowRightCircle
          size={32}
          className="cursor-pointer bg-transparent hover:text-blue-600"
          onClick={() => scrollTo(410)}
        />
      </div>
    </div>
  );
};
