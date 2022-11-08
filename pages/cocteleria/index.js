import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import CocktailsAllDrinks from "../../components/cocktails/CocktailsAllDrinks";

const CocktailsPage = (props) => {
  const keyWordsCocktails = props.allDrinks
    .map((drink) => drink.altDescription)
    .join(", ");

  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content={`Reserva Ancestral cuenta con una amplia gama de coctelería para todos los gustos. Dentro de su coctelería se encuentran: ${keyWordsCocktails}`}
        />
        <meta
          name="keywords"
          content={`Mezcal, Reserva Ancestral, Familia Reserva, ${keyWordsCocktails}, Coctelería, Bebidas`}
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <CocktailsAllDrinks allDrinks={props.allDrinks} />;
    </>
  );
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
      imgPrevPhone: data.imgPrevPhone,
      altDescription: data.altDescription,
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
