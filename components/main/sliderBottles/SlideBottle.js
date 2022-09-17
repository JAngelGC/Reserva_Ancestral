import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import classes from "./SlideBottle.module.css";

// const SlideBottle = () => {
//   return (
//     <div className={classes.slide}>
//       <img
//         src="./static/images/botella_1.png"
//         alt=""
//         className={classes["img-bottle"]}
//       />
//       <h3>Agave Emblema</h3>
//       <h4>Espadín</h4>
//     </div>
//   );
// };
const SlideBottle = () => {
  return (
    <SwiperSlide className={classes.slide}>
      <img
        src="./static/images/botella_1.png"
        alt=""
        className={classes["img-bottle"]}
      />
      <h3>Agave Emblema</h3>
      <h4>Espadín</h4>
    </SwiperSlide>
  );
};

export default SlideBottle;
