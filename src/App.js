import "./App.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailConteiner";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    
    <CartProvider>
    <BrowserRouter >
      <div className="App">
    <NavBar />
        <Switch >
          <Route exact path='/'>
            Inicio
          </Route>

          <Route  path='/category/:categoryId'>
              <ItemListContainer />
          </Route>


          <Route path='/item/:itemId' >
              <ItemDetailContainer />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;