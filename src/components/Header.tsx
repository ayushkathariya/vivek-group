import Link from "next/link";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-bg-black text-bg-white px-2 md:px-6 lg:px-12 xl:px-16">
      <div className="hidden lg:block"></div>
      <div className="flex items-center gap-[0.3rem] sm:gap-2 md:gap-4 lg:ml-48">
        <Link href="#company" className="text-[0.43rem] sm:text-[0.65rem]">
          Company
        </Link>
        <div className="text-xl mb-3">.</div>
        <Link href="#why-us" className="text-[0.43rem] sm:text-[0.65rem]">
          Why Us
        </Link>
        <div className="text-xl mb-3">.</div>
        <Link href="#career" className="text-[0.43rem] sm:text-[0.65rem]">
          Careers
        </Link>
        <div className="text-xl mb-3">.</div>
        <Link href="#trade-us" className="text-[0.43rem] sm:text-[0.65rem]">
          Trade Us
        </Link>
        <div className="text-xl mb-3">.</div>
        <Link href="#faqs" className="text-[0.43rem] sm:text-[0.65rem]">
          FAQS
        </Link>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <Link href={"#facebook"}>
          <FaFacebook className="text-blue-700 hover:text-blue-800 delay-150" />
        </Link>
        <Link href={"#youtube"}>
          <FaYoutube className="text-red-700 hover:text-red-800 delay-150" />
        </Link>
        <Link href={"#whatsapp"}>
          <FaWhatsapp className="text-green-500 hover:text-green-700 delay-150" />
        </Link>
        <Image src={`/nepal-logo.png`} alt="logo" width={15} height={15} />
      </div>
    </header>
  );
}
