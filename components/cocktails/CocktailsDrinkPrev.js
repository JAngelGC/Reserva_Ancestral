import Link from "next/link";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  console.log(props.imgPrev);

  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <img
            sizes="(min-width: 1366px) 916px,
            (min-width: 1536px) 1030px,
            100vw"
            srcSet={`
          ${`./static/images/drinks/${props.imgPrev}_607.jpg`} 607w,
          ${`./static/images/drinks/${props.imgPrev}_879.jpg`} 879w,
          ${`./static/images/drinks/${props.imgPrev}_1400.jpg`} 1400w`}
            alt=""
          />
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
