import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/firebaseConfig";

//Componentes
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productoDetalle, setProductoDetalle] = useState({});
  const { id: idProducto } = useParams();

  const obtenerDatosById = () => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const documentSpecific = itemCollection.doc(idProducto);
    documentSpecific
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("No hay resulatdos");
        }
        console.log("data: ", data.data());
        const detalle = data.data();
        setProductoDetalle(detalle);
      })
      .catch((error) => {
        console.error("Error al traer los contactos", error);
      });
  };

  useEffect(() => {
    obtenerDatosById();
  }, [idProducto]);

  return (
    <div>
      <div className="titulo">
        <h2 className="">Detalles del producto</h2>
        <div className="subrayado"></div>
      </div>
      <ItemDetail item={productoDetalle} />
    </div>
  );
};

export default ItemDetailContainer;
