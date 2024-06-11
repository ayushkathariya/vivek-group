import Link from "next/link";
import { PiGreaterThan } from "react-icons/pi";
import ReviewSection from "@/components/sections/ReviewSection";

export default function Page() {
  return (
    <main>
      <div className="bg-[url('/img-07.jpg')] bg-center h-36 bg-blend-multiply bg-gray-500 relative">
        <ol className="list-reset py-4 pl-4 rounded flex text-bg-white absolute top-16 px-2 md:px-6 lg:px-12 xl:px-16">
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
              href="/about-us"
              className="no-underline text-indigo hover:underline duration-200"
            >
              About
            </Link>
          </li>
        </ol>
      </div>
      <div className="px-2 md:px-6 lg:px-12 xl:px-16 flex flex-col mt-8 gap-3 lg:flex-row">
        <div className="py-4 lg:basis-[60%]">
          <h2 className="text-center font-semibold text-3xl">About Us</h2>
          <p className="mt-4 text-justify font-medium text-[0.95rem]">
            Vivek's Group, located in Dhangadhi, Nepal, exemplifies excellence
            in poultry farming, specializing in cock and egg selling. The
            strategic location offers fertile land, a favorable climate, and a
            steady water supply, ensuring a healthy environment for raising
            poultry. The farm's state-of-the-art facilities provide spacious,
            clean, and well-ventilated coops, adhering to high animal welfare
            standards. The birds are fed a balanced diet of high-quality grains
            and nutrients, free from harmful additives and antibiotics,
            resulting in safe and nutritious products for consumers.
          </p>
          <p className="mt-2 text-justify font-medium text-[0.95rem]">
            Committed to sustainability and community engagement, Vivek's Group
            uses modern technology and sustainable practices to enhance
            operations. Automated feeding systems, climate control technologies,
            and advanced monitoring tools help maintain optimal living
            conditions for the poultry while reducing the environmental
            footprint. By providing employment opportunities, supporting local
            businesses, and hosting educational workshops on sustainable farming
            and animal welfare, Vivek's Group plays a vital role in the local
            economy.
          </p>
        </div>
        <div className="lg:basis-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3322971856232!2d80.5806791740978!3d28.709613680578823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa13e527e18e84e77%3A0xb449ff1e9cf625a0!2sBG%20Infotechs!5e0!3m2!1sen!2snp!4v1717929323623!5m2!1sen!2snp"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
      <div className="mt-5">
        <ReviewSection />
      </div>
    </main>
  );
}
