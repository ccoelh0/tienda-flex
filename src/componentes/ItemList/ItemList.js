import React from "react";
import { Item } from "./Item";
import "../../componentes-css/ItemList/cardItem.css";
import { BotonNegro } from "../Button/BotonNegro";

export const ItemList = ({ items }) => {
  return (
    <>
      {items.length !== 0 ? (
        items.map((item) => <Item key={`listGral-${item.id}`} item={item} />)
      ) : (
        <div style={{ margin: "100px" }}>
          <div className="mensajeSinStock">
            <h3>out of stock</h3>
            <BotonNegro
              texto={`View more products`}
              link={`/category/all`}
              clase={`boton botonNegroTerminarCompra`}
            />
          </div>
        </div>
      )}
    </>
  );
};
