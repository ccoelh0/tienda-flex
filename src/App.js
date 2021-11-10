import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTES
import NavBar from "./componentes/Nav/NavBar";
import { PresentacionDelIndex } from "./componentes/Home/PresentacionDelIndex";
import ItemListContainer from "./componentes/ItemList/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetails/ItemDetailContainer";
import CarritoContainer from "./componentes/Cart/CarritoContainer";
import Footer from "./componentes/Footer/Footer";
import { FormDeCompra } from "./componentes/Cart/FormDeCompra";

//CONTEXT
import { CartProvider } from "./contexto/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <PresentacionDelIndex />
            <ItemListContainer />
          </Route>

          <Route exact path="/category/all">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <CarritoContainer />
          </Route>

          <Route exact path="/form">
            <FormDeCompra />
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;
