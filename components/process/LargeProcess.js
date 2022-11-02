import classes from "./LargeProcess.module.css";
import Image from "next/image";

const LargeProcess = (props) => {
  return (
    <section className={classes["section-large"]}>
      <picture>
        <Image
          src={`./static/images/process/${props.img}`}
          layout="fill"
          objectFit="cover"
          alt=""
          //   priority={idx === 0 ? true : false}
        />
      </picture>
      <div className={classes["container-text"]}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default LargeProcess;
