import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import BottleHeader from "../../components/bottle/BottleHeader";
import BottlePreview from "../../components/bottle/BottlePreview";

import Head from "next/head";

// title: data.title,
// description: data.description,
// features: data.features,
// tastings: data.tastings,
// color: data.color,
const BottlePage = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta name="description" content={`${props.bottle.description}`} />
        <meta
          name="keywords"
          content={`Mezcal, Reserva Ancestral, Familia Reserva, ${props.bottle.altDescription}, ${props.bottle.features.category}, ${props.bottle.features.made}, ${props.bottle.features.agave}`}
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <BottleHeader
        color={props.bottle.color}
        title={props.bottle.title}
        description={props.bottle.description}
        features={props.bottle.features}
        tastings={props.bottle.tastings}
        imgsBottles={props.bottle.imgsBottles}
      />
      <BottlePreview moreBottles={props.bottle.moreBottles} />
    </>
  );
};

export async function getStaticPaths() {
  // This generate all the paths for this dynamic route
  const colRef = collection(db, "bottles");
  const snapshots = await getDocs(colRef);

  const ids = snapshots.docs.map((doc) => {
    return doc.id;
  });

  return {
    fallback: false,
    paths: ids.map((id) => ({
      params: {
        bottleId: id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const bottleId = context.params.bottleId;

  const docRef = doc(db, "bottles", bottleId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return {
    props: {
      bottle: {
        title: data.title,
        description: data.description,
        features: data.features,
        tastings: data.tastings,
        color: data.color,
        imgsBottles: data.imgsBottles,
        moreBottles: data.moreBottles,
        altDescription: data.altDescription,
      },
    },
  };
}

export default BottlePage;
