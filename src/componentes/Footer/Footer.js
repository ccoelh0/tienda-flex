import React from "react";
import { Link } from "react-router-dom";
import "../../componentes-css/Footer/footer.css";

//LOGOS
import Ig from "../../componentes-img/logos/ig.png";
import Fb from "../../componentes-img/logos/fb.png";
import Wp from "../../componentes-img/logos/wp.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="redes">
        <img src={Ig} alt="instagram" />
        <img src={Fb} alt="facebook" />
        <img src={Wp} alt="whatsapp" />
      </div>
      <div className="links">
        <Link to={"/category/all"}>
          <span>All</span>
        </Link>
        <Link to={"/category/Nike"}>
          <span>Nike</span>
        </Link>
        <Link to={"/category/Jordan"}>
          <span>Jordan</span>
        </Link>
        <Link to={"/category/Yeezy"}>
          <span>Yeezy</span>
        </Link>
      </div>
      <div className="derechos">
        <h5>All rights reserved</h5>
      </div>
    </div>
  );
}
