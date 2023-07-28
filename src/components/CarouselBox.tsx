"use client";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const CarouselBox = () => {
  return (
    <div className="carousel-content">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-content">Have a Good Day!</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">Nice to Meet you)</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">Enjoy your meal :)</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselBox;
