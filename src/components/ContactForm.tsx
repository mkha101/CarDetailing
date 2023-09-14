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

export const ContactForm = () => {
  return (
    <div className="w-full sm:px-44 min-h-screen bg-white mt-10 flex flex-col   gap-10 max-w-screen ">
      <div className="hidden sm:flex sm:items-center uppercase px-3 ml-9 justify-center gap-3 flex-col ">
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
        <div className="w-1/2  bg-white hidden sm:block "></div>
        <div className="flex sm:w-1/2 w-full  flex-col items-center gap-10 ">
          {" "}
          <div className="flex sm:hidden sm:items-center uppercase px-3 ml-6 justify-center gap-3 flex-col ">
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
          <form>
            <div className="flex w-96 flex-col  gap-5 border bg-zinc-100 shadow-xl sm:w-full  mb-20  py-5 rounded-3xl  ">
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
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
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
        </div>
      </div>
    </div>
  );
};
