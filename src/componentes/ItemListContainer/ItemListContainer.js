import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../componentes-css/Productos.css";

//Componentes
// import { ItemCount } from "./ItemCount";
import { ItemList } from "./ItemList";

//JSON
import Items from "../../../src/items.json";

const ItemListContainer = () => {
  //Contador
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
