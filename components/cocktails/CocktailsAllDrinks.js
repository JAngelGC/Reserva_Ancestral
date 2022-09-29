import CocktailsDrinkPrev from "./CocktailsDrinkPrev";
import classes from "./CocktailsAllDrinks.module.css";

const CocktailsAllDrinks = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Coctelería</h1>
      </header>
      <section className={classes["section-all-drinks"]}>
        {props.allDrinks.map((drink) => {
          return (
            <CocktailsDrinkPrev
              title={drink.title}
              imgPrev={drink.img}
              id={drink.id}
            />
          );
        })}
      </section>
    </>
  );
};
export default CocktailsAllDrinks;
