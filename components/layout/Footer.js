import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["container-text"]}>
        <Link href="/contact">
          <h3 className={classes.contacto}>Contacto</h3>
        </Link>
        <Link href="/privacy_policy">
          <h3 className={classes.aviso}>Aviso de privacidad</h3>
        </Link>
        <p className={classes.derechos}>
          © 2022 Reserva Ancestral, Derechos reservados.
        </p>
      </div>

      {/* <img src="/static/images/logos/Reserva_Ancestral_Sello.png" alt="" /> */}
      <picture>
        <source
          srcSet={`/static/images/logos/Reserva_Ancestral_Sello_607.png`}
          media="(max-width:544px)"
        />
        <source
          srcSet={`/static/images/logos/Reserva_Ancestral_Sello_1400.png`}
          media="(max-width:1400px)"
        />
        <img
          src={`/static/images/logos/Reserva_Ancestral_Sello_1400.png`}
          alt="Gabrielle Perfume"
        />
      </picture>
    </footer>
  );
};

export default Footer;
