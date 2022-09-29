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
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMsg,
    isValid: enteredMsgIsValid,
    hasError: msgInputHasError,
    valueChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: resetMsgInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredMsgIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMsg);

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
    ? `${classes["form-control"]} ${classes["invalid"]}`
    : `${classes["form-control"]}`;

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
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className={classes["error-text"]}>Error </p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>Error </p>
          )}
        </div>
        <div className={msgInputClasses}>
          <label htmlFor="msg">Message</label>
          <textarea
            type="text"
            id="msg"
            onChange={msgChangeHandler}
            onBlur={msgBlurHandler}
            value={enteredMsg}
          />
          {msgInputHasError && <p className={classes["error-text"]}>Error </p>}
        </div>
        <div className={classes["form-actions"]}>
          <button className={btnClass} disabled={!formIsValid}>
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
