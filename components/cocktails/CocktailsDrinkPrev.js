import Link from "next/link";
import useMediaQuery from "../../hooks/use-window-dimensions";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  const isBreakpoint = useMediaQuery(544);

  const selectedImage = isBreakpoint ? props.imgPrev : props.imgPrevPhone;

  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <img src={`./static/images/drinks/${selectedImage}`} alt="" />
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
