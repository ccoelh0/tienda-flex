import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../componentes-css/Productos.css";

//Componentes
import { ItemList } from "./ItemList";

//JSON
import Items from "../../../src/items.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId: categoriaDelProd } = useParams();

  const getItems = (items) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaDelProd) {
          const filtroXCategoria = items.filter(
            (item) => item.categoria === categoriaDelProd
          );
          resolve(filtroXCategoria);
        } else {
          resolve(Items);
        }
      }, 2000);
    });
  };

  async function obtenerDatos(items) {
    const data = await getItems(items);
    setProductos(data);
  }

  //[categoriaDelProd] => se agrega en los [] para
  //recibir actualizacion constante
  useEffect(() => {
    obtenerDatos(Items);
  }, [categoriaDelProd]);

  return (
    <React.Fragment>
      <div className="titulo">
        <h2 className="">Nuestros productos</h2>
        <div className="subrayado"></div>
      </div>
      <ItemList items={productos} />
    </React.Fragment>
  );
};

export default ItemListContainer;
