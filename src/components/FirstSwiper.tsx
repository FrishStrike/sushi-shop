"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function FirstSwiper() {
  return (
    <>
      <Swiper
        // spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="first-swiper"
      >
        <SwiperSlide>
          <img src="/slider-img/slider1.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-img/slider2.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-img/slider3.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-img/slider4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-img/slider5.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slider-img/slider6.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
