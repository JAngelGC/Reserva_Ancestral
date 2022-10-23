import { doc, getDoc, collection, getDocs } from "firebase/firestore";
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
      <DrinkPreparation
        embedId={props.drink.embedId}
        steps={props.drink.steps}
      />
    </>
  );
};

export async function getStaticPaths() {
  // This generate all the paths for this dynamic route
  const colRef = collection(db, "drinks");
  const snapshots = await getDocs(colRef);

  const ids = snapshots.docs.map((doc) => {
    return doc.id;
  });

  return {
    fallback: false,
    paths: ids.map((id) => ({
      params: {
        drinkId: id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const drinkId = context.params.drinkId;

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
        embedId: data.video_id,
      },
    },
  };
}

export default DrinkPage;
