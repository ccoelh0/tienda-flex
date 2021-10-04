import React, { useState, useEffect } from "react";

//Componentes
import { ItemDetail } from "./ItemDetail";

//JSON
// import Items from "../../../src/items.json";

export const ItemDetailContainer = () => {
  let producto = {
    id: 4,
    nombre: "Nike Sacai",
    precio: 210,
    imgUrl:
      "https://images.unsplash.com/photo-1606890657878-16393aa45766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    stock: 0,
    talles: ["No hay talles"],
  };

  const [productoDetalle, setProductoDetalle] = useState([]);

  useEffect(() => {
    obtenerDatos(producto);
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
    setProductoDetalle(data);
  }

  return (
    <div>
      <div className="titulo">
        <h3 className="">Detalles del producto</h3>
        <div className="subrayado"></div>
      </div>
      <ItemDetail item={productoDetalle} />
    </div>
  );
};
