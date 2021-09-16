import React from "react";
import "../css/Home.css";

//Imagenes
import Home1 from "../img/sneaker/home/home1.jfif";
import Home2 from "../img/sneaker/home/home2.jfif";
import Home3 from "../img/sneaker/home/home3.jfif";
import Home4 from "../img/sneaker/home/home4.jfif";
import Home5 from "../img/sneaker/home/home5.jfif";
import Home6 from "../img/sneaker/home/home6.jfif";

export default function Home() {
  return (
    <div>
      <div className="padre-portada">
        <div className="portada"></div>
      </div>
      <div className="titulo">
        <h1>FleX - Tu tienda de Sneakers</h1>
        <div className="subrayado"></div>
      </div>
      <div className="container-fluid">
        <div className="row productos-flex">
          <img src={Home1} className="col-sm-12 col-md-4" />
          <img src={Home2} className="col-sm-12 col-md-4" />
          <img src={Home3} className="col-sm-12 col-md-4" />
        </div>
        <div className="row productos-flex">
          <img src={Home4} className="col-sm-12 col-md-4" />
          <img src={Home5} className="col-sm-12 col-md-4" />
          <img src={Home6} className="col-sm-12 col-md-4" />
        </div>
      </div>
    </div>
  );
}
