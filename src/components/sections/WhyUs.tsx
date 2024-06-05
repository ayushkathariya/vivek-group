import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="px-2 md:px-6 lg:px-12 xl:px-16 py-10 bg-primary border lg:py-20 flex flex-col gap-8 lg:gap-11">
      <div>
        <h1 className="font-bold text-2xl text-white text-center">Why Us</h1>
      </div>
      <div className=" flex justify-between gap-9 flex-wrap">
        <div className="flex flex-col items-center justify-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-01.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Grow Efficiently</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-02.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Grow Business</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-03.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Increase Profit</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-04.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Healthy</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-05.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Grow with Tech</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-[calc(50%-40px)] lg:w-[calc(18%-80px)]">
          <div>
            <Image src={`/icon-05.png`} alt="icon" width={80} height={80} />
          </div>
          <p className="text-white font-semibold">Environment </p>
        </div>
      </div>
      <div className="self-center">
        <Button variant={"secondary"}>Learn More</Button>
      </div>
    </section>
  );
}
