import Link from "next/link";
import useMediaQuery from "../../hooks/use-window-dimensions";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  // const isBreakpoint = useMediaQuery(544);

  // const selectedImage = isBreakpoint ? props.imgPrevPhone : props.imgPrev;
  // console.log(selectedImage);

  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <img
            src={`./static/images/drinks/${selectedImage}`}
            // sizes="(max-width: 1400px) 100vw, 1400px"
            srcset={`
          ${props.imgPrev},w_200.jpg 200w,
          ${props.imgPrev},w_607.jpg 607w,
          ${props.imgPrev},w_879.jpg 879w,
          ${props.imgPrev},w_1122.jpg 1122w,
          ${props.imgPrev},w_1347.jpg 1347w,
          ${props.imgPrev},w_1400.jpg 1400w`}
            alt=""
          />
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
