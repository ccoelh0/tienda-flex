import React from "react";
import { Route } from "react-router";

//COMPONENTES
import Home from "./section/Home";

export default function Section() {
  return (
    <section>
      <Route path="/" component={Home} exact />
      <Route path="/producto" exact />
      <Route path="/contacto" exact />
      <Route path="/home" exact />
    </section>
  );
}
