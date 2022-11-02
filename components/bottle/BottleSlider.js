import Image from "next/image";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation } from "swiper";

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
        {props.imgsBottles.numImgs.map((imgBottle, idx) => {
          return (
            <SwiperSlide className={classes["my-swiper-slide"]} key={imgBottle}>
              <Image
                src={`./static/images/bottles/${props.imgsBottles.pathImgs}_${imgBottle}.JPG`}
                layout="fill"
                objectFit="cover"
                alt=""
                priority={idx === 0 ? true : false}
                // placeholder={"blur"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default BottleSlider;
