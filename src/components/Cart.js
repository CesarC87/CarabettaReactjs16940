import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";

const Cart = () => {
  const {cart , deleteItem, clearCart} = useContext(CartContext)
  const newOrder = {
    buyer: {
      name: "César",
      phone: 123456,
      email: "hola@quetal.com"
    },
    items: [
      { item: "Paris", quantity: 2},
      { item: "Madrid", quantitiy: 3}
    ],
    total: 15000
  };
  const checkOut = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    orders
    .add(newOrder)
    .then((docRef) => console.log(docRef))
    .catch((error) => console.log(error))    

  }

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
                <button onClick={() => deleteItem(product)} className="btnEliminar">Eliminar Item</button>
              </div>
            ))
          }
          <button onClick={checkOut}>Finalizar compra</button>
          <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
      )
  
};
}

export default Cart
