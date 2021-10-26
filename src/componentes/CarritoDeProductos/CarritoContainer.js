import React from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexto/CartContext";
import "../../componentes-css/carrito/CarritoContainer.css";

const CarritoContainer = () => {
  const { carrito, removeItem, totalAPagar } = React.useContext(cartContext);

  return (
    <>
      {carrito.length !== 0 ? (
        <>
          <div className="titulo">
            <h2>Tu carrito</h2>
            <div className="subrayado"></div>
          </div>
          <table>
            <thead>
              <tr className="trContenido trTitulos">
                <th className="t-img">Item</th>
                <th></th>
                <th className="t-talles">Talles</th>
                <th className="t-cant">Cantidad</th>
                <th className="t-precio">Precio</th>
              </tr>
            </thead>
            <tfoot>
              {carrito.map((item) => (
                <tr
                  className="trContenido"
                  key={`producto${item.item.id}`}
                  id={item.item.id}
                >
                  <td className="t-img">
                    <img style={{ width: "100px" }} src={item.item.imgUrl} />
                  </td>
                  <td className="t-nombre">{item.item.nombre}</td>
                  <td className="t-talles">
                    {/*Se utiliza para mapear un props.children*/}
                    {React.Children.map(item.talle, (t) => {
                      return <span key={`talle-${t}`}>{t}</span>;
                    })}
                  </td>
                  <td className="t-cant">
                    {item.cantidad}
                    {item.cantidad !== 1 ? " productos" : " producto"}
                  </td>
                  <td className="t-precio">
                    <span>$ {item.item.precio}</span>
                    <button
                      onClick={() => removeItem(item)}
                      className="boton botonRojo"
                    >
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="carrito-terminarCompra">
            <span>Total: $ {totalAPagar()}</span>
            <Link to="/form">
              <button className="boton botonNegroTerminarCompra">
                Terminar compra
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="titulo" style={{ margin: "100px 0" }}>
            <h2>Tu carrito esta vacio</h2>
            <div className="subrayado"></div>
            <Link style={{ marginTop: "50px" }} to="/category/all">
              <button className="boton botonNegroVolverAProd">
                Ver productos
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default CarritoContainer;
