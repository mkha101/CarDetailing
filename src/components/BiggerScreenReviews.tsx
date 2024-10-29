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
export const BiggerScreenReviews = () => {
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
    <div className="   max-sm:border-[4px] max-sm:pb-6 max-sm:px-2 border-black  relative overflow-hidden  flex flex-col items-center       sm:text-white text-white">
      <img
        className="opacity-50 w-full max-h-[30rem] max-sm:rounded-lg block sm:hidden"
        src="/aboutme.jpg"
        alt=""
      />
      <div className="max-sm:absolute">
        {" "}
        <RevealOnScroll>
          <div
            ref={containerRef}
            className="sm:grid grid-rows-1 transition ease-in-out  sm:overflow-x-scroll sm:max-w-[20rem] min-[1150px]:max-w-[20rem] min-[1200px]:max-w-[37rem] min-[1800px]:max-w-full  grid-cols-1 flex pt-10 py-20 sm:items-center sm:justify-center w-full flex-wrap px-6   gap-10 flex-col sm:flex-row"
          >
            {" "}
            <div className="flex gap-10 flex-row  ">
              {" "}
              <div className="border relative px-2 bg-zinc-700  flex justify-center items-start text-black flex-col    border-none  shadow-xl   min-w-[16rem] sm:w-[23rem] h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400  ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal text-[#FE3C3B]">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 sm:pt-5 px-1">
                  {" "}
                  <p className="font-normal text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
              <div className="border relative flex   justify-center items-center     text-black flex-col   px-2 border-none bg-zinc-700 shadow-xl   min-w-[16rem] sm:w-[23rem]  h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400 ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal text-[#FE3C3B]">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 px-1">
                  {" "}
                  <p className="font-normal sm:pt-5 text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
              <div className="border flex   justify-center items-center   text-black flex-col  relative px-2 border-none bg-zinc-700 shadow-xl  min-w-[16rem] sm:w-[23rem]  h-48 rounded-xl">
                <div className="absolute top-12 flex left-3">
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                  <Star className="text-[#FE3C3B] fill-[#FE3C3B] " fill="" />{" "}
                </div>
                <div className="absolute top-4 left-3 flex gap-2">
                  {" "}
                  <p className=" text-sm font-normal text-zinc-400  ">
                    {" "}
                    Posted by{" "}
                  </p>
                  <span className="text-sm font-normal  text-[#FE3C3B]">
                    Google
                  </span>
                </div>

                <div className="flex flex-col mt-6 px-1">
                  {" "}
                  <p className="font-normal sm:pt-5 text-white ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis illo iusto enim, ipsa,
                  </p>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden left-32  absolute bottom-7   border-white   flex-row gap-2">
              <ArrowLeftCircle />

              <p className="font-semibold text-base uppercase">Scrollable</p>
              <ArrowRightCircle />
            </div>
          </div>
        </RevealOnScroll>
      </div>
      {showLeftScrollButton && (
        <div className="absolute top-32 min-[1800px]:hidden  left-0">
          {" "}
          <ArrowLeftCircle
            size={32}
            className="cursor-pointer bg-transparent hover:text-[#FE3C3B]"
            onClick={() => scrollTo(-290)}
          />
        </div>
      )}
      <div className="absolute  top-32 min-[1800px]:hidden  right-0">
        {" "}
        <ArrowRightCircle
          size={32}
          className="cursor-pointer bg-transparent hover:text-[#FE3C3B]"
          onClick={() => scrollTo(290)}
        />
      </div>
    </div>
  );
};
