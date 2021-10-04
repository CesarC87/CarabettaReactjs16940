import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./ItemCount.css";

const ItemCount = ({initialStock, count}) => {    
    
    const [stock, setStock] = useState(initialStock);
    const [counter, setCounter] = useState(count);    
    const [addToCart, setAddToCart] = useState([]);

    const aumentar = () => {
        if(stock > 0){
            setCounter(counter + 1);
            setStock(stock - 1);
            }        
    };
    const disminuir = () => {
        if(counter > 0){
            setCounter(counter - 1);
            setStock(stock + 1);
            } 
    };

    const onAdd = () => {
        setAddToCart(counter)
        console.log(addToCart)
    }
        
    return (        
        <>
        <div className="masMenos">            
            <button onClick={disminuir} className="btnMenos">-</button>
            <p id="clicks">{counter}</p>
            <button onClick={aumentar} className="btnMas">+</button>            
        </div>
        <div>
            <button onClick={onAdd} className="btn-agregar">Agregar</button>
        </div>
        <div>
            <p>Stock Disponible: {stock} </p>
        </div>
        <div>
            <Link to="/cart">
            <button>Finalizar Compra</button>
            </Link>
        </div>
        </>
    )
}

export default ItemCount
