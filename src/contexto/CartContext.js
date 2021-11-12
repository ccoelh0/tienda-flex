import React, { useEffect, useState, createContext } from "react";

//Context
export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Cart") !== null) {
      setCarrito(JSON.parse(localStorage.getItem("Cart")));
    }
  }, []);

  // Local Storage Set
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(carrito));
  }, [carrito]);

  const addItem = (cantidad, talle, itemNuevo) => {
    //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

    //Aca hay que tener cuidado, porque el id en el firabesa hay que buscarlo dentro del item, pero dentro de la lista dentro de lista.item
    const findPorId = carrito.findIndex(
      (listaDeItems) => listaDeItems.item.id === itemNuevo.id
    );

    //[...carrito] => sirve para que no se pisen los productos
    if (findPorId === -1) {
      const listaDeItems = [
        ...carrito,
        { item: itemNuevo, cantidad, talle: [talle] },
      ];
      setCarrito(listaDeItems);
    } else {
      const nuevaCantidad = carrito[findPorId].cantidad + cantidad;

      //Antes se generaba un loop  de array y se repetian los talles
      //Solucion: se guarda el valor del talle en un array y se recupera
      const talleViejo = carrito[findPorId].talle;
      //Se guarda en otro array el nuevo talle seleccionado
      const nuevoTalleSeleccionado = [talle];
      //Con concat se juntan los dos arrays y se devuelve uno solo
      const talles = talleViejo.concat(nuevoTalleSeleccionado);
      //Por ultimo, se eliminan del array los valores repetidos pero se mantiene la cantidad seleccionada
      const tallesSinRepetir = talles.filter(
        (item, i) => talles.indexOf(item) === i
      );

      const listaViejaDeItems = carrito.filter(
        (listaViejaDeItems) =>
          listaViejaDeItems.item.nombre !== carrito[findPorId].item.nombre
      );

      const listaDeItems = [
        ...listaViejaDeItems,
        {
          item: carrito[findPorId].item,
          cantidad:
            nuevaCantidad <= itemNuevo.stock ? nuevaCantidad : itemNuevo.stock,
          talle: tallesSinRepetir,
        },
      ];
      setCarrito(listaDeItems);
    }
  };

  const removeItem = (item) => {
    const nuevaLista = carrito.filter(
      (itemCarrito) => itemCarrito.item.id !== item.item.id
    );
    setCarrito(nuevaLista);
    totalAPagar();
  };

  const totalAPagar = () => {
    let total = 0;
    carrito.forEach((item) => (total += item.item.precio * item.cantidad));
    return total;
  };

  const terminarCompra = () => {
    setCarrito([]);
  };

  return (
    <>
      <cartContext.Provider
        value={{
          carrito,
          addItem,
          removeItem,
          totalAPagar,
          terminarCompra,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};
