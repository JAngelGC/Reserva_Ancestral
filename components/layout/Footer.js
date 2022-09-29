import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.up}>
        <Link href="/contact">
          <h3 className={classes.contacto}>Contacto</h3>
        </Link>
        <h3 className={classes.aviso}>Aviso de privacidad</h3>
      </div>
      <p className={classes.derechos}>
        © 2022 Reserva Ancestral, Derechos reservados.
      </p>
      <img src="/static/images/Sello_Reserva_Ancestral.png" alt="" />
    </footer>
  );
};

export default Footer;
