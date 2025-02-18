import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Container from "./Container";

export const FrequentlyAskedQ = () => {
  return (
    <div className=" bg-zinc-900   ">
      <div className="sm:max-w-[1800px] mx-auto xl:px-20 md:px-10 sm:px-2 ">
        <div className="px-7   p-12">
          <h1 className=" text-sm  py-3  font-semibold uppercase      text-white underline decoration-[#FE3C3B] decoration-2 underline-offset-8">
            FAQ
          </h1>
          <h1 className=" text-2xl  pb-3  font-semibold uppercase  leading-loose    text-white underline decoration-[#FE3C3B] decoration-2 underline-offset-8">
            Frequently Asked <br /> Questions
          </h1>
          <Accordion
            className="flex flex-col text-white gap-4"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-normal hover:no-underline">
                What is car detailing, and how is it different from car washing?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-normal hover:no-underline">
                How often should I get my car detailed?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-normal hover:no-underline">
                How long does a typical car detailing session take?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-normal hover:no-underline">
                Do you offer mobile detailing services, or do I need to come to
                your location?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>{" "}
    </div>
  );
};
