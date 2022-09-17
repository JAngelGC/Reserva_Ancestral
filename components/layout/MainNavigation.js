import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="./static/images/logo_ra_1.png" alt="" />
      </div>
      <nav>
        <ul className={classes.pages}>
          <li>
            <p>Nosotros</p>
          </li>
          <li>
            <p>Proceso</p>
          </li>
          <li>
            <p>Familia reserva</p>
          </li>
          <li>
            <p>Coctelería</p>
          </li>
        </ul>
        <ul className={classes["social-networks"]}>
          <li>
            <img src="./static/icons/c_facebook.svg" alt="" />
          </li>
          <li>
            <img src="./static/icons/c_instagram.svg" alt="" />
          </li>
          <li>
            <img src="./static/icons/c_youtube.svg" alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
