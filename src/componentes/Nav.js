import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Nav.css";

//Importo imagenes
import Menu from "./img/bars-solid.svg";
import Close from "./img/times-solid.svg";
import CartIcon from "./img/cart-plus-solid.svg";

export default function Nav() {
  const [state, setState] = useState({ toggle: false });

  //   console.log(state);

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
          <a className="logo-a">FleX</a>
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
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={CartIcon} width="30" alt="carrito" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
