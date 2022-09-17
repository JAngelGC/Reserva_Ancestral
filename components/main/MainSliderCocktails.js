import classes from "./MainSliderCocktails.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MainSliderCocktails = () => {
  return (
    <section className={classes["section-slider-cocktails"]}>
      <h2>Inspiración coctelera</h2>

      <Swiper
        direction={"vertical"}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          type: "bullets",
          bulletActiveClass: classes["bullet--active"],
          bulletClass: `swiper-pagination-bullet ${classes.mybullet}`,
          clickable: true,
        }}
        modules={[Pagination]}
        className={classes["my-swiper"]}
      >
        <SwiperSlide className={classes["my-swiper--slide"]}>
          <div className={classes["container-img"]}>
            <img src="./static/images/Mezcal_Ancestral_Botellas.png" alt="" />
          </div>
          <div className={classes["container-text"]}>
            <h3>Sorbo de mango</h3>
            <ul>
              <h4>Ingredientes</h4>
              <li>Mango macerado</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes["my-swiper--slide"]}>
          <div className={classes["container-img"]}>
            <img src="./static/images/Mezcal_Ancestral_Botellas.png" alt="" />
          </div>
          <div className={classes["container-text"]}>
            <h3>Sorbo de mango</h3>
            <ul>
              <h4>Ingredientes</h4>
              <li>Mango macerado</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
            </ol>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes["my-swiper--slide"]}>
          <div className={classes["container-img"]}>
            <img src="./static/images/Mezcal_Ancestral_Botellas.png" alt="" />
          </div>
          <div className={classes["container-text"]}>
            <h3>Sorbo de mango</h3>
            <ul>
              <h4>Ingredientes</h4>
              <li>Mango macerado</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
            </ol>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSliderCocktails;
