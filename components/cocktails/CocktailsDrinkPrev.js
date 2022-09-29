import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  // console.log(`./static/images/${props.imgPrev}`);
  console.log(props);

  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <img src={`./static/images/${props.imgPrev}`} alt="" />
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
