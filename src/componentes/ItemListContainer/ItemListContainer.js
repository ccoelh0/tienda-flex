import React, { useState, useEffect } from "react";
import "../../componentes-css/Productos.css";

//Componentes
import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";
// import { PresentacionDelIndex } from "./PresentacionDelIndex";

const ItemListContainer = () => {
  //BOTONERA
  //PRODUCTOS PARA ITEM COUNT
  let arrayDeProductos = {
    producto: "Jordan 1",
    precio: 200,
  };
  //DESESTRUCTURACION
  let { producto, precio } = arrayDeProductos;

  //Funcion de agregar producto al carrito
  function onAdd(productoAgregado) {
    alert(`Agregaste ${productoAgregado} productos a tu carrito!`);
  }
  /////////////////////////////////////////////////////////////////

  //DESAFIO PROMESAS
  const [productos, setProductos] = useState([]);

  let items = [
    {
      id: 1,
      nombre: "Yeezy 380",
      precio: 200,
      imgUrl:
        "https://images.unsplash.com/photo-1606890542488-1f7a7aa9863a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      stock: 20,
    },
    {
      id: 2,
      nombre: "Nike Dunk",
      precio: 150,
      imgUrl:
        "https://images.unsplash.com/photo-1606890658177-58039f9527df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      stock: 12,
    },
    {
      id: 3,
      nombre: "Jordan 5",
      precio: 500,
      imgUrl:
        "https://images.unsplash.com/photo-1606890542166-00bad9f493ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      stock: 8,
    },
    {
      id: 4,
      nombre: "Nike Sacai",
      precio: 210,
      imgUrl:
        "https://images.unsplash.com/photo-1606890657878-16393aa45766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      stock: 3,
    },
  ];

  useEffect(() => {
    obtenerDatos(items);
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
      {/* <div className="titulo">
        <h1>FleX</h1>
        <div className="subrayado"></div>
      </div>
      <div className="padre-portada">
        <div className="portada"></div>
      </div> */}

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
      {/* <PresentacionDelIndex /> */}
    </React.Fragment>
  );
};

export default ItemListContainer;
