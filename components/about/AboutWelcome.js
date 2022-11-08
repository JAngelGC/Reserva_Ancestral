import classes from "./AboutWelcome.module.css";

const AboutWelcome = () => {
  return (
    <section className={classes["section--welcome"]}>
      <h3>Bienvenido a la familia,</h3>
      <h3>atentamente</h3>

      <img
        src="./static/images/logos/Reserva_Ancestral_Firma.png"
        alt="Reserva Ancestral Familia Reserva"
      />
    </section>
  );
};

export default AboutWelcome;
