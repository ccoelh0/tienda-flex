import React from "react";
import "../../componentes-css/ItemDetail.css";

//Componentes
import Talles from "./Talles";

//Imagenes
import Retiro from "../../componentes-img/logos/retiro.png";
import Cambios from "../../componentes-img/logos/cambios.png";
import Tarjetas from "../../componentes-img/logos/tarjetas.png";

export const ItemDetail = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <div className="detalles" key={item.id}>
          <img
            src={item.imgUrl}
            alt={item.nombre}
            className="detalles-imgPrincipal"
          />
          <div className="detalles-contenido">
            <div className="contenido">
              <h2>{item.nombre}</h2>
              <div className="contenido-precioTalle">
                <h3>${item.precio}</h3>
                <Talles talles={item.talles} />
              </div>
            </div>
            <div className="contenedor-img">
              <div className="contenido-img">
                <img src={Tarjetas} />
                <p>3 y 6 cuotas sin interes</p>
              </div>
              <div className="contenido-img">
                <img src={Retiro} />
                <p>Retiro express en tiendas</p>
              </div>
              <div className="contenido-img">
                <img src={Cambios} />
                <p>Cambios sin costo</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
