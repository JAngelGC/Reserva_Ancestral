import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
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
      </nav>
    </header>
  );
};

export default MainNavigation;
