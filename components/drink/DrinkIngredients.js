import classes from "./DrinkIngredients.module.css";

const DrinkIngredients = (props) => {
  //   props.ingredients.map((ing) => {
  //     console.log(ing[0]);
  //   });
  return (
    <section className={classes["section-ingredients"]}>
      <h2>Ingredientes</h2>
      <div className={classes["container-ingredients"]}>
        {props.ingredients.map((ing) => {
          return (
            <div className={classes["container-ingredient"]}>
              <img src={`/static/images/${ing.imgP}`} alt="" />
              <h3>{ing.ing}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DrinkIngredients;
