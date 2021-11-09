import React from "react";
import { cartContext } from "../../contexto/CartContext";
import "../../componentes-css/CartStyle/carritoContainer.css";
import { BotonNegro } from "../Button/BotonNegro";

const CarritoContainer = () => {
  const { carrito, removeItem, totalAPagar } = React.useContext(cartContext);

  return (
    <>
      {carrito.length !== 0 ? (
        <>
          <div className="titulo">
            <h2>Your Cart</h2>
            <div className="subrayado"></div>
          </div>
          <table>
            <thead>
              <tr className="trContenido trTitulos">
                <th className="t-img">Item</th>
                <th></th>
                <th className="t-talles">Sizes</th>
                <th className="t-cant">Quantity</th>
                <th className="t-precio">Price</th>
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
                    <img src={item.item.imgUrl} alt={`img-${item.item.id}`} />
                  </td>
                  <td className="t-nombre">{item.item.nombre}</td>
                  <td className="t-talles">
                    {/*Se utiliza para mapear un props.children*/}
                    {React.Children.map(item.talle, (t) => {
                      return <span key={`talle-${t}`}>{t}</span>;
                    })}
                  </td>
                  <td className="t-cantidad">
                    {item.cantidad}
                    {item.cantidad !== 1 ? " products" : " product"}
                  </td>
                  <td className="t-precio">
                    <span>$ {item.item.precio}</span>
                    <button
                      onClick={() => removeItem(item)}
                      className="boton botonRojo"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="carrito-terminarCompra">
            <span>Total: $ {totalAPagar()}</span>
            <BotonNegro
              texto={`Finish your purchase`}
              link={`/form`}
              clase={`boton botonNegroTerminarCompra`}
            />
          </div>
        </>
      ) : (
        <>
          <div className="titulo" style={{ margin: "100px 0" }}>
            <h2>Your cart is empty</h2>
            <div className="subrayado"></div>
            <div style={{ marginTop: "20px" }}>
              <BotonNegro
                texto={`View products`}
                link={`/category/all`}
                clase={`boton botonNegroVolverAProd`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarritoContainer;
