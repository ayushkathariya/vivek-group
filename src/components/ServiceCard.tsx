import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function ServiceCard() {
  return (
    <div className="bg-gray-300 hover:bg-gray-400 duration-200 ease-in flex cursor-pointer flex-col gap-5 px-6 py-4 rounded-lg md:w-[47%] lg:w-[31%] group">
      <div>
        <Image
          src={"/img-05.png"}
          alt="image"
          width={80}
          height={80}
          className="group-hover:animate-flip"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium text-2xl">Egg Production</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          blanditiis magnam accusamus aspernatur soluta?
        </p>
      </div>

      <div>
        <IoArrowForward className="bg-white p-2 rounded-full w-10 text-bg-black h-10 group-hover:bg-primary duration-200" />
      </div>
    </div>
  );
}
