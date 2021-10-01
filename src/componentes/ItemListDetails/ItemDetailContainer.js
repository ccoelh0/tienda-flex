import React, { useState, useEffect } from "react";

//Componentes
import { ItemDetail } from "./ItemDetail";

//JSON
import Items from "../../../src/items.json";

export const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    obtenerDatos(Items);
  }, []);

  const getItems = (items) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  async function obtenerDatos(items) {
    const data = await getItems(items);
    setItemDetail(data);
  }

  return (
    <div>
      <div className="titulo">
        <h3 className="">Detalles del producto</h3>
        <div className="subrayado"></div>
      </div>
      <ItemDetail items={itemDetail} />
    </div>
  );
};
