import Head from "next/head";
import ContactForm from "../../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content="Reserva Ancestral puede resolver cualquier duda que un cliente pueda tener. Además, se puede proporcionar información sobre mayoreo para la compra de botellas y demás productos."
        />
        <meta
          name="keywords"
          content={`Mezcal, Reserva Ancestral, Familia Reserva, Contacto `}
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
