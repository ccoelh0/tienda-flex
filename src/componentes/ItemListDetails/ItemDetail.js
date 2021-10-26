import React from "react";
import "../../componentes-css/ItemDetail/ItemDetail.css";
// import "../../componentes-css/ItemDetail/ItemDetail2.css";

//Componentes
import { ItemCount } from "./ItemCount";

//Imagenes
import Cambios from "../../componentes-img/logos/cambios.png";
import Tarjetas from "../../componentes-img/logos/tarjetas.png";
import Retiro from "../../componentes-img/logos/retiro.png";

//Context
import { cartContext } from "../../contexto/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = React.useContext(cartContext);

  const onAdd = (quantityToAdd, talleElegido) => {
    alert(`Agregaste ${quantityToAdd} productos a tu carrito!`);
    addItem(quantityToAdd, talleElegido, item);
  };

  return (
    <React.Fragment>
      <div className="contenedorGeneral" key={`item-${item.id}`}>
        <div className="contenedor-imagen">
          <img
            src={item.imgUrl}
            alt={item.nombre}
            className="contenedor__imagen"
          />
        </div>
        <div className="contenedor-detalles">
          <div className="detalles-titulo">
            <h2>{item.nombre}</h2>
            <h3>$ {item.precio}</h3>
          </div>
          <ItemCount
            precio={item.precio}
            talle={item.talle}
            initial="1"
            stock={item.stock}
            onAdd={onAdd}
          />
          <div className="contenedor-tarjetas">
            <div className="contenido-tarjetas">
              <img src={Tarjetas} alt="tarjetas disponibles" />
              <p>3 y 6 cuotas sin interes</p>
            </div>
            <div className="contenido-tarjetas">
              <img src={Cambios} alt="cambios" />
              <p>Cambios sin costo</p>
            </div>
            <div className="contenido-tarjetas">
              <img src={Retiro} alt="cambios" />
              <p>Retiro express por locales</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
