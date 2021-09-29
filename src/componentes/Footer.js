import React from "react";
import "../componentes-css/Footer.css";

//Logos
import Ig from "../componentes-img/logos/ig.png";
import Fb from "../componentes-img/logos/fb.png";
import Wp from "../componentes-img/logos/wp.png";

export default function Footer() {
  return (
    <div className="footer-padre">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-flex flex-row flex-nowrap">
            <div className="footer col-2">
              <ul className="footer-ul">
                <h3 className="footer-titulo">Home</h3>
                <li>Productos</li>
                <li>Productos</li>
                <li>Productos</li>
              </ul>
            </div>

            <div className="footer col-2">
              <ul className="footer-ul">
                <h3 className="footer-titulo">Productos</h3>
                <li>Jordan</li>
                <li>Yeezy</li>
                <li>AirMax</li>
              </ul>
            </div>

            <div className="footer col-2">
              <ul className="footer-ul">
                <h3 className="footer-titulo">Contacto</h3>
                <li>Mail</li>
                <li>Dudas</li>
                <li>Encargos</li>
              </ul>
            </div>

            <div className="footer col-2">
              <ul className="footer-ul">
                <h3 className="footer-titulo">FleX</h3>
                <li>Mail</li>
                <li>Dudas</li>
                <li>Encargos</li>
              </ul>
            </div>

            <div className="footer-logos col-4">
              <div className="footer-logos-redes">
                <img src={Ig} width="30" alt="redes" />
                <img src={Fb} width="30" alt="redes" />
                <img src={Wp} width="30" alt="redes" />
              </div>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </div>

        {/* Footer celular */}
        <div className="row">
          <div className="d-md-none footer-logos-celular col-12">
            <div className="footer-logos-celular-redes">
              <img src={Ig} width="40" alt="redes" />
              <img src={Fb} width="40" alt="redes" />
              <img src={Wp} width="40" alt="redes" />
            </div>
            <h5>
              <a href="https://www.linkedin.com/in/agustin-coelho-2a5767175/">
                Desarrollado por Agustin Coelho
              </a>
            </h5>
          </div>
        </div>
      </div>

      <div className="footer-derechos col-12 d-none d-md-flex text-center d-flex justify-content-center">
        <h4>
          <a href="https://www.linkedin.com/in/agustin-coelho-2a5767175/">
            Desarrollado por Agustin Coelho
          </a>
        </h4>
      </div>
    </div>
  );
}
