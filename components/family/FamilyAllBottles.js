import FamillyBottlePrev from "./FamillyBottlePrev";
import classes from "./FamilyAllBottles.module.css";

const ALL_BOTTLES = [
  {
    title: "Reserva Arroqueño",
    subtitle: "Agave Arroqueño",
    grades: "Grados de alcohol: 45°",
    nameImage: "botella_1.png",
    color: "arroqueno",
  },
  {
    title: "Reserva Cuixe",
    subtitle: "Agave Cuixe",
    grades: "Grados de alcohol: 45°",
    nameImage: "botella_3.png",
    color: "cuixe",
  },
  {
    title: "Reserva Espadín",
    subtitle: "Agave Espadín",
    grades: "Grados de alcohol: 45°",
    nameImage: "botella_2.png",
    color: "espadin",
  },
  {
    title: "Reserva Tobalá",
    subtitle: "Agave Tobalá",
    grades: "Grados de alcohol: 45°",
    nameImage: "botella_4.png",
    color: "tobala",
  },
];

const FamilyAllBottles = () => {
  return (
    <>
      {ALL_BOTTLES.map((bottle) => {
        return (
          <FamillyBottlePrev
            key={bottle.title}
            title={bottle.title}
            subtitle={bottle.subtitle}
            grades={bottle.grades}
            nameImage={bottle.nameImage}
            color={bottle.color}
          />
        );
      })}
    </>
  );
};

export default FamilyAllBottles;
