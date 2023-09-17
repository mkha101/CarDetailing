import { Button } from "./ui/button";

export const AboutUs = () => {
  return (
    <div className="max-h-[80vh] sm:max-h-[70vh] overflow-hidden max-sm:items-center flex flex-col max-sm:relative gap-4 sm:flex-row  bg-black     text-white">
      <img className="opacity-50 block sm:hidden" src="/backdrop.webp" alt="" />
      <div className="max-sm:absolute py-10 px-7 sm:w-1/2 flex items-center justify-center sm:px-20   gap-4">
        <div className="flex  flex-col gap-4 w-96 max-sm:px-7 justify-center">
          {" "}
          <h1 className="text-base 2xl:text-xl uppercase font-semibold underline decoration-red-700 decoration-2 underline-offset-8">
            About Us
          </h1>
          <p className="text-3xl 2xl:text-5xl uppercase font-bold">
            Trusted for Over 10 Years
          </p>
          <p className="text-md mt-5 2xl:text-xl text-zinc-400 [word-spacing:3px] tracking-wide">
            Founded by a team of car aficionados, [Your Company Name] was born
            out of a shared love for cars and a desire to provide the best
            possible care for them. Our journey began in [Year Established] with
            a simple mission: to elevate the car detailing experience to a level
            of perfection that surpasses expectations.
          </p>
          <Button className="bg-transparent mt-10  tracking-widest font-bold text-xl hover:bg-transparent hover:border-red-700 transition duration-100 ease-in-out hover:text-red-700 border-[2px] rounded-full  px-20 py-6 ">
            Learn More
          </Button>
        </div>
      </div>
      <div className="sm:mt-0 max-w-5xl h-auto  bg-white ">
        {" "}
        <img
          className=" h-full w-full hidden sm:block object-cover"
          src="/aboutme.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
