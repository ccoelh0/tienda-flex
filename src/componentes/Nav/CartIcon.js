import React from "react";
import CartIcon from "../img/cart-plus-solid.svg";

export default function Cart(props) {
  //Estilos pasados en el CSS de nav
  return (
    <div className="nav-cart">
      <span>{props.cantidad}</span>
      <img src={CartIcon} width="30" alt="carrito" />
    </div>
  );
}
