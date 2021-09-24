import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTES
import NavBar from "./componentes/Nav/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <ItemListContainer />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
