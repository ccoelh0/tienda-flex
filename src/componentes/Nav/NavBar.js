import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

//Import components
import CartWidget from "./CartWidget";

//Importo imagenes
import Menu from "../img/bars-solid.svg";
import Close from "../img/times-solid.svg";

export default function Nav() {
  const [state, setState] = useState({ toggle: false });

  function menuToggle() {
    setState({ toggle: !state.toggle });
  }

  const { toggle } = state;

  return (
    <div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} width="25" alt="menu" />
        </div>
        <div className="logo">
          <Link to="/" exact>
            <a className="logo-a">FleX</a>
          </Link>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Productos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about">About FleX</Link>
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
