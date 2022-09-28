import classes from "./CocktailsDrinkPrev.module.css";

const CocktailsDrinkPrev = (props) => {
  console.log(`./static/images/${props.imgPrev}`);
  return (
    <section className={classes["container-drink"]}>
      <div className={classes["container-img"]}>
        <img src={`./static/images/${props.imgPrev}`} alt="" />
      </div>
      <h2>{props.title}</h2>
    </section>
  );
};

export default CocktailsDrinkPrev;
