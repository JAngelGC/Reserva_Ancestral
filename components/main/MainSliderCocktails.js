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
              <li>1 oz de jugo de limón</li>
              <li>1 oz de jarabe de maracuyá</li>
              <li>3/4 oz de licor de chiles</li>
              <li>11/2oz de Mezcal Reserva</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
              <li>
                Escarchar la copa con chile piquín y decorar con un trozo de
                mango.
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
              <li>1 oz de jugo de limón</li>
              <li>1 oz de jarabe de maracuyá</li>
              <li>3/4 oz de licor de chiles</li>
              <li>11/2oz de Mezcal Reserva</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
              <li>
                Escarchar la copa con chile piquín y decorar con un trozo de
                mango.
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
              <li>1 oz de jugo de limón</li>
              <li>1 oz de jarabe de maracuyá</li>
              <li>3/4 oz de licor de chiles</li>
              <li>11/2oz de Mezcal Reserva</li>
            </ul>
            <ol>
              <h4>Preparación</h4>
              <li>
                Poner todos los ingredientes en una licuadora hasta que se
                deshaga el mango y se vuelva tipo frappe con el hielo.
              </li>
              <li>
                Escarchar la copa con chile piquín y decorar con un trozo de
                mango.
              </li>
            </ol>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSliderCocktails;
