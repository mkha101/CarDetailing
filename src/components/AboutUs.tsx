import { Button } from "./ui/button";
import RevealOnScroll from "./RevealOnScroll";
import { ReviewCard } from "./ReviewCard";
import { Testimonials } from "./Testimonials";
import { BiggerScreenReviews } from "./BiggerScreenReviews";

export const AboutUs = () => {
  return (
    <div className=" max-sm:bg-black   sm:bg-fixed bg-cover sm:bg-[url(/aboutusbigbd.webp)]  max-sm:border-[4px] max-sm:py-1 max-sm:px-2 border-black py-20  sm:max-h-[70vh] overflow-hidden max-sm:items-center flex flex-col max-sm:relative gap-4        text-white">
      <img
        className="opacity-30 block max-sm:rounded-xl sm:hidden"
        src="/backdrop.webp"
        alt=""
      />
      <div className="max-sm:absolute  py-10 px-7  flex items-center justify-center sm:px-20   gap-20">
        <div className="flex  flex-col gap-4 sm:w-[35rem] max-sm:px-2 justify-center">
          {" "}
          <RevealOnScroll>
            <h1 className="text-base 2xl:text-xl uppercase font-medium underline decoration-blue-700 decoration-2 underline-offset-8">
              About Us
            </h1>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="text-3xl 2xl:text-5xl uppercase font-semibold">
              Trusted for Over 10 Years
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="text-md mt-5 2xl:text-xl font-normal text-zinc-400 [word-spacing:3px] tracking-wide">
              Founded by a team of car aficionados, [Your Company Name] was born
              out of a shared love for cars and a desire to provide the best
              possible care for them. Our journey began in [Year Established]
              with a simple mission: to elevate the car detailing experience to
              a level of perfection that surpasses expectations.
            </p>
          </RevealOnScroll>
          <Button className="bg-transparent mt-10  uppercase tracking-widest font-semibold text-xl hover:bg-transparent hover:border-blue-700 transition duration-100 ease-in-out hover:text-blue-700 border-[2px] rounded-full  px-20 py-6 ">
            Learn More
          </Button>
        </div>
        <div className="sm:block hidden">
          {" "}
          <BiggerScreenReviews />
        </div>{" "}
      </div>
    </div>
  );
};
