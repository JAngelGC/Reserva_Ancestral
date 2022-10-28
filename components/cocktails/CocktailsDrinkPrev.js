import Image from "next/image";
import Link from "next/link";

import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  console.log(props.imgPrev);

  return (
    <Link href={`/cocktails/${props.id}`}>
      <section className={classes["container-drink"]}>
        <div className={classes["container-img"]}>
          <picture>
            <Image
              src={`./static/images/drinks/${props.imgPrev}_1400.jpg`}
              alt="Gabrielle Perfume"
              className={classes["img-bottle"]}
              layout="fill"
              objectFit="cover"
            />
          </picture>
        </div>
        <h2>{props.title}</h2>
      </section>
    </Link>
  );
};

export default CocktailsDrinkPrev;
