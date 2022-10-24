import Head from "next/head";

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
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content="Reserva Ancestral nace de la admiración, talento y honra a todos aquellos maestros artesanos que desde hace cientos de años, conservan la tradición de crear una bebida única a través del aprendizaje y dominio de un proceso milenario: el destilado ancestral."
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <MainHeader />
      <MainHistory />
      <MainSliderBottles allBottles={props.allBottles} />
      <MainSpecialCollections />
      <MainSliderCocktails allCocktails={props.allCocktails} />
    </>
  );
};

export async function getStaticProps() {
  // fetch bottles preview from firestore
  const colRefBottles = collection(db, "bottles");
  const snapshotsBottles = await getDocs(colRefBottles);

  const docsBottles = snapshotsBottles.docs.map((doc) => {
    const data = doc.data();

    const newData = {
      id: doc.id,
      color: data.color,
      nameImage: data.nameImage,
      subtitle: data.subtitle,
      title: data.title,
    };

    return newData;
  });

  // fetch cocktails previews from firestore
  const colRefCocktails = collection(db, "drinks");
  const snapshotsCocktails = await getDocs(colRefCocktails);

  const docsCocktails = snapshotsCocktails.docs.map((doc) => {
    const data = doc.data();
    data.id = doc.id;

    return data;
  });

  return {
    props: {
      allBottles: docsBottles,
      allCocktails: docsCocktails,
    },
    revalidate: 3600 * 24,
  };
}

export default HomePage;
