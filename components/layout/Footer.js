import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["container-text"]}>
        <Link href="/contacto">
          <a>
            <h3 className={classes.contacto}>Contacto</h3>
          </a>
        </Link>
        <Link href="/aviso-privacidad">
          <a>
            <h3 className={classes.aviso}>Aviso de privacidad</h3>
          </a>
        </Link>
        <p className={classes.derechos}>
          © 2022 Reserva Ancestral, Derechos reservados.
        </p>
      </div>

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
          alt="Reserva Ancestral Sello"
        />
      </picture>
    </footer>
  );
};

export default Footer;
