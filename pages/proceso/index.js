import Head from "next/head";
import AllProcess from "../../components/process/AllProcess";

const ProcessPage = () => {
  return (
    <>
      <Head>
        <title>Reserva Ancestral</title>
        <meta
          name="description"
          content="Respecto a la cosecha del mezcal, podemos describirlo como un líquido cristalino destilado de la planta de agave o maguey. Las plantas grandes y puntiagudas se cosechan y sus hojas espinosas se cortan con un machete para revelar el corazón de la planta, que se conoce como piña. Los corazones son transportados al palenque, la rústica destilería donde se elabora el mezcal."
        />
        <meta
          name="keywords"
          content="Mezcal, Reserva Ancestral, Familia Reserva, Proceso, Cultivo, Cosecha, Materia Prima, Piñas, Cocimiento, Molienda, Fementación, Destilación, Envasado"
        />
        <meta name="author" content="Jose Angel Gonzalez Carrera" />
        <link
          rel="icon"
          href="/static/images/logos/Reserva_Ancestral_Icon.png"
          type="image/x-icon"
        />
      </Head>
      <AllProcess />
    </>
  );
};

export default ProcessPage;
