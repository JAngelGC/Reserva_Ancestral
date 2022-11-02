import Link from "next/link";
import Button from "../layout/Button";
import classes from "./FamillyBottlePrev.module.css";

const FamillyBottlePrev = (props) => {
  return (
    <section className={`${classes["bottle-prev"]}`}>
      <div className={classes["container-text"]}>
        <h2 className={classes[props.color]}>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <h4>{props.grades}</h4>
        <Link href={`/familia/${props.color}`}>
          <a>
            <Button color={props.color} msg={"Descúbrelo"} />
          </a>
        </Link>
      </div>
      <div className={classes["container-img"]}>
        <picture>
          <source
            srcSet={`./static/images/${props.nameImage}_607.png`}
            media="(max-width:544px)"
          />
          <source
            srcSet={`./static/images/${props.nameImage}_879.png`}
            media="(max-width:940px)"
          />
          <source
            srcSet={`./static/images/${props.nameImage}_1400.png`}
            media="(max-width:1400px)"
          />
          <img
            src={`./static/images/${props.nameImage}_1400.png`}
            alt="Gabrielle Perfume"
          />
        </picture>
      </div>
    </section>
  );
};

export default FamillyBottlePrev;
