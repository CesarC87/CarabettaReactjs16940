import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContext, CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CategoryContainer from "./Containers/CategoryContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider> 
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route
            exact
            path="/category/:category"
            component={CategoryContainer}
          />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </BrowserRouter>
      </CartProvider> 
    </div>
  );
}

export default App;
