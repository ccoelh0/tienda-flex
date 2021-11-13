import React, { useState } from "react";
import { SeleccionarTalle } from "./SeleccionarTalle";
import { BotonNegro } from "../Button/BotonNegro";
import { Alert } from "react-bootstrap";

export const ItemCount = (props) => {
  const { talle, initial, stock, onAdd } = props;

  const [fade, setFade] = useState(false);
  const [objeto, setObjeto] = useState({
    cantidadSeleccionada: parseInt(initial),
    stockDisponible: parseInt(stock),
    talleElegido: 0,
  });

  const { cantidadSeleccionada, stockDisponible, talleElegido } = objeto;

  const reducirCantidadProducto = (cantidad) => {
    if (cantidad === 1) {
      cantidad = 1;
    } else if (cantidad === 0) {
      cantidad = 0;
    } else {
      cantidad -= 1;
    }
    setObjeto({ ...objeto, cantidadSeleccionada: cantidad });
  };

  const sumarCantidadProducto = (cantidad, stock) => {
    cantidad < stock && stock !== 0 ? (cantidad += 1) : (cantidad = stock);
    setObjeto({ ...objeto, cantidadSeleccionada: cantidad });
  };

  const conocerStockDelProducto = (cantidad, stock) => {
    if (stock !== 0) {
      return cantidad;
    } else if (cantidad === 0 && stock !== 0) {
      return (cantidad = 1);
    } else {
      cantidad = 0;
      return cantidad;
    }
  };

  const talleSelect = (talle) => {
    setObjeto({ ...objeto, talleElegido: talle });
  };

  const [carritoContenedor, setCarritoContenedor] = useState("block");
  const [botonCarrito, setBotonCarrito] = useState("none");

  //ALERTS
  const [size, setSize] = useState("none");
  const [disponibilidad, setDisponibilidad] = useState("none");

  const agregarProductoAlCarrito = (stock, cantidad, talleElegido) => {
    if (talleElegido !== 0 && talleElegido !== "0") {
      let cantidadDeProductosSeleccionados = cantidad;
      onAdd(cantidadDeProductosSeleccionados, talleElegido);
      setBotonCarrito("block");
      setCarritoContenedor("none");
      setTimeout(() => {
        setFade(true);
      }, 50);
    } else if (stock === 0) {
      setDisponibilidad("block");
      setTimeout(() => {
        setDisponibilidad("none");
      }, 3000);
    } else {
      setSize("block");
      setTimeout(() => {
        setSize("none");
      }, 3000);
    }
  };

  return (
    <>
      <div style={{ display: size }}>
        <Alert variant="danger">Choose a size</Alert>
      </div>
      <div style={{ display: disponibilidad }}>
        <Alert variant="danger">Out of stock</Alert>
      </div>
      <div style={{ display: carritoContenedor }}>
        <div className="contenedor-talle">
          <p>Choose your size:</p>
          <SeleccionarTalle talle={talle} talleSelect={talleSelect} />
        </div>
        <div className="contenedor-botones">
          <div className="botonesCantGral">
            <button
              className="cant-boton"
              onClick={() => reducirCantidadProducto(cantidadSeleccionada)}
            >
              -
            </button>
            <span className="boton-span">
              {conocerStockDelProducto(cantidadSeleccionada, stockDisponible)}
            </span>
            <button
              className="cant-boton"
              onClick={() =>
                sumarCantidadProducto(cantidadSeleccionada, stockDisponible)
              }
            >
              +
            </button>
          </div>
          <div className="botonComprarGral">
            <button
              onClick={() =>
                agregarProductoAlCarrito(
                  stockDisponible,
                  cantidadSeleccionada,
                  talleElegido
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        className={`contenedor-agregado ${
          fade === false ? "fadeOut" : "fadeIn"
        }`}
        style={{ display: botonCarrito }}
      >
        <h4>Add to cart!</h4>
        <BotonNegro
          texto={`View cart`}
          link={`/cart`}
          clase={`agregado-boton`}
        />
      </div>
    </>
  );
};
