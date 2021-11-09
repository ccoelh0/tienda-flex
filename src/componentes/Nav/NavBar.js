import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../componentes-css/Navbar/nav.css";
import CartWidget from "./CartWidget";
import Menu from "../../componentes-img/logos/menu.png";
import Close from "../../componentes-img/times-solid.svg";

export default function Nav() {
  const [state, setState] = useState({ toggle: false });

  function menuToggle() {
    setState({ toggle: !state.toggle });
  }

  const { toggle } = state;

  return (
    <div className="gralNav">
      <div className="logo logoDesktop" alt="icono de FlatIcon">
        <Link to="/">
          <h1>Flex</h1>
        </Link>
      </div>
      <header>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} width="25" alt="menu" />
        </div>
        <div className="logo logoMobile" alt="icono de FlatIcon">
          <Link to="/">
            <h1>Flex</h1>
          </Link>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <NavLink
                to="/category/all"
                className="botonNavBar"
                activeStyle={{ color: "#0147bf" }}
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
          <div className="widgetMobile">
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="widgetDesktop">
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </div>
  );
}
