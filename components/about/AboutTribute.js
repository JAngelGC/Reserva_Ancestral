import classes from "./AboutTribute.module.css";

const AboutTribute = () => {
  return (
    <section className={classes["section-tribute"]}>
      <div className={classes["container-bg"]}>
        <h2>Homenaje</h2>
        <p>Para todos los que han marcado un antes y un después</p>
      </div>
    </section>
  );
};

export default AboutTribute;
