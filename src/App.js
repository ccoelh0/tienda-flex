import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTES
import NavBar from "./componentes/Nav/NavBar";
import { PresentacionDelIndex } from "./componentes/ItemListContainer/PresentacionDelIndex";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemListDetails/ItemDetailContainer";
import Footer from "./componentes/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
          <PresentacionDelIndex />
        </Route>
        <Route exact path="/category">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
