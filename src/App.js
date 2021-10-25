import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CategoryContainer from "./Containers/CategoryContainer";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CarouselHome from "./components/CarouselHome/CarouselHome";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";

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
        <Footer />
      </BrowserRouter>
      </CartProvider> 
    </div>
  );
}

export default App;
