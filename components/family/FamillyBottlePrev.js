import classes from "./FamillyBottlePrev.module.css";

const FamillyBottlePrev = (props) => {
  return (
    <section className={`${classes["bottle-prev"]} ${props.className}`}>
      <div className={classes["container-text"]}>
        <h2>Reserva Arroqueño</h2>
        <h3>Agave arroqueño</h3>
        <h4>Grados de alcohol: 45°</h4>
        <button>Descúbrelo</button>
      </div>
      <div className={classes["container-img"]}>
        <img src="./static/images/botella_1.png" alt="" />
      </div>
    </section>
  );
};

export default FamillyBottlePrev;
