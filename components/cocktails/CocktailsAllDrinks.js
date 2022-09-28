import CocktailsDrinkPrev from "./CocktailsDrinkPrev";
import classes from "./CocktailsAllDrinks.module.css";

const ALL_DRINKS = [
  {
    title: "Sorbete de Mango",
    subtitle: "Reserva Espadín Joven",
    imgPrev: "img_prueba.jpg",
    ingredientes: [
      "Mango macerado",
      "1 oz de jugo de limón",
      "1 oz de jarabe de maracuyá",
      "3/4 oz de licor de chiles",
      "11/2 oz de Mezcal Reserva Espadín",
    ],
    imgsIngredientes: [
      "mango.jpg",
      "limon.jpg",
      "maracuya.jpg",
      "chiles.jpg",
      "mezcal.jpg",
    ],
    pasos: [
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Escarchar la copa con chile piquín y decorar con un trozo de mango.",
    ],
  },
  {
    title: "Sorbete de Mango 222",
    subtitle: "Reserva Espadín Joven",
    imgPrev: "img_prueba2.jpg",
    ingredientes: [
      "Mango macerado",
      "1 oz de jugo de limón",
      "1 oz de jarabe de maracuyá",
      "3/4 oz de licor de chiles",
      "11/2 oz de Mezcal Reserva Espadín",
    ],
    imgsIngredientes: [
      "mango.jpg",
      "limon.jpg",
      "maracuya.jpg",
      "chiles.jpg",
      "mezcal.jpg",
    ],
    pasos: [
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Escarchar la copa con chile piquín y decorar con un trozo de mango.",
    ],
  },
  {
    title: "Sorbete de Mango 333",
    subtitle: "Reserva Espadín Joven",
    imgPrev: "img_prueba.jpg",
    ingredientes: [
      "Mango macerado",
      "1 oz de jugo de limón",
      "1 oz de jarabe de maracuyá",
      "3/4 oz de licor de chiles",
      "11/2 oz de Mezcal Reserva Espadín",
    ],
    imgsIngredientes: [
      "mango.jpg",
      "limon.jpg",
      "maracuya.jpg",
      "chiles.jpg",
      "mezcal.jpg",
    ],
    pasos: [
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Escarchar la copa con chile piquín y decorar con un trozo de mango.",
    ],
  },
  {
    title: "Sorbete de Mango 4444",
    subtitle: "Reserva Espadín Joven",
    imgPrev: "img_prueba.jpg",
    ingredientes: [
      "Mango macerado",
      "1 oz de jugo de limón",
      "1 oz de jarabe de maracuyá",
      "3/4 oz de licor de chiles",
      "11/2 oz de Mezcal Reserva Espadín",
    ],
    imgsIngredientes: [
      "mango.jpg",
      "limon.jpg",
      "maracuya.jpg",
      "chiles.jpg",
      "mezcal.jpg",
    ],
    pasos: [
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
      "Escarchar la copa con chile piquín y decorar con un trozo de mango.",
    ],
  },
];

const CocktailsAllDrinks = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Coctelería</h1>
      </header>
      <section className={classes["section-all-drinks"]}>
        {ALL_DRINKS.map((drink) => {
          return (
            <CocktailsDrinkPrev
              title={drink.title}
              subtitle={drink.subtitle}
              imgPrev={drink.imgPrev}
              ingredientes={drink.ingredientes}
              imgsIngredientes={drink.imgsIngredientes}
              pasos={drink.pasos}
            />
          );
        })}
      </section>
    </>
  );
};
export default CocktailsAllDrinks;
