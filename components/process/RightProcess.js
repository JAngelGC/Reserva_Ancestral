import classes from "./RightProcess.module.css";
import Image from "next/image";

const RightProcess = (props) => {
  return (
    <section className={classes["section-process"]}>
      <div className={classes["container-text"]}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <picture>
        <Image
          src={`./static/images/process/${props.img}`}
          layout="fill"
          objectFit="cover"
          alt={props.altImg}
          //   priority={idx === 0 ? true : false}
        />
      </picture>
    </section>
  );
};

export default RightProcess;
