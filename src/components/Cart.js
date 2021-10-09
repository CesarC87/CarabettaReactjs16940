import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart , deleteItem, clearCart} = useContext(CartContext)

  if(cart.length === 0) {
    return (
      <div>
        <h2>Carrito vacío</h2>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </div>
    ) 
    }else {
      return (
        <div>
          <h3>Tu carrito:</h3>
          {
            cart.map((product) => (
              <div key={product.id} className="checkOut">
                <span>{product.title}</span>
                <span>{product.counter}</span>
                <span>${product.counter * product.price}</span>
                <button onClick={() => deleteItem(product)}>Eliminar Item</button>
              </div>
            ))
          }
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
      )
  
};
}

export default Cart
