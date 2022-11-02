import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import db from "../../firebase/config";

import useInput from "../../hooks/use-input";
import classes from "./ContactForm.module.css";
import Button from "../layout/Button";

const ContactForm = () => {
  const [answerSent, setAnswerSent] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((name) => {
    const re = new RegExp(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/);
    return re.test(name);
  });

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((mail) => {
    const re = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return re.test(mail);
  });

  const {
    value: enteredMsg,
    isValid: enteredMsgIsValid,
    hasError: msgInputHasError,
    valueChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: resetMsgInput,
  } = useInput((msg) => {
    const maxWords = 175;
    const numWords = msg.trim().split(" ").length;

    if (
      numWords < maxWords &&
      numWords >= 1 &&
      msg.trim().split(" ")[0] !== ""
    ) {
      return true;
    } else {
      return false;
    }
  });

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredMsgIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // console.log(enteredName);
    // console.log(enteredEmail);
    // console.log(enteredMsg);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const now = new Date();
    const date = now.toLocaleDateString("es-Mx", options);

    // Add a new document with a generated id.
    const docRef = addDoc(collection(db, "contacto"), {
      nombre: enteredName,
      email: enteredEmail,
      mensaje: enteredMsg,
      fecha: date,
    })
      .then(() => {
        console.log("Succes");
        setAnswerSent(true);
      })
      .catch((err) => {
        console.log("Error");
      });

    resetNameInput();
    resetEmailInput();
    resetMsgInput();
  };

  const nameInputClasses = nameInputHasError
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

  const emailInputClasses = emailInputHasError
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

  const msgInputClasses = msgInputHasError
    ? `${classes["form-control"]} ${classes["form-control--msg"]} ${classes["invalid"]}`
    : `${classes["form-control"]} ${classes["form-control--msg"]}`;

  const btnClass = formIsValid
    ? `${classes["btn-valid"]}}`
    : `${classes["btn-invalid"]}`;

  return (
    <section className={classes["section-contact"]}>
      {answerSent === true && (
        <div className={classes["container-bg-thanks"]}>
          <div className={classes["container-thanks"]}>
            <h3>Muchas gracias</h3>
            <p>
              Hemos recibido tu respuesta y te responderemos lo más pronto
              posible.
            </p>
            <Button
              color={"tobala"}
              msg={"Cerrar"}
              onClickHandler={() => {
                setAnswerSent(false);
              }}
              // onClickHandler={() => console.log("CLICK")}
            />
          </div>
        </div>
      )}

      <form
        action=""
        onSubmit={formSubmissionHandler}
        className={classes["container-form"]}
      >
        <h2>Contacto</h2>
        <div className={nameInputClasses}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className={classes["error-text"]}>
              Por favor, ingresa un nombre válido{" "}
            </p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">Correo</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>
              Por favor, ingresa un correo válido{" "}
            </p>
          )}
        </div>
        <div className={msgInputClasses}>
          <label htmlFor="msg">Mensaje</label>
          <textarea
            type="text"
            id="msg"
            onChange={msgChangeHandler}
            onBlur={msgBlurHandler}
            value={enteredMsg}
          />
          {msgInputHasError && (
            <p className={classes["error-text"]}>
              Por favor, ingresa un mensaje válido{" "}
            </p>
          )}
        </div>

        <div className={classes["form-actions"]}>
          <button
            className={`${classes.btn} ${btnClass}`}
            disabled={!formIsValid}
          >
            Enviar
          </button>
        </div>
      </form>
      <div className={classes["container-img"]}>
        <picture>
          <source
            srcSet={`/static/images/logos/Reserva_Ancestral_Logo_06_879.png`}
            media="(max-width:544px)"
          />
          <source
            srcSet={`/static/images/logos/Reserva_Ancestral_Logo_06_1400.png`}
            media="(max-width:1400px)"
          />
          <img
            src={`/static/images/logos/Reserva_Ancestral_Logo_06_1400.png`}
            alt="Gabrielle Perfume"
          />
        </picture>
      </div>
    </section>
  );
};

export default ContactForm;
