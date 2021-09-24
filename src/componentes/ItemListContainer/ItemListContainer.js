import React from "react";
import "../CssComponentes/Productos.css";

//Componentes
import { ItemCount } from "./ItemCount";
// import { PresentacionDelIndex } from "./PresentacionDelIndex";

const ItemListContainer = () => {
  //PRODUCTOS PARA ITEM COUNT
  let arrayDeProductos = {
    producto: "Jordan 1",
    precio: 200,
  };

  //DESESTRUCTURACION
  let { producto, precio } = arrayDeProductos;

  function onAdd(productoAgregado) {
    alert(`Agregaste ${productoAgregado} productos a tu carrito!`);
  }

  return (
    <React.Fragment>
      <div className="padre-portada">
        <div className="portada"></div>
      </div>
      {/* <div className="titulo">
        <h1>FleX - Tu tienda de Sneakers</h1>
        <div className="subrayado"></div>
      </div> */}
      {/* <PresentacionDelIndex /> */}
      <div className="titulo">
        <h3 className="">Nuestros productos</h3>
        <div className="subrayado"></div>
        <br />
        <br />
        <div className="cartaProducto">
          <h4>{producto}</h4>
          <ItemCount precio={precio} initial="1" stock="8" onAdd={onAdd} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemListContainer;
