import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import FamilyAllBottles from "../../components/family/FamilyAllBottles";

const Family = (props) => {
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
