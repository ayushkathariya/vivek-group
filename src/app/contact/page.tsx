import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdOutlineEmail } from "react-icons/md";
import { PiGreaterThan } from "react-icons/pi";

export default function Page() {
  return (
    <div className="mt-16 px-2 md:px-6 lg:px-12 xl:px-16 py-10 lg:py-12">
      <div className="bg-[url('/img-07.jpg')] bg-center h-36 bg-blend-multiply bg-gray-500 relative">
        <ol className="list-reset py-4 pl-4 rounded flex text-bg-white absolute top-10">
          <li className="px-2">
            <Link
              href="/"
              className="no-underline text-indigo hover:underline duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <PiGreaterThan className="mt-1" />
          </li>
          <li className="px-2">
            <Link
              href="/contact"
              className="no-underline text-indigo hover:underline duration-200"
            >
              Contact
            </Link>
          </li>
        </ol>
      </div>
      <main className=" flex flex-col mt-20 gap-8 md:gap-0 lg:flex-row justify-between lg:items-center">
        <div className="basis-1/2">
          <h1 className="font-bold text-3xl text-center lg:text-start">
            Get In Touch
          </h1>
          <p className="mt-4 font-medium text-lg text-center lg:text-start">
            Contact Us If You Have More Questions.
          </p>
          <div className="mt-10 flex flex-col gap-10 items-center lg:items-start">
            <div className="flex items-center gap-8">
              <div>
                <FaPhoneAlt className="text-3xl cursor-pointer" />
              </div>
              <div>
                <p className="font-bold text-2xl">Phone</p>
                <p className="font-medium text-md">9806725981</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <MdOutlineEmail className="text-3xl cursor-pointer" />
              </div>
              <div>
                <p className="font-bold text-2xl">Email</p>
                <p className="font-medium text-md">xyz@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <MdLocationPin className="text-3xl cursor-pointer" />
              </div>
              <div>
                <p className="font-bold text-2xl">Location</p>
                <p className="font-medium text-md">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3322971856232!2d80.5806791740978!3d28.709613680578823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa13e527e18e84e77%3A0xb449ff1e9cf625a0!2sBG%20Infotechs!5e0!3m2!1sen!2snp!4v1717929323623!5m2!1sen!2snp"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <div className="mt-4 py-16">
        <h4 className="font-bold text-3xl text-center">Have any Questions</h4>
        <div className="flex items-center justify-center lg:justify-between lg:items-center lg:gap-5 mt-8">
          <div className="lg:basis-[20%]">
            <div>
              <div className="mt-4">
                <p className="font-semibold text-xl mb-4 lg:ml-16">
                  Feel Free To Ask
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:basis-1/2">
            <Image
              src={`/img-07.jpg`}
              alt="image"
              width={400}
              height={200}
              className="w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
