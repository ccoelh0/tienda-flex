import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Nike1 from "../img/sneaker/home/home1.jfif";
import Nike2 from "../img/sneaker/home/home2.jfif";
import Nike5 from "../img/sneaker/home/home5.jfif";
import Yeezy3 from "../img/sneaker/yeezy/3.jfif";
import Yeezy4 from "../img/sneaker/yeezy/4.jfif";
import Yeezy5 from "../img/sneaker/yeezy/5.jfif";

export function Carrusel() {
  return (
    <div class="container-fluid">
      <OwlCarousel items={4} className="owl-theme" loop margin={8}>
        <div>
          <img className="img" src={Nike1} />
        </div>
        <div>
          <img className="img" src={Nike2} />
        </div>
        <div>
          <img className="img" src={Nike5} />
        </div>
        <div>
          <img className="img" src={Yeezy3} />
        </div>
        <div>
          <img className="img" src={Yeezy4} />
        </div>
        <div>
          <img className="img" src={Yeezy5} />
        </div>
        <div>
          <img className="img" src={Nike5} />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Carrusel;
