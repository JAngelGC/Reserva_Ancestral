import { collection, getDocs, getDosc } from "firebase/firestore";
import db from "../../firebase/config";
import { useEffect } from "react";

import CocktailsAllDrinks from "../../components/cocktails/CocktailsAllDrinks";

const ALL_DRINKS = [
  {
    title: "Sorbete de Mango",
    subtitle: "Reserva Espadín Joven",
    imgPrev: "img_prueba.jpg",
    ingredientes: [
      "Mango macerado",
      "1 oz de jugo de limón",
      "1 oz de jarabe de maracuyá",
      "1 oz de jarabe de maracuyá",
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

const CocktailsPage = (props) => {
  // console.log(props);
  return <CocktailsAllDrinks allDrinks={props.allDrinks} />;
};

export async function getStaticProps() {
  // fetch data from an API

  const colRef = collection(db, "drinksPreview");

  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;

    return data;
  });
  console.log(docs);

  return {
    props: {
      allDrinks: docs,
    },
    revalidate: 3600 * 24,
  };
}

export default CocktailsPage;
