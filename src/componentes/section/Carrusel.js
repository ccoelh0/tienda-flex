import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Nike1 from "../img/sneaker/home/home1.jfif";
import Nike2 from "../img/sneaker/home/home2.jfif";
import Nike5 from "../img/sneaker/home/home5.jfif";
import Yeezy3 from "../img/sneaker/yeezy/3.jfif";
import Yeezy4 from "../img/sneaker/yeezy/4.jfif";
import Yeezy5 from "../img/sneaker/yeezy/5.jfif";

export class Carrusel extends Component {
  state = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  render() {
    return (
      <div className="container">
        <OwlCarousel
          loop={true}
          margin={10}
          dots={false}
          items={4}
          nav
          responsive={this.state.responsive}
        >
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
}

export default Carrusel;
