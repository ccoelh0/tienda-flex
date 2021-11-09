import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../../componentes-css/Index/productos.css";
import { getFirestore } from "../../firebase/firebaseConfig";
import Spinner from "react-bootstrap/Spinner";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId: categoriaDelProd } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const obtenerDatos = () => {
      setLoading(true);
      const db = getFirestore();
      const itemCollection = db.collection("items");
      itemCollection
        .get()
        .then((informacionBaseDatos) => {
          if (informacionBaseDatos.size === 0) {
            console.log("No Hay resultados");
          }
          setLoading(false);
          const productos = informacionBaseDatos.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (categoriaDelProd) {
            const filtro = productos.filter(
              (item) => item.categoria === categoriaDelProd
            );
            setProductos(filtro);
          } else {
            setProductos(productos);
          }
        })
        .catch((error) => {
          console.error("Error al traer los contactos", error);
        });
    };
    obtenerDatos();
  }, [categoriaDelProd]);

  return (
    <React.Fragment>
      <div className="titulo">
        <h2>EXPLORE OUR PRODUCTS</h2>
      </div>
      {loading === false ? (
        <div className="containerGralProd">
          <ItemList items={productos} />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "100px",
          }}
        >
          <Spinner animation="border" />
        </div>
      )}
    </React.Fragment>
  );
};

export default ItemListContainer;
