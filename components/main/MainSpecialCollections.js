import classes from "./MainSpecialCollections.module.css";

const MainSpecialCollections = () => {
  return (
    <section className={classes["section-special-collections"]}>
      <div className={classes.left}>
        <h2>Colecciones Especiales de la Familia Reserva</h2>
        <button>Ver más</button>
      </div>
      <div className={classes.right}>
        <img src="./static/images/Colecciones_especiales.png" alt="" />
      </div>
    </section>
  );
};

export default MainSpecialCollections;
