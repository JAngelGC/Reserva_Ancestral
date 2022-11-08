import Head from "next/head";
import PrivacyPolicy from "../../components/privacy/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content="El aviso de privacidad de Reserva Ancestral tiene como objeto informar al titular sobre los alcances y condiciones generales del tratamiento de sus datos personales, a fin de que esté en posibilidad de tomar decisiones informadas sobre el uso de su información personal y, en consecuencia, mantener el control y disposición sobre ella."
        />
        <meta
          name="keywords"
          content="Mezcal, Reserva Ancestral, Familia Reserva, Aviso de Privacidad, Política de Privacidad"
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <PrivacyPolicy />;
    </>
  );
};

export default PrivacyPolicyPage;
