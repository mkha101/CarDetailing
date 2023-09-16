import { Button } from "./ui/button";

export const AboutUs = () => {
  return (
    <div className=" bg-black max-h-[80vh] overflow-hidden flex flex-col sm:flex-row justify-between items-center    text-white">
      <div className="flex flex-col sm:flex-row  bg-black   items-center justify-center">
        <div className="flex max-sm:relative       flex-col gap-4">
          <img
            className="opacity-30 block sm:hidden"
            src="/backdrop.webp"
            alt=""
          />

          <div className="flex max-sm:absolute py-10 px-7 sm:px-5 max-sm:mx-0  max-lg:mx-24 xl:mx-24 md:mx-10   flex-col gap-4">
            {" "}
            <h1 className="text-base uppercase font-semibold underline decoration-red-700 decoration-2 underline-offset-8">
              About Us
            </h1>
            <p className="text-3xl uppercase font-bold">
              Trusted for Over 10 Years
            </p>
            <p className="text-md mt-5 text-zinc-400 [word-spacing:3px] tracking-wide">
              Founded by a team of car aficionados, [Your Company Name] was born
              out of a shared love for cars and a desire to provide the best
              possible care for them. Our journey began in [Year Established]
              with a simple mission: to elevate the car detailing experience to
              a level of perfection that surpasses expectations.
            </p>
            <Button className="bg-transparent mt-10 tracking-widest font-bold text-xl hover:bg-transparent hover:border-red-700 transition duration-100 ease-in-out hover:text-red-700 border-[2px] rounded-full px-20 py-6 ">
              Learn More
            </Button>
          </div>
        </div>
        <div className="sm:mt-0   bg-white ">
          {" "}
          <img
            className="h-full w-full hidden sm:block object-cover"
            src="/aboutme.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
