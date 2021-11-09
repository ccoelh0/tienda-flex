import React from "react";
import "../../componentes-css/Index/productos.css";

//IMAGENES
import NikeLogo from "../../componentes-img/logos/nike.png";
import Nike4 from "../../componentes-img/sneaker/home/home4.png";
import Nike6 from "../../componentes-img/sneaker/home/home6.png";
import AdidasLogo from "../../componentes-img/logos/adidas.png";
import Yeezy1 from "../../componentes-img/sneaker/yeezy/1.png";
import Yeezy2 from "../../componentes-img/sneaker/yeezy/2.png";

import { BotonNegro } from "../Button/BotonNegro";

export const PresentacionDelIndex = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="portada">
        <div className="portada-detalles">
          <h2>Air Jordan I High og</h2>
          <p>The Jordan Family DNA is in all of us.</p>
          <BotonNegro
            texto={`Buy`}
            link={`/category/Jordan`}
            clase={`home-boton`}
          />
        </div>
      </div>
      <div className="productos">
        <div className="home-flex">
          <img src={NikeLogo} width="120" alt="Logo extraido de FlatIcon" />
          <h3>Air Jordan</h3>
          <p>
            Air Jordan is an American brand of basketball shoes, athletic,
            casual, and style clothing produced by Nike. Founded in Chicago, Air
            Jordan was created for Hall of Fame former basketball player Michael
            Jordan during his time with the Chicago Bulls.
          </p>
          <BotonNegro
            texto={`Buy`}
            link={`/category/Jordan`}
            clase={`home-boton`}
          />
        </div>
        <img src={Nike4} className="img1" alt="imagen de zapatilla Nike" />
        <img src={Nike6} className="img2" alt="imagen de zapatilla Nike" />
      </div>
      <div className="productos2">
        <img src={Yeezy1} className="img3" alt="imagen de zapatilla Yeezy" />
        <img src={Yeezy2} className="img4" alt="imagen de zapatilla Yeezy" />
        <div className="home-flex2">
          <img src={AdidasLogo} width="120" alt="Logo extraido de FlatIcon" />
          <h3>Yeezy</h3>
          <p>
            Adidas Yeezy is a fashion collaboration between German sportswear
            company Adidas and American designer, rapper, entrepreneur and
            personality Kanye West. The collaboration has become notable for its
            high-end limited edition colorways and general releases offered by
            the Yeezy Boost sneakers line up.
          </p>
          <BotonNegro
            texto={`Buy`}
            link={`/category/Yeezy`}
            clase={`home-boton`}
          />
        </div>
      </div>
    </div>
  );
};
