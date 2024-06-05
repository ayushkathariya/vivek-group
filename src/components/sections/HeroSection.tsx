"use client";

import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const data = [
    {
      id: 1,
      image: "/img-01.jpg",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "/img-02.jpg",
      buttonText: "Contact",
    },
    {
      id: 3,
      image: "/img-03.jpg",
      buttonText: "Solutions",
    },
    {
      id: 4,
      image: "/img-04.jpg",
      buttonText: "Discover",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="pb-8">
      <Slider {...settings}>
        {data?.map((item) => (
          <div
            key={item.id}
            className={` bg-no-repeat bg-[url('/img-03.jpg')] bg-cover bg-center h-[60vh] sm:h-[70vh] md:h-[82vh] w-full relative`}
          >
            <div className="absolute bottom-8 left-4 sm:bottom-7 sm:left-10 lg:left-16">
              <Button className="bg-primary hover:bg-primary">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
