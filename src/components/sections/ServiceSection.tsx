import ServiceCard from "@/components/ServiceCard";

export default function ServiceSection() {
  return (
    <section className="px-2 md:px-6 lg:px-12 xl:px-16 py-10 lg:py-12 flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold text-bg-black text-4xl">Our Services</h2>
        <p className="text-center text-lg font-medium lg:px-48">
          We provide top-quality poultry and eggs, along with expert care and
          consultation to support your farming success.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
