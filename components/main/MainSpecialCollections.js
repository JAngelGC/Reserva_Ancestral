import classes from "./MainSpecialCollections.module.css";

const MainSpecialCollections = () => {
  return (
    <section className={classes["section-special-collections"]}>
      <div className={classes.left}>
        <h2>Colecciones Especiales de la Familia Reserva</h2>
        <button>Ver más</button>
      </div>
      <div className={classes.right}>
        {/* <img src="./static/images/photos/Colecciones_especiales.png" alt="" /> */}
        <picture>
          <source
            srcSet={`./static/images/photos/Colecciones_especiales_607.png`}
            media="(max-width:544px)"
          />
          <source
            srcSet={`./static/images/photos/Colecciones_especiales_879.png`}
            media="(max-width:940px)"
          />
          <source
            srcSet={`./static/images/photos/Colecciones_especiales_1400.png`}
            media="(max-width:1400px)"
          />
          <img
            src={`./static/images/photos/Colecciones_especiales_1400.png`}
            alt="Gabrielle Perfume"
          />
        </picture>
      </div>
    </section>
  );
};

export default MainSpecialCollections;
