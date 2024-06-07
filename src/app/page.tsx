import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyUs from "@/components/sections/WhyUs";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <WhyUs />
      <FAQSection />
    </main>
  );
}
