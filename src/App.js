import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTES
import NavBar from "./componentes/Nav/NavBar";
import ItemListContainer from "./componentes/section/ItemListContainer";
import RouteContainer from "./componentes/section/RouteContainer";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <ItemListContainer greeting="Tu carrito esta vacio!" />
        <RouteContainer />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
