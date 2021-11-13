import React, { useState } from "react";
import { getFirestore } from "../../firebase/firebaseConfig";
import { cartContext } from "../../contexto/CartContext";
import "../../componentes-css/CartStyle/form.css";
import { BotonNegro } from "../Button/BotonNegro";
import TarjetaDeCredito from "./TarjetaDeCredito";
import { Alert } from "react-bootstrap";

export const FormDeCompra = () => {
  const { carrito, totalAPagar, terminarCompra } =
    React.useContext(cartContext);

  const [compraFinalizada, setCompraFinalizada] = useState("none");
  const [compraNoFinalizada, setNoCompraFinalizada] = useState("block");
  const [msjError, setMsjError] = useState("none");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [direction, setDirection] = useState("");
  const [cuota, setCuota] = useState("");

  //STATES PARA COMPONENTE TARJETAS
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  //ID FIREBASE
  const [idCompra, setIdCompra] = useState("");
  const cuotas = [0, 3, 6, 12];

  const finalizarCompra = (ev) => {
    ev.preventDefault();
    const expiracion = expiry.length === 4 || expiry.length === 5;
    if (
      nombre !== "" &&
      email === emailRepeat &&
      direction !== "" &&
      cuota !== "none" &&
      cvc.length === 3 &&
      expiracion &&
      name !== "" &&
      number.length === 16
    ) {
      //toLocaleString nos transcribe el dato de Date
      const fechaDeLaCompra = new Date();
      const total = totalAPagar();

      const nuevaOrden = {
        buyer: {
          email: email,
          emailRepeat: emailRepeat,
          nombre: nombre,
          direction: direction,
          cantidadDeCoutas: cuota,
          codigoTarjeta: number,
          codigoDeSeguridad: cvc,
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

      const ordenesData = getFirestore();
      const ordenes = ordenesData.collection("compra");

      ordenes
        .add(nuevaOrden)
        .then(({ id }) => {
          setIdCompra(id);
          setEmail("");
          setEmailRepeat("");
          setNombre("");
          setDirection("");
          setName("");
          setNumber("");
          setCVC("");
          setExpiry("");
          setCuota("");
          setCompraFinalizada("block");
          setNoCompraFinalizada("none");
        })
        .catch((error) => {
          console.error(error);
        });

      //ACTUALIZACION STOCK
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
    } else {
      setMsjError("block");
      setTimeout(() => {
        setMsjError("none");
      }, 3000);
    }
  };

  return (
    <>
      <div style={{ display: compraNoFinalizada }}>
        <div>
          <h1
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: 800,
              margin: "60px 20px",
              fontSize: "45px",
            }}
          >
            sneakers are almost yours!
          </h1>
          <div style={{ display: msjError }} className="alert">
            <Alert variant="danger">Check the data!</Alert>
          </div>
          <div id="grid">
            <div className="formImg"></div>
            <form>
              <div className="input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder=" JOHN DOE"
                  value={nombre}
                  onChange={(evento) => setNombre(evento.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="direction">Direction:</label>
                <input
                  type="text"
                  name="direction"
                  placeholder=" STREET 123"
                  value={direction}
                  onChange={(evento) => setDirection(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder=" email@example.com"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="emailRepeat">Repeat email:</label>
                <input
                  type="text"
                  name="emailRepeat"
                  placeholder=" email@example.com"
                  value={emailRepeat}
                  onChange={(evento) => setEmailRepeat(evento.target.value)}
                />
              </div>
              <div className="input">
                <TarjetaDeCredito
                  name={name}
                  setName={setName}
                  number={number}
                  setNumber={setNumber}
                  expiry={expiry}
                  setExpiry={setExpiry}
                  cvc={cvc}
                  setCVC={setCVC}
                />
              </div>
              <div
                className="input"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Choose amount of payments:</label>
                <select
                  className="cuotas"
                  onChange={(e) => {
                    const cuotaSeleccionada = e.target.value;
                    setCuota(cuotaSeleccionada);
                  }}
                >
                  <option value="none">Choose</option>
                  {cuotas.map((c) => (
                    <option key={`key-${c}`} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="botonEnviarForm">
                <input
                  type="submit"
                  value="Sent"
                  className="boton botonNegroTerminarCompra"
                  onClick={finalizarCompra}
                  style={{ height: "50px" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="mensajeCompraRealizada"
        style={{
          display: compraFinalizada,
          textAlign: "center",
        }}
      >
        <div>
          <div>
            <h2
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Thanks for your purchase!
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <h3>Purchase ID: {idCompra}</h3>
          </div>

          <div>
            <BotonNegro
              texto={"View more products"}
              link={"/"}
              clase={"boton botonNegroTerminarCompra"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
