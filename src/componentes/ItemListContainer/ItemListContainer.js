import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../componentes-css/Productos.css";
import { getFirestore } from "../../firebase/firebaseConfig";

//Componentes
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId: categoriaDelProd } = useParams();

  const obtenerDatos = () => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((informacionBaseDatos) => {
        if (informacionBaseDatos.size === 0) {
          // console.log("No Hay resultados");
        }
        console.log("documentos: ", informacionBaseDatos.docs);
        const productos = informacionBaseDatos.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        if (categoriaDelProd) {
          const filtro = productos.filter(
            (item) => item.categoria === categoriaDelProd
          );
          // console.log(filtro);
          setProductos(filtro);
        } else {
          setProductos(productos);
        }
      })
      .catch((error) => {
        console.error("Error al traer los contactos", error);
      });
  };

  useEffect(() => {
    obtenerDatos();
  }, [categoriaDelProd]);

  return (
    <React.Fragment>
      <div className="titulo">
        <h2 className="">Nuestros productos</h2>
        <div className="subrayado"></div>
      </div>
      <ItemList items={productos} />
    </React.Fragment>
  );
};

export default ItemListContainer;
