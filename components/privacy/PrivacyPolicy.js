import classes from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <section className={classes["section-privacy"]}>
      <h2>Aviso de privacidad</h2>
      <p>
        Los datos personales en posesión de Reserva Ancestral son tratados con
        base en los principios de licitud, consentimiento, información, calidad,
        finalidad, lealtad, proporcionalidad y responsabilidad en términos de la
        Ley, así como los deberes de confidencialidad y seguridad. Se mantendrá
        la confidencialidad de sus datos personales estableciendo y manteniendo
        medidas de seguridad administrativas, técnicas y físicas, para evitar su
        daño, pérdida, alteración, destrucción, uso, acceso o divulgación
        indebida.
      </p>
      <p>
        Reserva Ancestral, con domicilio en Oaxaca de Juárez, Oaxaca, C.P. 68040
        utilizará sus datos personales recabados para sus compras en línea y
        activación de membresías. Para mayor información acerca del tratamiento
        y de los derechos que puede hacer valer, usted puede acceder al aviso de
        privacidad integral a través de nuestra política de privacidad.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
