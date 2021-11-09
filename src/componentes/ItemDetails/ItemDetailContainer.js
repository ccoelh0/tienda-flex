import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/firebaseConfig";
import { ItemDetail } from "./ItemDetail";
import { BotonNegro } from "../Button/BotonNegro";

const ItemDetailContainer = () => {
  const [sinStock, setSinStock] = useState("none");
  const [stock, setStock] = useState("block");

  const [productoDetalle, setProductoDetalle] = useState({});
  const { id: idProducto } = useParams();

  useEffect(() => {
    const obtenerDatosById = () => {
      const db = getFirestore();
      const itemCollection = db.collection("items");
      const documentSpecific = itemCollection.doc(idProducto);
      documentSpecific
        .get()
        .then((data) => {
          if (data.size === 0) {
            console.log("No hay resultados");
          }
          if (data.data() === undefined) {
            setSinStock("block");
            setStock("none");
          }
          const detalle = data.data();
          setProductoDetalle(detalle);
        })
        .catch((error) => {
          console.error("Error al traer los contactos", error);
        });
    };
    obtenerDatosById();
  }, [idProducto]);

  return (
    <div>
      <div className="titulo">
        <h2 className="">Product Details</h2>
      </div>
      <div className="productoNoExiste" style={{ display: sinStock }}>
        <h3>This product does not exist</h3>
        <BotonNegro
          texto={`View other products`}
          link={`/category/all`}
          clase={`boton botonNegroTerminarCompra`}
        />
      </div>
      <div style={{ display: stock }}>
        <ItemDetail item={productoDetalle} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
