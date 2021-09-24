import React, { useState } from "react";

export const ItemCount = (props) => {
  //Desestructuracion del props
  const { precio, initial, stock, onAdd } = props;

  const [objeto, setObjeto] = useState({
    cantidadSeleccionada: parseInt(initial),
    stockDisponible: parseInt(stock),
  });

  //Desestructuracion del state de ItemCount
  const { cantidadSeleccionada, stockDisponible } = objeto;

  //Actividad del state
  // console.log(objeto);

  //Funcion que multiplica el precio x la cantidad de productos => else: precio unitario
  const precioDelProducto = (precio, cantidad, stock) => {
    if (stock !== 0) {
      return precio * cantidad;
    } else {
      return precio;
    }
  };

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
      cantidad = "No hay productos disponibles";
      return cantidad;
    }
  };

  //Funcion para el carrito y que valida onAdd
  const agregarProductoAlCarrito = (stock, cantidad) => {
    if (stock !== 0) {
      let cantidadDeProductosSeleccionados = cantidad;
      onAdd(cantidadDeProductosSeleccionados);
    } else {
      alert("no hay stock disponible");
    }
  };

  return (
    // Estilos pasados por el CSS productos
    <div>
      <p>
        Precio: $
        {precioDelProducto(precio, cantidadSeleccionada, stockDisponible)}
      </p>
      <button
        className="cartaProductos-boton"
        onClick={() => reducirCantidadProducto(cantidadSeleccionada)}
      >
        -
      </button>
      <span className="cartaProductos-total">
        {conocerStockDelProducto(cantidadSeleccionada, stockDisponible)}
      </span>
      <button
        className="cartaProductos-boton"
        onClick={() =>
          sumarCantidadProducto(cantidadSeleccionada, stockDisponible)
        }
      >
        +
      </button>
      <br />
      <button
        className="cartaProducto-botonComprar"
        onClick={() =>
          agregarProductoAlCarrito(stockDisponible, cantidadSeleccionada)
        }
      >
        Agregar al carrito
      </button>
    </div>
  );
};
