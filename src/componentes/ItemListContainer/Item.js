import React from "react";

import "../../componentes-css/CardItem.css";

export const Item = ({ item }) => {
  const { id, nombre, precio, imgUrl, stock } = item;

  return (
    <div className="container-itemCard" id={id}>
      <img className="itemCard-img" src={imgUrl} />
      <div className="itemCard-containerDetails">
        <h3>{nombre}</h3>
        <span>Precio: ${precio}</span>
        <span>Stock disponible: {stock}</span>
        <button>Ver detalles</button>
      </div>
    </div>
  );
};
