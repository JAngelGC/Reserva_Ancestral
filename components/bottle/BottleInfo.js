import { useState } from "react";
import classes from "./BottleInfo.module.css";
import Button from "../layout/Button";

const BottleInfo = (props) => {
  const [optionSelected, setoptionSelected] = useState("features");

  const changeOptionToFeaturesHandler = () => {
    setoptionSelected("tastings");
  };

  const changeOptionToTastingHandler = () => {
    setoptionSelected("features");
  };

  const colorVal = props.color;

  // console.log(props);

  return (
    <section className={`${props.className} ${classes["section-info"]}`}>
      <h2
        className={`${classes["title"]} ${
          classes[colorVal]
        } ${`${colorVal}-color`}`}
      >
        {props.title}
      </h2>
      <p className={classes["description"]}>{props.description}</p>
      <div className={classes["container-options"]}>
        <div className={classes["options"]}>
          <p
            onClick={changeOptionToTastingHandler}
            className={
              optionSelected === "features"
                ? `${classes["option-active"]} ${`${colorVal}-color`}`
                : ""
            }
          >
            Características
          </p>
          <p
            onClick={changeOptionToFeaturesHandler}
            className={
              optionSelected === "tastings"
                ? `${classes["option-active"]} ${`${colorVal}-color`}`
                : ""
            }
          >
            Catas
          </p>
        </div>
        {optionSelected === "features" && (
          <ul className={classes["info"]}>
            <li>
              <span>Categoria:</span>
              {props.features.category}
            </li>
            <li>
              <span>Clase:</span>
              {props.features.class}
            </li>
            <li>
              <span>Agave:</span>
              {props.features.agave}
            </li>
            <li>
              <span>Grados de alcohol:</span>
              {props.features.alcohol}°
            </li>
            <li>
              <span>Copa ideal:</span>
              {props.features.glass}
            </li>
            <li>
              <span>Temperatura de consumo:</span>
              {props.features.temperature} °C
            </li>
            <li>
              <span>Producido y envasado:</span>
              {props.features.made}
            </li>
          </ul>
        )}
        {optionSelected === "tastings" && (
          <ul className={classes["info"]}>
            <li>
              <span>Vista:</span>
              {props.tastings.sight}
            </li>
            <li>
              <span>Nariz:</span>
              {props.tastings.smell}
            </li>
            <li>
              <span>Boca:</span>
              {props.tastings.taste}
            </li>
          </ul>
        )}
      </div>
      <Button color={colorVal} msg={"Comprar en línea"} />
    </section>
  );
};

export default BottleInfo;
