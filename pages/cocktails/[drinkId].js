import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase/config";

import DrinkHeader from "../../components/drink/DrinkHeader";
import DrinkIngredients from "../../components/drink/DrinkIngredients";
import DrinkPreparation from "../../components/drink/DrinkPreparation";

const DrinkPage = (props) => {
  return (
    <>
      <DrinkHeader
        title={props.drink.title}
        subtitle={props.drink.subtitle}
        imgPrev={props.drink.imgPrev}
      />
      <DrinkIngredients ingredients={props.drink.ingredients} />
      <DrinkPreparation embedId="7RREsx9lnNI" steps={props.drink.steps} />
    </>
  );
};

export async function getStaticPaths() {
  // This should be dynamically

  return {
    fallback: false,
    paths: [
      {
        params: {
          drinkId: "mango",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const drinkId = context.params.drinkId;
  console.log("MY ID: ", drinkId);

  const docRef = doc(db, "drinks", drinkId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return {
    props: {
      drink: {
        title: data.title,
        subtitle: data.subtitle,
        imgPrev: data.imgPrev,
        ingredients: data.ingredients,
        steps: data.steps,
      },
    },
  };
}

export default DrinkPage;
