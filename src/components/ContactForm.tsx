import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <div className="w-full mt-10 flex flex-col items-center  gap-10 max-w-screen ">
      <div className="flex justify-center items-center">
        {" "}
        <h1 className="text-3xl font-semibold underline decoration-red-700 decoration-2 underline-offset-8">
          Get a Quote
        </h1>
      </div>
      <form method="POST" action="">
        <div className="border rounded-b-none rounded-t-3xl py-5 bg-black w-80 "></div>
        <div className="flex flex-col  gap-5 border bg-zinc-100 shadow-xl  w-80  py-5 rounded-b-3xl  ">
          <h1 className="px-5 font-bold">Step 1: Your Contact Details</h1>
          <div className="flex flex-col gap-2 px-5">
            {" "}
            <Label className="w-20" htmlFor="name">
              Your Name:
            </Label>
            <Input
              required
              className="h-8 border-none"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2 px-5 ">
            {" "}
            <Label className="" htmlFor="email">
              Email:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col  gap-2 px-5  ">
            {" "}
            <Label className="w-28" htmlFor="num">
              Mobile Number:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="number"
              id="num"
              placeholder="Enter your number"
            />
          </div>
          <div className="border-black border-[1px] w-full"></div>

          <h1 className="px-5 font-bold">Step 2: Your Vehicle Information</h1>
          <div className="flex flex-col gap-2 px-5 ">
            {" "}
            <Label className="w-20" htmlFor="vmake">
              Vehicle Make:
            </Label>
            <Input
              required
              className="h-8 border-none"
              type="text"
              id="vmake"
              placeholder="e.g. Mercedes"
            />
          </div>

          <div className="flex flex-col gap-2 px-5 ">
            {" "}
            <Label className="" htmlFor="year">
              Year:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="number"
              id="year"
              placeholder="e.g. 2023"
            />
          </div>
          <div className="flex flex-col px-5 gap-2  ">
            {" "}
            <Label className="w-28" htmlFor="vmodel">
              Vehicle Model:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="text"
              id="vmodel"
              placeholder="e.g. C300"
            />
          </div>
          <div className="border-black border-[1px] w-full"></div>

          <h1 className="px-5 font-bold">Step 3: Add Services</h1>
          <div className="flex flex-col gap-2 px-5 ">
            {" "}
            <Label className="w-20" htmlFor="vmake">
              Vehicle Make:
            </Label>
            <Input
              required
              className="h-8 border-none"
              type="text"
              id="vmake"
              placeholder="e.g. Mercedes"
            />
          </div>

          <div className="flex flex-col gap-2 px-5 ">
            {" "}
            <Label className="" htmlFor="year">
              Year:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="number"
              id="year"
              placeholder="e.g. 2023"
            />
          </div>
          <div className="flex flex-col px-5 gap-2  ">
            {" "}
            <Label className="w-28" htmlFor="vmodel">
              Vehicle Model:
            </Label>
            <Input
              required
              className="border-none h-8"
              type="text"
              id="vmodel"
              placeholder="e.g. C300"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
