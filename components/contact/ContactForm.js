import useInput from "../../hooks/use-input";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
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
    <main className={classes["section-contact"]}>
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
            Submit
          </button>
        </div>
      </form>
      <div className={classes["container-img"]}>
        <img src="/static/images/logo_ra_6.png" alt="" />
      </div>
    </main>
  );
};

export default ContactForm;
