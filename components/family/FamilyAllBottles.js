import FamillyBottlePrev from "./FamillyBottlePrev";
import classes from "./FamilyAllBottles.module.css";

const FamilyAllBottles = (props) => {
  return (
    <>
      {props.allBottles.map((bottle) => {
        return (
          <FamillyBottlePrev
            key={bottle.title}
            title={bottle.title}
            subtitle={bottle.subtitle}
            grades={bottle.grades}
            nameImage={bottle.nameImage}
            color={bottle.color}
            altImg={bottle.altDescription}
          />
        );
      })}
    </>
  );
};

export default FamilyAllBottles;
