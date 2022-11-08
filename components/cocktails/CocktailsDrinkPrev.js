import Link from "next/link";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  console.log(props);

  return (
    <Link href={`/cocteleria/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <picture>
            <source
              srcSet={`./static/images/drinks/${props.imgPrev}_607.jpg`}
              media="(max-width:544px)"
            />
            <source
              srcSet={`./static/images/drinks/${props.imgPrev}_879.jpg`}
              media="(max-width:940px)"
            />
            <source
              srcSet={`./static/images/drinks/${props.imgPrev}_1400.jpg`}
              media="(max-width:1400px)"
            />
            <img
              src={`./static/images/drinks/${props.imgPrev}_1400.jpg`}
              alt={props.altDescription}
            />
          </picture>
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
