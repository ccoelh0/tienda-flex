import React from "react";
import { Link } from "react-router-dom";
import { BotonNegro } from "../Button/BotonNegro";
import "../../componentes-css/ItemList/cardItem.css";

export const Item = ({ item }) => {
  const { id, nombre, precio, imgUrl, stock } = item;

  const stockDisponible = (stock) => {
    if (stock !== 0) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <div className="container-itemCard" id={id}>
      <Link to={`/item/${id}`}>
        <img className="itemCard-img" src={imgUrl} alt={nombre} />
      </Link>
      <div className="itemCard-containerDetails">
        <h3>{nombre}</h3>
        <span>Price: ${precio}</span>
        <span style={{ color: stockDisponible(stock) }}>
          {stock !== 0 ? "Available stock" : "Out of stock"}
        </span>
        <BotonNegro
          texto={`View details`}
          link={`/item/${item.id}`}
          clase={`home-boton`}
        />
      </div>
    </div>
  );
};
