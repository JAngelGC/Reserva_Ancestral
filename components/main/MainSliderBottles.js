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

const MainSliderBottles = () => {
  return (
    <section className={classes["section-slider--bottles"]}>
      <h2>Nuestra familia reserva</h2>
      {/* <SlideBottle /> */}

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
        <SwiperSlide
          className={`${classes["my-swiper--slide"]} ${classes.arroqueno}`}
        >
          {({ isActive }) => (
            <div
              className={`${classes["container-slide"]} ${
                isActive ? classes.active : classes.noactive
              }`}
            >
              <img
                src="./static/images/botella_1.png"
                alt=""
                className={classes["img-bottle"]}
              />
              <h3>Reserva Arroqueño</h3>
              <h4>Arroqueño</h4>
              <button className={classes.arroqueno}>Descúbrelo</button>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide
          className={`${classes["my-swiper--slide"]} ${classes.espadin}`}
        >
          {({ isActive }) => (
            <div
              className={`${classes["container-slide"]} ${
                isActive ? classes.active : classes.noactive
              }`}
            >
              <img
                src="./static/images/botella_2.png"
                alt=""
                className={classes["img-bottle"]}
              />
              <h3>Reserva Espadín</h3>
              <h4>Espadín</h4>
              <button className={classes.espadin}>Descúbrelo</button>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide
          className={`${classes["my-swiper--slide"]} ${classes.cuixe}`}
        >
          {({ isActive }) => (
            <div
              className={`${classes["container-slide"]} ${
                isActive ? classes.active : classes.noactive
              }`}
            >
              <img
                src="./static/images/botella_3.png"
                alt=""
                className={classes["img-bottle"]}
              />
              <h3>Reserva Cuixe</h3>
              <h4>Cuixe</h4>
              <button className={classes.cuixe}>Descúbrelo</button>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide
          className={`${classes["my-swiper--slide"]} ${classes.tobala}`}
        >
          {({ isActive }) => (
            <div
              className={`${classes["container-slide"]} ${
                isActive ? classes.active : classes.noactive
              }`}
            >
              <img
                src="./static/images/botella_4.png"
                alt=""
                className={classes["img-bottle"]}
              />
              <h3>Reserva Tobalá</h3>
              <h4>Tobalá</h4>
              <button className={classes.tobala}>Descúbrelo</button>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSliderBottles;
