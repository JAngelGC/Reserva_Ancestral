import classes from "./AgeConfirm.module.css";
import Button from "./Button";
import Image from "next/image";

import { useContext } from "react";
import SessionContext from "../../store/session-context";

const AgeConfirm = () => {
  const ctx = useContext(SessionContext);

  return (
    <section className={classes["section-age"]}>
      <div className={classes["black-bg"]}>
        <picture>
          <Image
            src={`./static/images/logos/Reserva_Ancestral_Logo_03.png`}
            layout="fill"
            objectFit="contain"
            alt=""
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
    </section>
  );
};

export default AgeConfirm;
