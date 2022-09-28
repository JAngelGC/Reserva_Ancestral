import DrinkHeader from "../../components/drink/DrinkHeader";

const bebida = {
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
};

const DrinkPage = () => {
  return (
    <DrinkHeader
      title={bebida.title}
      subtitle={bebida.subtitle}
      imgPrev={bebida.imgPrev}
    />
  );
};

export default DrinkPage;
