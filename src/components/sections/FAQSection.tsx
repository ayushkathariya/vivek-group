import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQSection() {
  return (
    <section
      className="px-2 md:px-6 lg:px-12 xl:px-16 py-10 lg:py-14"
      id="faqs"
    >
      <div>
        <h2 className="text-center font-bold text-3xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-10 lg:mt-14 flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center lg:gap-6">
        <div className="lg:w-[45%] hidden lg:block">
          <Image
            src={`/img-06.jpg`}
            alt="image"
            width={250}
            height={30}
            className="w-[100%] lg:h-[17rem] bg-cover"
          />
        </div>
        <div className="lg:w-[45%]">
          <Accordion type="single" collapsible className="w-full bg-cover">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                What is Vivek's Group ?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                accusamus obcaecati. Quas itaque aut fuga.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                What services does Vivek's Group Offer ?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
                officiis vero exercitationem molestias suscipit voluptatibus?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                What breeds of chickens do you have ?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                perspiciatis cupiditate, ipsum harum quia commodi.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:no-underline">
                How can I purchase your products ?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur sit vitae, dolor atque libero esse!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-9"></div>
      </div>
    </section>
  );
}
