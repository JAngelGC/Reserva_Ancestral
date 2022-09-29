import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

// import SlideBottle from "./SlideBottle";
import classes from "./MainSliderBottles.module.css";

const MainSliderBottles = (props) => {
  return (
    <section className={classes["section-slider--bottles"]}>
      <h2>Nuestra familia reserva</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={400}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          type: "bullets",
          bulletActiveClass: classes["bullet--active"],
          bulletClass: `swiper-pagination-bullet ${classes.mybullet}`,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className={`${classes["my-swiper"]}`}
      >
        {props.allBottles.map((bottle) => {
          return (
            <SwiperSlide
              key={bottle.id}
              className={`${classes["my-swiper--slide"]} ${
                classes[bottle.color]
              }`}
            >
              {({ isActive }) => (
                <div
                  className={`${classes["container-slide"]} ${
                    isActive ? classes.active : classes.noactive
                  }`}
                >
                  <img
                    src={`./static/images/${bottle.nameImage}`}
                    alt=""
                    className={classes["img-bottle"]}
                  />
                  <h3>{bottle.title}</h3>
                  <h4>{bottle.subtitle}</h4>
                  <button className={classes[bottle.color]}>Descúbrelo</button>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MainSliderBottles;
