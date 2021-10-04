import React, { useState, useEffect } from "react";
import "../../componentes-css/Productos.css";

//Componentes
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

//JSON
import Items from "../../../src/items.json";

const ItemListContainer = () => {
  //PRODUCTOS PARA ITEM COUNT
  // let arrayDeProductos = {
  //   producto: "Jordan 1",
  //   precio: 200,
  // };
  //DESESTRUCTURACION
  // let { producto, precio } = arrayDeProductos;

  //Funcion de agregar producto al carrito
  // function onAdd(productoAgregado) {
  //   alert(`Agregaste ${productoAgregado} productos a tu carrito!`);
  // }
  /////////////////////////////////////////////////////////////////

  //Lista de productos
  const [productos, setProductos] = useState([]);

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
    setProductos(data);
  }

  return (
    <React.Fragment>
      <div className="titulo">
        <h3 className="">Nuestros productos</h3>
        <div className="subrayado"></div>
        <br />
        <br />
        {/* Boton de sumar y restar producto */}
        {/* <div className="cartaProducto">
          <h4>{producto}</h4>
          <ItemCount precio={precio} initial="1" stock="8" onAdd={onAdd} />
        </div> */}
      </div>
      <ItemList items={productos} />
    </React.Fragment>
  );
};

export default ItemListContainer;
