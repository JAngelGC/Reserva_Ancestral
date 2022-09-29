import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import CocktailsAllDrinks from "../../components/cocktails/CocktailsAllDrinks";

const CocktailsPage = (props) => {
  return <CocktailsAllDrinks allDrinks={props.allDrinks} />;
};

export async function getStaticProps() {
  // fetch data from an API
  const colRef = collection(db, "drinks");
  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();

    const newData = {
      id: doc.id,
      imgPrev: data.imgPrev,
      title: data.title,
    };

    return newData;
  });

  return {
    props: {
      allDrinks: docs,
    },
    revalidate: 3600 * 24,
  };
}

export default CocktailsPage;
