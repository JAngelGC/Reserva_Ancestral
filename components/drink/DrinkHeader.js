import classes from "./DrinkHeader.module.css";

const DrinkHeader = (props) => {
  console.log(props);
  console.log(`./static/images/${props.imgPrev}`);
  //   ./static/images/img_prueba.jpg
  //   ./static/images/img_prueba.jpg

  return (
    <header className={classes.header}>
      <section className={classes["section-title"]}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <hr />
      </section>
      <section className={classes["section-img"]}>
        <img src={`/static/images/${props.imgPrev}`} alt="" />
      </section>
    </header>
  );
};

export default DrinkHeader;
