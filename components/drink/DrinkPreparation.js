import React from "react";
import YouTube from "react-youtube";
import classes from "./DrinkPreparation.module.css";

const DrinkPreparation = (props) => {
  const opts = {
    height: "500",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className={classes["section-preparation"]}>
      <div className={classes["container-video"]}>
        {/* <iframe
          src={`https://www.youtube.com/embed/${props.embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        /> */}
        {/* <div className={classes["vid-cont"]}>
          <YouTube
            className={classes["video"]}
            videoId={props.embedId}
            opts={opts}
            onReady={YouTube.onReady}
          />
        </div> */}
      </div>

      <div className={classes["container-steps"]}>
        <h2>Cómo preparar</h2>
        {props.steps.map((step, i) => {
          return (
            <div className={classes.step} key={step}>
              <p className={classes["step-number"]}>{`Paso ${i + 1}`}</p>
              <p className={classes["step-text"]}>{step}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DrinkPreparation;
