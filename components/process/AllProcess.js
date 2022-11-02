import classes from "./AllProcess.module.css";
import LargeProcess from "./LargeProcess";
import LeftProcess from "./LeftProcess";
import RightProcess from "./RightProcess";

// Reserva_Ancestral_Cultivo.jpg

const infoProcess = [
  {
    title: "Cultivo y cosecha",
    text: `Se inicia el proceso con el cultivo del maguey. La siembra tiene lugar en los terrenos más diversos, y su cultivo se encuentra dentro de lo que hoy se conoce como agricultura orgánica, ya que no se utilizan productos artificiales en ella. El agave tarda entre 8 y 10 años para estar “en su punto”.`,
    img: "Reserva_Ancestral_Cultivo.jpg",
  },
  {
    title: "Selección de la materia prima más adecuada",
    text: `Por generaciones los agaves mezcaleros se han ido seleccionando a partir de plantas silvestres y se han ido mejorando. El cultivador tiene que verificar su buen estado para que lo corten.`,
    img: "Reserva_Ancestral_Materia.jpg",
  },
  {
    title: "Corte de las piñas",
    text: `Posteriormente se cortan las pencas y raíces hasta dejar el centro del maguey al descubierto, a esta forma del maguey se le conoce comúnmente como “piña”.`,
    img: "Reserva_Ancestral_Pinas.jpg",
  },
  {
    title: "Cocimiento",
    text: `Después viene el cocimiento de las piñas. Antes de meterlas al horno de piso, las piñas se pican con golpes de hacha para que se facilite su cocción. El horno puede ser de dos tipos y varía en función de su uso. Generalmente los vemos revestidos de piedra refractaria se localizan en los lugares donde se produce mezcal en grandes cantidades, se encuentran principalmente en los municipios de Tlacolula, Yautepec y Ejutla. `,
    img: "Reserva_Ancestral_Cocimiento.jpeg",
  },
  {
    title: "Molienda",
    text: `Se realiza generalmente en un molino egipcio, que consiste en un pozo de cemento con un poste central y una rueda de piedra que gira por la tracción de una bestia de carga que controla una persona.`,
    img: "Reserva_Ancestral_Molienda.jpg",
  },
  {
    title: "Fermentación",
    text: `Se transportan los mostos a tinas de madera de roble o encino que pueden tener capacidad hasta de dos mil litros. El proceso de fermentación tiene dos elementos fundamentales: el agua y la temperatura. `,
    img: "Reserva_Ancestral_Fermentacion.jpg",
  },
  {
    title: "Destilación",
    text: `Al finalizar el proceso de la fermentación, los mostos cocidos llamados “tepache” se pasan a los alambiques para llevar a cabo la destilación. Ésta se realiza con el bagazo y con equipos hechos de cobre, ollas de barro, carrizo o quiote; según la región, las costumbres o la capacidad productiva.`,
    img: "Reserva_Ancestral_Destilacion.jpeg",
  },
  {
    title: "Envasado",
    text: `Es la última fase del proceso, para ello los mezcaleros estandarizan el producto mediante diversos métodos como la homogeneización y estabilización del mezcal. Primero está el ajuste del grado alcohólico, que según la NOM del mezcal debe estar entre 36 y 55% alcohol sobre volumen. `,
    img: "Reserva_Ancestral_Envasado.jpg",
  },
];

const AllProcess = () => {
  return (
    <>
      <h1 className={classes["title-section"]}>Proceso</h1>
      <LargeProcess
        title={infoProcess[0].title}
        text={infoProcess[0].text}
        img={infoProcess[0].img}
      />
      <LeftProcess
        title={infoProcess[1].title}
        text={infoProcess[1].text}
        img={infoProcess[1].img}
      />
      <RightProcess
        title={infoProcess[2].title}
        text={infoProcess[2].text}
        img={infoProcess[2].img}
      />
      <LargeProcess
        title={infoProcess[3].title}
        text={infoProcess[3].text}
        img={infoProcess[3].img}
      />
      <LeftProcess
        title={infoProcess[4].title}
        text={infoProcess[4].text}
        img={infoProcess[4].img}
      />
      <RightProcess
        title={infoProcess[5].title}
        text={infoProcess[5].text}
        img={infoProcess[5].img}
      />
      <LeftProcess
        title={infoProcess[6].title}
        text={infoProcess[6].text}
        img={infoProcess[6].img}
      />
      <LargeProcess
        title={infoProcess[7].title}
        text={infoProcess[7].text}
        img={infoProcess[7].img}
      />
    </>
  );
};

export default AllProcess;
