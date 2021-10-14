import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//Componentes
import { ItemDetail } from "./ItemDetail";

//JSON
import Items from "../../../src/items.json";

const ItemDetailContainer = () => {
  const [productoDetalle, setProductoDetalle] = useState({});
  const { id: idProducto } = useParams();

  const getItems = (items) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const buscarProductoPorId = items.find(
          (item) => item.id === parseInt(idProducto)
        );
        resolve(buscarProductoPorId);
      }, 2000);
    });
  };

  async function obtenerDatos(items) {
    const data = await getItems(items);
    setProductoDetalle(data);
  }

  useEffect(() => {
    obtenerDatos(Items);
  }, [idProducto]);

  return (
    <div>
      <div className="titulo">
        <h2 className="">Detalles del producto</h2>
        <div className="subrayado"></div>
      </div>
      <ItemDetail item={productoDetalle} />
    </div>
  );
};

export default ItemDetailContainer;
