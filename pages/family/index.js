import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/config";

import FamilyAllBottles from "../../components/family/FamilyAllBottles";

const Family = (props) => {
  return <FamilyAllBottles allBottles={props.allBottles} />;
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

export default Family;
