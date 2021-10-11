import React, { useState } from "react";
import "../../componentes-css/ItemDetail/ItemDetail.css";

//Componentes
import { ItemCount } from "./ItemCount";

//Imagenes
import Cambios from "../../componentes-img/logos/cambios.png";
import Tarjetas from "../../componentes-img/logos/tarjetas.png";
import Retiro from "../../componentes-img/logos/retiro.png";

export const ItemDetail = ({ item }) => {
  const { nombre, imgUrl, precio, talle, stock, id } = item;

  //Funcion de agregar producto al carrito
  const [productoElegido, setProductoElegido] = useState([]);

  const onAdd = (quantityToAdd, talleElegido) => {
    alert(`Agregaste ${quantityToAdd} productos a tu carrito!`);
    setProductoElegido({
      nombre: nombre,
      imgUrl: imgUrl,
      precio: precio,
      cantidadElegida: quantityToAdd,
      talle: parseInt(talleElegido),
      id: id,
    });
  };

  console.log(productoElegido);

  return (
    <React.Fragment>
      <div className="contenedorGeneral" key={id}>
        <div className="contenedor-imagen">
          <img src={imgUrl} alt={nombre} className="contenedor__imagen" />
        </div>
        <div className="contenedor-detalles">
          <div className="detalles-titulo">
            <h2>{nombre}</h2>
            <h3>$ {precio}</h3>
          </div>
          <ItemCount
            precio={precio}
            talle={talle}
            initial="1"
            stock={stock}
            onAdd={onAdd}
          />
        </div>
        <div className="contenedor-tarjetas">
          <div className="contenido-tarjetas">
            <img src={Tarjetas} alt="tarjetas disponibles" />
            <p>3 y 6 cuotas sin interes</p>
          </div>
          <div className="contenido-tarjetas">
            <img src={Cambios} alt="cambios" />
            <p>Cambios sin costo</p>
          </div>
          <div className="contenido-tarjetas">
            <img src={Retiro} alt="cambios" />
            <p>Retiro express por locales</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
