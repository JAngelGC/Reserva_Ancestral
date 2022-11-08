import Link from "next/link";
import Image from "next/image";
import classes from "./BottlePreview.module.css";

const BottlePreview = (props) => {
  const { bottle1, bottle2 } = props.moreBottles;

  return (
    <section className={classes["section-more-bottles"]}>
      <h2 className={classes["title"]}>Conoce más de la familia</h2>
      <div className={classes["container-bottles"]}>
        <Link href={`/familia/${bottle1.link}`}>
          <div className={classes["container-bottle"]}>
            <Image
              src={`./static/images/bottles/${bottle1.imgPath}.JPG`}
              layout="fill"
              objectFit="cover"
              alt={bottle1.altDescription}
            />
            <h3 className={classes["title-bottle"]}>{bottle1.name}</h3>
          </div>
        </Link>
        <Link href={`/familia/${bottle2.link}`}>
          <div className={classes["container-bottle"]}>
            <Image
              src={`./static/images/bottles/${bottle2.imgPath}.JPG`}
              layout="fill"
              objectFit="cover"
              alt={bottle2.altDescription}
            />
            <h3 className={classes["title-bottle"]}>{bottle2.name}</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BottlePreview;
