import classes from "./DrinkHeader.module.css";

const DrinkHeader = (props) => {
  console.log(props.imgPrev);
  return (
    <header className={classes.header}>
      <section className={classes["section-title"]}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <hr />
      </section>
      <section className={classes["section-img"]}>
        {/* <img src={`/static/images/drinks/${props.imgPrev}.jpg`} alt="" /> */}
        {/* <img
          sizes="(min-width: 1366px) 916px,
            (min-width: 1536px) 1030px,
            100vw"
          srcSet={`
          ${`/static/images/drinks/${props.imgPrev}_607.jpg`} 607w,
          ${`/static/images/drinks/${props.imgPrev}_879.jpg`} 879w,
          ${`/static/images/drinks/${props.imgPrev}_1400.jpg`} 1400w`}
          alt=""
        /> */}
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
            alt="Gabrielle Perfume"
          />
        </picture>
      </section>
    </header>
  );
};

export default DrinkHeader;
