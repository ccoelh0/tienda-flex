import React from "react";
import CartIcon from "../../componentes-img/cart-plus-solid.svg";

//Estilos pasados en el CSS de nav
export default function CartWidget(props) {
  //Desestructuracion
  const { cantidad } = props;
  return (
    <div className="nav-cart">
      <span>{cantidad}</span>
      <img src={CartIcon} width="30" alt="carrito" />
    </div>
  );
}
