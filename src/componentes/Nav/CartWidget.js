import React from "react";
import CartIcon from "../../componentes-img/logos/shopping-cart.png";
import { cartContext } from "../../contexto/CartContext";

export default function CartWidget() {
  const { carrito } = React.useContext(cartContext);

  const cart = carrito.map((item) => item.cantidad);

  //Suma cada cantidad de items que se recupero de map
  let itemsTotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="nav-cart">
      {itemsTotal !== 0 ? <span>{itemsTotal}</span> : <></>}
      <img src={CartIcon} width="25" alt="carrito" />
    </div>
  );
}
