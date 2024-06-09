import FAQSection from "@/components/sections/FAQSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import ReviewSection from "@/components/sections/ReviewSection";
import ServiceSection from "@/components/sections/ServiceSection";
import WhyUs from "@/components/sections/WhyUs";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <WhyUs />
      <FAQSection />
      <GallerySection />
      <ReviewSection />
    </main>
  );
}
