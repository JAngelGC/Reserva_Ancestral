import React, { useRef, useState, useEffect } from "react";
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
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section className={classes["section-slider--bottles"]}>
      <h2>Nuestra familia reserva</h2>

      {domLoaded && (
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
          breakpoints={{
            1344: {
              slidesPerView: 2,
              spaceBetween: 300,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 300,
            },
            940: {
              slidesPerView: 2,
              spaceBetween: 250,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            // when window width is >= 544px
            544: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            1: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
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
                    {/* <img
                      src={`./static/images/${bottle.nameImage}`}
                      alt=""
                      className={classes["img-bottle"]}
                    /> */}
                    <picture className={classes["img-bottle"]}>
                      <source
                        srcSet={`./static/images/${bottle.nameImage}_607.png`}
                        media="(max-width:544px)"
                      />
                      <source
                        srcSet={`./static/images/${bottle.nameImage}_879.png`}
                        media="(max-width:940px)"
                      />
                      <source
                        srcSet={`./static/images/${bottle.nameImage}_1400.png`}
                        media="(max-width:1400px)"
                      />
                      <img
                        src={`./static/images/${bottle.nameImage}_1400.png`}
                        alt="Gabrielle Perfume"
                      />
                    </picture>

                    <div className={classes["container-text"]}>
                      <h3>{bottle.title}</h3>
                      <h4>{bottle.subtitle}</h4>
                      <button className={classes[bottle.color]}>
                        Descúbrelo
                      </button>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default MainSliderBottles;
