import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/config";

import MainHeader from "../components/main/MainHeader";
import MainHistory from "../components/main/MainHistory";
import MainSliderBottles from "../components/main/MainSliderBottles";
import MainSpecialCollections from "../components/main/MainSpecialCollections";
import MainSliderCocktails from "../components/main/MainSliderCocktails";

const HomePage = (props) => {
  return (
    <>
      <MainHeader />
      <MainHistory />
      <MainSliderBottles allBottles={props.allBottles} />
      <MainSpecialCollections />
      <MainSliderCocktails />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const colRef = collection(db, "bottlesPreview");
  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;

    return data;
  });

  return {
    props: {
      allBottles: docs,
    },
    revalidate: 3600 * 24,
  };
}

export default HomePage;
