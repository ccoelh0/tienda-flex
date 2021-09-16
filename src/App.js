import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//COMPONENTES
import Nav from "./componentes/Nav";
import Section from "./componentes/Section";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Section />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
