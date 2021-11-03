import React, { useState } from "react";
import { getFirestore } from "../../firebase/firebaseConfig";
import { cartContext } from "../../contexto/CartContext";
import "../../componentes-css/CartStyle/Form.css";
import { BotonNegro } from "../Button/BotonNegro";

export const FormDeCompra = () => {
  const { carrito, totalAPagar, terminarCompra } =
    React.useContext(cartContext);

  const [compraFinalizada, setCompraFinalizada] = useState("none");
  const [compraNoFinalizada, setNoCompraFinalizada] = useState("block");

  const [nombre, setNombre] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [direction, setDirection] = useState("");
  const [card, setCard] = useState("");
  const [code, setCode] = useState("");
  const [cuota, setCuota] = useState("");

  //id de la compra autogenerado por firebase
  const [idCompra, setIdCompra] = useState("");
  const cuotas = [0, 3, 6, 12];

  const finalizarCompra = (ev) => {
    ev.preventDefault();

    //toLocaleString nos transcribe el dato de Date
    const fechaDeLaCompra = new Date();
    const total = totalAPagar();

    const nuevaOrden = {
      buyer: {
        email: email,
        emailRepeat: emailRepeat,
        nombre: nombre,
        number: number,
        direction: direction,
        cantidadDeCoutas: cuota,
        codigoTarjeta: card,
        codigoDeSeguridad: code,
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
        setNumber("");
        setCard("");
        setCode("");
        setCuota("");
        setCompraFinalizada("block");
        setNoCompraFinalizada("none");
      })
      .catch((error) => {
        console.error(error);
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

  const [msjError, setMsjError] = useState(false);

  const completarDatos = (ev) => {
    ev.preventDefault();
    setMsjError(true);
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
              margin: "80px 0px",
            }}
          >
            sneakers are almost yours!
          </h1>
          <div id="grid">
            <div className="formImg"></div>
            <form>
              <div className="input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder=" Enter your name"
                  value={nombre}
                  onChange={(evento) => setNombre(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="number">Number:</label>
                <input
                  type="number"
                  name="number"
                  placeholder=" Enter your number"
                  value={number}
                  onChange={(evento) => setNumber(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="direction">Direction:</label>
                <input
                  type="text"
                  name="direction"
                  placeholder=" Enter your direction"
                  value={direction}
                  onChange={(evento) => setDirection(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder=" Enter your email"
                  value={email}
                  onChange={(evento) => setEmail(evento.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="emailRepeat">Repeat email:</label>
                <input
                  type="text"
                  name="emailRepeat"
                  placeholder=" Enter your email"
                  value={emailRepeat}
                  onChange={(evento) => setEmailRepeat(evento.target.value)}
                />
              </div>
              <div className="input">
                <div className="inputDoble">
                  <div style={{ padding: "5px" }} className="card-number">
                    <label htmlFor="card" style={{ marginLeft: "10px" }}>
                      Card number:
                    </label>
                    <input
                      type="number"
                      name="card"
                      placeholder=" Card number"
                      value={card}
                      onChange={(evento) => {
                        const codigo = evento.target.value.slice(0, 16);
                        setCard(codigo);
                      }}
                    />
                  </div>
                  <div style={{ padding: "5px" }} className="card-code">
                    <label htmlFor="code" style={{ marginLeft: "10px" }}>
                      Security code:
                    </label>
                    <input
                      type="password"
                      name="code"
                      placeholder=" Code"
                      value={code}
                      onChange={(evento) => {
                        const codigo = evento.target.value.slice(0, 3);
                        setCode(codigo);
                      }}
                    />
                  </div>
                </div>
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
                  style={{ width: "40%" }}
                  onChange={(e) => {
                    const cuotaSeleccionada = e.target.value;
                    setCuota(cuotaSeleccionada);
                  }}
                >
                  <option value={""}>Choose</option>
                  {cuotas.map((c) => (
                    <option key={`key-${c}`} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </form>
            <div
              className="botonEnviarForm"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {nombre !== "" &&
              number !== "" &&
              email === emailRepeat &&
              direction !== "" &&
              card !== "" &&
              code !== "" &&
              cuota !== "" ? (
                <input
                  type="submit"
                  value="Sent"
                  className="boton botonNegroTerminarCompra"
                  onClick={finalizarCompra}
                  style={{ marginTop: "40px", height: "50px" }}
                />
              ) : (
                <>
                  <input
                    type="submit"
                    value="Sent"
                    className="boton botonNegroTerminarCompra"
                    onClick={completarDatos}
                    style={{ marginTop: "40px", height: "50px" }}
                  />
                </>
              )}
            </div>
            {nombre !== "" &&
            number !== "" &&
            email === emailRepeat &&
            direction !== "" &&
            card !== "" &&
            code !== "" &&
            cuota !== "" ? (
              <div
                className={`msjError ${
                  msjError === false ? "fadeOut2" : "fadeIn2"
                }`}
              >
                <span>check the data please</span>
              </div>
            ) : (
              <div
                className={`msjError ${
                  msjError === false ? "fadeOut" : "fadeIn"
                }`}
              >
                <span>check the data please</span>
              </div>
            )}
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
