import classes from "./AgeConfirm.module.css";
import Button from "./Button";
import Image from "next/image";

import { useContext, useEffect, useState } from "react";
import SessionContext from "../../store/session-context";

const AgeConfirm = () => {
  const ctx = useContext(SessionContext);

  const [domLoaded, setdomLoaded] = useState(false);

  useEffect(() => {
    setdomLoaded(true);
  }, []);

  return (
    <div
      className={`${classes["section-age"]} ${
        domLoaded ? classes["active"] : ""
      }`}
    >
      <div className={classes["black-bg"]}>
        <picture>
          <Image
            src={`./static/images/logos/Reserva_Ancestral_Logo_03.png`}
            layout="fill"
            objectFit="contain"
            alt="Reserva Ancestral Logo 03"
            priority={true}
          />
        </picture>
        <div className={classes["container-text"]}>
          <h2>Bienvenido</h2>
          <p>¿Eres mayor de edad?</p>
        </div>
        <div className={classes["buttons"]}>
          <Button msg={"Sí"} color={"tobala"} onClickHandler={ctx.onLogin} />
          <Button msg={"No"} color={"tobala"} onClickHandler={ctx.onLogout} />
        </div>
      </div>
    </div>
  );
};

export default AgeConfirm;
