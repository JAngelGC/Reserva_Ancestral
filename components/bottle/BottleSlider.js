import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation } from "swiper";

//
//
import classes from "./BottleSlider.module.css";

const BottleSlider = (props) => {
  return (
    <section className={props.className}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className={classes["my-swiper"]}
      >
        <SwiperSlide className={classes["my-swiper-slide"]}>
          <Image
            src={`./static/images/bottles/Cuixe/Cuixe_1.jpg`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={classes["my-swiper-slide"]}>
          <Image
            src={`./static/images/bottles/Cuixe/Cuixe_2.jpg`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={classes["my-swiper-slide"]}>
          <Image
            src={`./static/images/bottles/Cuixe/Cuixe_3.jpg`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={classes["my-swiper-slide"]}>
          <Image
            src={`./static/images/bottles/Cuixe/Cuixe_4.jpg`}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BottleSlider;
