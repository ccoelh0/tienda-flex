import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../componentes-css/Nav.css";

//Import components
import CartWidget from "./CartWidget";

//Importo imagenes
import Menu from "../../componentes-img/bars-solid.svg";
import Close from "../../componentes-img/times-solid.svg";

export default function Nav() {
  //Menu togle
  const [state, setState] = useState({ toggle: false });

  function menuToggle() {
    setState({ toggle: !state.toggle });
  }

  const { toggle } = state;

  return (
    <div>
      <div className="logo logoDesktop" alt="icono de FlatIcon">
        <Link to="/">
          <h1>Tienda Flex</h1>
        </Link>
      </div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} width="25" alt="menu" />
        </div>
        <div className="logo logoMobile" alt="icono de FlatIcon">
          <Link to="/">
            <h1>Tienda Flex</h1>
          </Link>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <NavLink
                to="/category"
                className="botonNavBar"
                // activeStyle={{ color: "#a5243d" }}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Nike"
                className="botonNavBar"
                activeStyle={{ color: "#0147bf" }}
              >
                Nike
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Jordan"
                className="botonNavBar"
                activeStyle={{ color: "#0147bf" }}
              >
                Jordan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Yeezy"
                className="botonNavBar"
                activeStyle={{ color: "#0147bf" }}
              >
                Yeezy
              </NavLink>
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
          <NavLink to="/cart">
            <CartWidget cantidad="0" />
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
