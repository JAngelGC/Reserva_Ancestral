import classes from "./DrinkHeader.module.css";

const DrinkHeader = (props) => {
  return (
    <header className={classes.header}>
      <section className={classes["section-title"]}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <hr />
      </section>
      <section className={classes["section-img"]}>
        <picture>
          <source
            srcSet={`/static/images/drinks/${props.imgPrev}_607.jpg`}
            media="(max-width:544px)"
          />
          <source
            srcSet={`/static/images/drinks/${props.imgPrev}_879.jpg`}
            media="(max-width:940px)"
          />
          <source
            srcSet={`/static/images/drinks/${props.imgPrev}_1400.jpg`}
            media="(max-width:1400px)"
          />
          <img
            src={`/static/images/drinks/${props.imgPrev}_1400.jpg`}
            alt={props.altDescription}
          />
        </picture>
      </section>
    </header>
  );
};

export default DrinkHeader;
