import Head from "next/head";
import ContactForm from "../../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content="Reserva Ancestral nace de la admiración, talento y honra a todos aquellos maestros artesanos que desde hace cientos de años, conservan la tradición de crear una bebida única a través del aprendizaje y dominio de un proceso milenario: el destilado ancestral."
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
