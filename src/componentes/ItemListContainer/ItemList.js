import React from "react";
import { Item } from "./Item";
import "../../componentes-css/CardItem.css";

export const ItemList = ({ items }) => {
  return (
    <div className="containerGralProd">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
