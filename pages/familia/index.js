import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import FamilyAllBottles from "../../components/family/FamilyAllBottles";

const Family = (props) => {
  const keyWordBottles = props.allBottles
    .map((bottle) => bottle.altDescription)
    .join(", ");

  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content={`Reserva Ancestral cuenta con distintas botellas para todos los públicos, sus botellas son: ${keyWordBottles}`}
        />
        <meta
          name="keywords"
          content={`Mezcal, Reserva Ancestral, Familia Reserva, ${keyWordBottles}`}
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <FamilyAllBottles allBottles={props.allBottles} />;
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const colRef = collection(db, "bottles");
  const snapshots = await getDocs(colRef);

  const docs = snapshots.docs.map((doc) => {
    const data = doc.data();

    const newData = {
      id: doc.id,
      color: data.color,
      nameImage: data.nameImage,
      subtitle: data.subtitle,
      title: data.title,
      grades: data.grades,
      altDescription: data.altDescription,
    };

    return newData;
  });

  return {
    props: {
      allBottles: docs,
    },
    revalidate: 3600 * 24,
  };
}

export default Family;
