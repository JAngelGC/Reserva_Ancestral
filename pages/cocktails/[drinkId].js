import DrinkHeader from "../../components/drink/DrinkHeader";
import DrinkIngredients from "../../components/drink/DrinkIngredients";

const bebida = {
  title: "Sorbete de Mango 333",
  subtitle: "Reserva Espadín Joven",
  imgPrev: "img_prueba.jpg",
  ingredients: [
    { ing: "Mango macerado", imgP: "mango.png" },
    { ing: "1 oz de jugo de limón", imgP: "mango.png" },
    { ing: "1 oz de jarabe de maracuyá", imgP: "mango.png" },
    { ing: "3/4 oz de licor de chiles", imgP: "mango.png" },
    { ing: "11/2 oz de Mezcal Reserva Espadín", imgP: "mango.png" },
  ],
  steps: [
    "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
    "Colocar todos los ingredientes en una licuadora hasta que se deshaga el mango.",
    "Escarchar la copa con chile piquín y decorar con un trozo de mango.",
  ],
};

// I will change bebida.title for props.title
const DrinkPage = () => {
  return (
    <>
      <DrinkHeader
        title={bebida.title}
        subtitle={bebida.subtitle}
        imgPrev={bebida.imgPrev}
      />
      <DrinkIngredients ingredients={bebida.ingredients} />
    </>
  );
};

export default DrinkPage;
