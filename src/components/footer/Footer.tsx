import { Link } from "react-router";
import Logo from "../../assets/icons/logo-light.png";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <img src={Logo} className="background-logo" />
          <div className="main-links">
            <Link className="footer-link" to={"/"}>
              Home
            </Link>
            <Link className="footer-link" to={"/"}>
              Sobre
            </Link>
            <Link className="footer-link" to={"/"}>
              Equipe
            </Link>
            <Link className="footer-link" to={"/"}>
              Serviços
            </Link>
            <Link className="footer-link" to={"/"}>
              Agendar
            </Link>
            <Link className="footer-link" to={"/"}>
              Blog & News
            </Link>
            <Link className="footer-link" to={"/"}>
              Termos & Suporte
            </Link>
          </div>
          <div className="secondary-links">
            <Link className="secondary-link footer-link" to={"/"}>
              Central de Ajuda
            </Link>
            <Link className="secondary-link footer-link" to={"/"}>
              suporte@mentris.com
            </Link>
            <Link className="secondary-link footer-link" to={"/"}>
              contato@mentaris.com
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
