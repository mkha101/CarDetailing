import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export const FrequentlyAskedQ = () => {
  return (
    <div className="px-7  p-12">
      <h1 className=" text-sm  py-3  font-semibold uppercase      text-black underline decoration-red-700 decoration-2 underline-offset-8">
        FAQ
      </h1>
      <h1 className=" text-2xl  pb-3  font-bold uppercase  leading-loose    text-black underline decoration-red-700 decoration-2 underline-offset-8">
        Frequently Asked <br /> Questions
      </h1>
      <Accordion className="flex flex-col gap-3" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What is car detailing, and how is it different from car washing?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            How often should I get my car detailed?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            How long does a typical car detailing session take?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Do you offer mobile detailing services, or do I need to come to your
            location?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
