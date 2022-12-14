import Image from "next/image";
import classes from "./DrinkIngredients.module.css";

const DrinkIngredients = (props) => {
  return (
    <section className={classes["section-ingredients"]}>
      <h2>Ingredientes</h2>
      <div className={classes["container-ingredients"]}>
        {props.ingredients.map((ing) => {
          return (
            <div
              className={classes["container-ingredient"]}
              key={`${ing.ing} ${ing.imgP} ${Math.random()}`}
            >
              <picture>
                <Image
                  src={`/static/images/drinks/${ing.imgP}`}
                  alt={`Reserva Ancestral ${ing.ing}`}
                  className={classes["img-bottle"]}
                  layout="fill"
                  objectFit="contain"
                />
              </picture>
              <h3>{ing.ing}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DrinkIngredients;
