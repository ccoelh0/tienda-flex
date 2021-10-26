import React, { useState } from "react";
import { getFirestore } from "../../firebase/firebaseConfig";
import firebase from "firebase";
import { cartContext } from "../../contexto/CartContext";
import "../../componentes-css/carrito/Form.css";
import { Link } from "react-router-dom";

export const FormDeCompra = () => {
  const { carrito, totalAPagar, terminarCompra } =
    React.useContext(cartContext);

  const [compraFinalizada, setCompraFinalizada] = useState("none");
  const [compraNoFinalizada, setNoCompraFinalizada] = useState("block");

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //id de la compra autogenerado por firebase
  const [idCompra, setIdCompra] = useState("");

  const finalizarCompra = (ev) => {
    ev.preventDefault();

    //toLocaleString nos transcribe el dato de Date
    const fechaDeLaCompra = new Date();
    const total = totalAPagar();

    const nuevaOrden = {
      buyer: {
        email: email,
        nombre: nombre,
        phone: phone,
      },
      items: {
        carrito: [...carrito],
      },
      fechaDeCompra: {
        fecha: fechaDeLaCompra.toLocaleString(),
      },
      total: {
        total: total,
      },
    };
    // console.log(nuevaOrden);
    const ordenesData = getFirestore();
    const ordenes = ordenesData.collection("compra");

    ordenes
      .add(nuevaOrden)
      .then(({ id }) => {
        setIdCompra(id);
        console.log("el id de la compra es,", id);
        setEmail("");
        setNombre("");
        setPhone("");
        setCompraFinalizada("block");
        setNoCompraFinalizada("none");
      })
      .catch((error) => {
        console.log(error);
      });

    //Actualizacion Stock de a un producto a la vez => FUNCIONA
    // const idProductoElegido = carrito.map((item) => {
    //   return item.item.id;
    // });
    // const cantidadElegidaProd = carrito.map((item) => item.cantidad);
    // const stockProd = carrito.map((item) => item.item.stock);
    // const nuevoStock = stockProd - cantidadElegidaProd;
    // console.log(nuevoStock);

    // const productos = getFirestore();
    // const actualizarProductos = productos
    //   .collection("items")
    //   .doc(`${idProductoElegido}`);
    // actualizarProductos.update({ stock: nuevoStock });

    //ACTUALIZACION VARIOS

    const db = getFirestore();
    const ItemsCollection = db.collection("items");
    const batch = getFirestore().batch();

    carrito.forEach((c) => {
      batch.update(ItemsCollection.doc(`${c.item.id}`), {
        stock: c.item.stock - c.cantidad,
      });
    });
    batch
      .commit()
      .then(() => {
        console.log("Termino bien");
        terminarCompra();
      })
      .catch((err) => console.log(err));
  };

  const completarDatos = (ev) => {
    ev.preventDefault();
    alert("Complete los datos por favor");
  };

  return (
    <>
      <div style={{ display: compraNoFinalizada }}>
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>Ya casi es tuyo!</h1>
        <br />
        <br />
        <form>
          <div className="input">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(evento) => setNombre(evento.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="phone">Numero:</label>
            <input
              type="number"
              name="phone"
              placeholder="Ingrese su telefono"
              value={phone}
              onChange={(evento) => setPhone(evento.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Ingrese su email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </div>
          {nombre != "" && email != "" && phone != "" ? (
            <input
              type="submit"
              className="boton botonNegroTerminarCompra"
              onClick={finalizarCompra}
              style={{ marginTop: "40px" }}
            />
          ) : (
            <input
              type="submit"
              className="boton botonNegroTerminarCompra"
              onClick={completarDatos}
              style={{ marginTop: "40px" }}
            />
          )}
        </form>
      </div>
      <div style={{ display: compraFinalizada, textAlign: "center" }}>
        <br />
        <br />
        <br />
        <h2>Gracias por tu compra!</h2>
        <br />
        <br />
        <Link to="/">
          <button className="boton botonNegroTerminarCompra">
            Seguir comprando
          </button>
        </Link>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
