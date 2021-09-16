import React from "react";
import { Route } from "react-router";

//COMPONENTES
import Home from "./section/Home";
import CartList from "./section/CartList";

export default function Section() {
  return (
    <section>
      <Route path="/" component={Home} exact />
      <Route path="/home" exact />
      <Route path="/product" exact />
      <Route path="/contact" exact />
      <Route path="/cartList" component={CartList} exact />
    </section>
  );
}
