import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";
import { faqData } from "./faqData";

const Faq = () => {
  return (
    <div id="faq" className="w-full max-w-[720px] mx-auto px-8 xl:px-0 mb-20">
      <h2 className="text-big font-morabba text-center mb-12">سوالات متداول</h2>
      <div className="flex flex-col gap-2">
        {faqData?.map((item) => (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.desc}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
