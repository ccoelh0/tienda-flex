import React from "react";
import { Item } from "./Item";
import "../../componentes-css/CardItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

export const ItemList = ({ items }) => {
  return (
    <div className="containerGralProd">
      {items.length !== 0 ? (
        items.map((item) => <Item key={`listGral-${item.id}`} item={item} />)
      ) : (
        <div style={{ margin: "100px" }}>
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};
