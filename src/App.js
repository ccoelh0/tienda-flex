import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

//COMPONENTES
import Nav from "./componentes/Nav";
import Section from "./componentes/Section";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Section />
      </Router>
    </div>
  );
}

export default App;
