import classes from "./MainSliderCocktails.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MainSliderCocktails = (props) => {
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
        breakpoints={{
          700: {
            direction: "vertical",
          },
          1: {
            direction: "horizontal",
          },
        }}
        modules={[Pagination]}
        className={classes["my-swiper"]}
      >
        {props.allCocktails.map((cocktail) => {
          return (
            <SwiperSlide
              className={classes["my-swiper--slide"]}
              key={cocktail.id}
            >
              <div className={classes["container-img"]}>
                {/* <img
                  src={`./static/images/drinks/${cocktail.imgPrev}`}
                  alt=""
                /> */}
                <img
                  sizes="(min-width: 1366px) 916px,
                  (min-width: 1536px) 1030px,
                  100vw"
                  srcSet={`
                ${`/static/images/drinks/${cocktail.imgPrev}_607.jpg`} 607w,
                ${`/static/images/drinks/${cocktail.imgPrev}_879.jpg`} 879w,
                ${`/static/images/drinks/${cocktail.imgPrev}_1400.jpg`} 1400w`}
                  alt=""
                />
              </div>
              <div className={classes["container-text"]}>
                <h3>{cocktail.title}</h3>
                <h4>Ingredientes</h4>
                <ul>
                  {cocktail.ingredients.map((ing) => {
                    return <li key={Math.random()}>{ing.ing}</li>;
                  })}
                </ul>
                <h4>Preparación</h4>
                <ol>
                  {cocktail.steps.map((step) => {
                    return <li key={Math.random()}>{step}</li>;
                  })}
                </ol>
                <button>Ver más</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MainSliderCocktails;
