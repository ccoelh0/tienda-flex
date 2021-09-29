import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../componentes-css/Nav.css";

//Import components
import CartWidget from "./CartWidget";

//Importo imagenes
import Logo from "../../componentes-img/logos/shoes.svg";
import Menu from "../../componentes-img/bars-solid.svg";
import Close from "../../componentes-img/times-solid.svg";

export default function Nav() {
  const [state, setState] = useState({ toggle: false });

  function menuToggle() {
    setState({ toggle: !state.toggle });
  }

  const { toggle } = state;

  return (
    <div>
      <div className="logo logoDesktop" alt="icono de FlatIcon">
        <a>
          <img src={Logo} />
        </a>
      </div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} width="25" alt="menu" />
        </div>
        <div className="logo logoMobile" alt="icono de FlatIcon">
          <a>
            <img src={Logo} />
          </a>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="close">
              <img
                src={Close}
                width="20"
                onClick={menuToggle}
                alt="cierre menu"
              />
            </li>
          </ul>
          <Link to="/itemListContainer">
            <CartWidget cantidad="0" />
          </Link>
        </nav>
      </header>
    </div>
  );
}
