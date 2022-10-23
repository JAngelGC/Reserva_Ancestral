import Link from "next/link";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <img src={`./static/images/drinks/${props.imgPrev}`} alt="" />
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
