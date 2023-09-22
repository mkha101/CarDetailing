import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import "@/styles/globals.css";

import {
  ArrowDown,
  LucideArrowDownCircle,
  LucideArrowUpCircle,
  MoveDownIcon,
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export const ContactForm = () => {
  return (
    <div className="w-full sm:px-44 min-h-screen bg-black  pt-10 flex flex-col   gap-10 max-w-screen ">
      <div className="hidden sm:flex sm:items-center uppercase px-3 ml-9 text-white justify-center gap-3 flex-col ">
        <h1 className="text-lg sm:text-xl font-semibold underline decoration-red-700 decoration-2 underline-offset-8">
          Get a Quote
        </h1>
        <p className="text-2xl sm:text-4xl sm:text-center font-bold">
          If you like what you see, Contact Us!
        </p>
        <div className="flex flex-col mt-6 mr-9 justify-center items-center">
          <LucideArrowDownCircle size={32} />
        </div>
      </div>{" "}
      <div className="flex flex-row ">
        {" "}
        <div className="w-1/2  bg-black hidden sm:block "></div>
        <div className="flex sm:w-1/2 w-full  text-white flex-col items-center gap-10 ">
          {" "}
          <div className="flex sm:hidden sm:items-center uppercase px-3 ml-4 justify-center gap-3 flex-col ">
            <h1 className="text-lg sm:text-xl font-semibold underline decoration-blue-700 decoration-2 underline-offset-8">
              Get a Quote
            </h1>
            <p className="text-2xl sm:text-4xl sm:text-center font-bold">
              If you like what you see, Contact Us!
            </p>
            <div className="flex flex-col mt-6 mr-9 justify-center items-center">
              <LucideArrowDownCircle size={32} />
            </div>
          </div>{" "}
          <RevealOnScroll>
            <form>
              <div className="flex w-96 flex-col text-black gap-5 border bg-zinc-100 shadow-xl sm:w-full  mb-20  py-5 rounded-3xl  ">
                <h1 className="px-5 text-xl font-semibold">
                  Step 1: Your Contact Details
                </h1>
                <div className="flex   sm:flex-row flex-col  gap-6 px-5">
                  {" "}
                  <div className="flex-col  flex gap-1">
                    {" "}
                    <Label className="required-field text-md" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      required
                      className="h-8 sm:w-56 border-none"
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                    />{" "}
                  </div>
                  <div className="flex flex-col  gap-1   ">
                    {" "}
                    <Label className="required-field  text-md" htmlFor="num">
                      Mobile Number
                    </Label>
                    <Input
                      required
                      className="border-none sm:w-56 h-8"
                      type="number"
                      id="num"
                      placeholder="Enter your number"
                    />
                  </div>
                </div>
                <div className="flex flex-col  gap-1 px-5 ">
                  {" "}
                  <Label className="required-field  text-md" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    required
                    className="border-none sm:w-full h-8"
                    type="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className=" border-[1px] w-full"></div>{" "}
                <h1 className="px-5 text-xl font-semibold">
                  Step 2: Your Vehicle Information
                </h1>
                <div className="flex   sm:flex-row flex-col  gap-6 px-5">
                  <div className="flex-col  flex gap-1">
                    {" "}
                    <Label className="required-field  text-md" htmlFor="vmake">
                      Vehicle Make
                    </Label>
                    <Input
                      required
                      className="h-8 sm:w-56 border-none"
                      type="text"
                      id="vmake"
                      placeholder="e.g. Mercedes"
                    />
                  </div>
                  <div className="flex-col  flex gap-1">
                    {" "}
                    <Label className="required-field  text-md" htmlFor="year">
                      Year
                    </Label>
                    <Input
                      required
                      className="border-none sm:w-56  h-8"
                      type="number"
                      id="year"
                      placeholder="e.g. 2023"
                    />
                  </div>{" "}
                </div>
                <div className="flex flex-col px-5 gap-1  ">
                  {" "}
                  <Label className="required-field  text-md" htmlFor="vmodel">
                    Vehicle Model
                  </Label>
                  <Input
                    required
                    className="border-none h-8"
                    type="text"
                    id="vmodel"
                    placeholder="e.g. C300"
                  />
                </div>
                <div className=" border-[1px] w-full"></div>
                <h1 className="px-5 required-field  text-xl font-semibold">
                  Step 3: Add Services
                </h1>
                <RadioGroup
                  className="px-5 sm:w-96 flex flex-row flex-wrap gap-3"
                  defaultValue="option-one"
                >
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="interior" id="interior" />
                    <Label htmlFor="interior">Interior Detail</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem value="exterior" id="exterior" />
                    <Label htmlFor="exterior">Exterior Detail</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="paint-protection"
                      id="paint-protection"
                    />
                    <Label htmlFor="paint-protection">Paint Protection</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="plastic-restoration"
                      id="plastic-restoration"
                    />
                    <Label htmlFor="plastic-restoration">
                      Plastic Restoration
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="ceramic-coating"
                      id="ceramic-coating"
                    />
                    <Label htmlFor="ceramic-coating">Ceramic Coating</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="glass-restoration"
                      id="glass-restoration"
                    />
                    <Label htmlFor="glass-restoration">Glass Restoration</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="mobile-detailing"
                      id="mobile-detailing"
                    />
                    <Label htmlFor="mobile-detailing">Mobile Detailing</Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <RadioGroupItem
                      value="headlight-restoration"
                      id="headlight-restoration"
                    />
                    <Label htmlFor="headlight-restoration">
                      Headlight Restoration
                    </Label>
                  </div>
                </RadioGroup>
                <div className="flex flex-col px-5 gap-1  ">
                  {" "}
                  <Label className="text-md" htmlFor="pkg">
                    Packages
                  </Label>
                  <Textarea
                    required
                    className="border-none h-8"
                    id="pkg"
                    placeholder="Packages"
                  />
                </div>
                <div className="flex flex-col px-5 gap-1  ">
                  {" "}
                  <Label className="text-md" htmlFor="details">
                    Any other details
                  </Label>
                  <Textarea
                    required
                    className="border-none "
                    id="details"
                    placeholder="Details"
                  />
                </div>
                <div className="flex items-center justify-center">
                  {" "}
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white tracking-wide font-bold text-xl  transition  duration-100 ease-in-out  w-full mx-6 rounded-full  "
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};
