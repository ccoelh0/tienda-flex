import React from "react";
import { Route } from "react-router";

//COMPONENTES
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";

export default function Section() {
  return (
    <section>
      <Route path="/" component={Home} exact />
      <Route path="/home" exact />
      <Route path="/product" exact />
      <Route path="/contact" exact />
      <Route path="/itemListContainer" component={ItemListContainer} exact />
    </section>
  );
}
