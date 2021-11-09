import React from "react";
import "../../componentes-css/ItemDetail/itemDetail.css";
import { ItemCount } from "./ItemCount";

//IMAGENES
import Cambios from "../../componentes-img/logos/cambios.png";
import Tarjetas from "../../componentes-img/logos/tarjetas.png";
import Retiro from "../../componentes-img/logos/retiro.png";

//CONTEXT
import { cartContext } from "../../contexto/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = React.useContext(cartContext);

  const onAdd = (quantityToAdd, talleElegido) => {
    addItem(quantityToAdd, talleElegido, item);
  };

  return (
    <React.Fragment>
      {item !== undefined ? (
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
                <p>All credit cards</p>
              </div>
              <div className="contenido-tarjetas">
                <img src={Cambios} alt="cambios" />
                <p>Free changes</p>
              </div>
              <div className="contenido-tarjetas">
                <img src={Retiro} alt="cambios" />
                <p>Pick up at store</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};
