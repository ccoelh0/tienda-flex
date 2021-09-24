import React from "react";

//Imagenes Jordan
import NikeLogo from "../img/logos/nike.png";
import Nike4 from "../img/sneaker/home/home4.jfif";
import Nike6 from "../img/sneaker/home/home6.jfif";

//Imagenes Yeezy
import AdidasLogo from "../img/logos/adidas.png";
import Yeezy1 from "../img/sneaker/yeezy/1.jfif";
import Yeezy2 from "../img/sneaker/yeezy/2.jfif";

export const PresentacionDelIndex = () => {
  return (
    <div>
      <div className="container">
        <div className="row productos-flex">
          <div className="home-flex col-sm-12 col-md-4">
            <img src={NikeLogo} width="120" alt="Logo extraido de FlatIcon" />
            <h3>Air Jordan</h3>
            <p>
              Air Jordan is an American brand of basketball shoes, athletic,
              casual, and style clothing produced by Nike. Founded in Chicago,
              Air Jordan was created for Hall of Fame former basketball player
              Michael Jordan during his time with the Chicago Bulls.
            </p>
            <button className="home-boton">Buy now</button>
          </div>
          <img
            src={Nike4}
            className="col-sm-12 col-md-4"
            alt="imagen de zapatilla Nike"
          />
          <img
            src={Nike6}
            className="col-sm-12 col-md-4"
            alt="imagen de zapatilla Nike"
          />
        </div>
      </div>
      <div className="container">
        <div className="row productos-flex">
          <img
            src={Yeezy1}
            className="d-none d-md-flex col-md-4"
            alt="imagen de zapatilla Yeezy"
          />
          <img
            src={Yeezy2}
            className="d-none d-md-flex col-md-4"
            alt="imagen de zapatilla Yeezy"
          />
          <div className="home-flex col-sm-12 col-md-4">
            <img src={AdidasLogo} width="120" alt="Logo extraido de FlatIcon" />
            <h3>Yeezy</h3>
            <p>
              Adidas Yeezy is a fashion collaboration between German sportswear
              company Adidas and American designer, rapper, entrepreneur and
              personality Kanye West. The collaboration has become notable for
              its high-end limited edition colorways and general releases
              offered by the Yeezy Boost sneakers line up.
            </p>
            <button className="home-boton">Buy now</button>
          </div>
          <img src={Yeezy1} className="col-12 d-md-none" />
          <img src={Yeezy2} className="d-12 d-md-none" />
        </div>
      </div>
    </div>
  );
};
