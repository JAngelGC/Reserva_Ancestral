import classes from "./FamillyBottlePrev.module.css";

const FamillyBottlePrev = (props) => {
  console.log(props.color);
  return (
    <section className={`${classes["bottle-prev"]}`}>
      <div className={classes["container-text"]}>
        <h2 className={classes[props.color]}>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <h4>{props.grades}</h4>
        <button className={classes[props.color]}>Descúbrelo</button>
      </div>
      <div className={classes["container-img"]}>
        <img src={`./static/images/${props.nameImage}`} alt="" />
      </div>
    </section>
  );
};

export default FamillyBottlePrev;
