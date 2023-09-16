import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FrequentlyAskedQ = () => {
  return (
    <div className="px-7  p-12">
      <h1 className=" text-sm  py-3  font-semibold uppercase      text-black underline decoration-red-700 decoration-2 underline-offset-8">
        FAQ
      </h1>
      <h1 className=" text-2xl  pb-3  font-bold uppercase  leading-loose    text-black underline decoration-red-700 decoration-2 underline-offset-8">
        Frequently Asked <br /> Questions
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};