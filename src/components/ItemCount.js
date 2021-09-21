import React, { useState } from 'react'
import "./ItemCount.css";

const ItemCount = ({initialStock, count}) => {
    
    
    const [stock, setStock] = useState(initialStock);
    const [counter, setCounter] = useState(count);    

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
        
    return (        
        <>
        <div className="masMenos">            
            <button onClick={disminuir}>-</button>
            <p id="clicks">{counter}</p>
            <button onClick={aumentar}>+</button>            
        </div>
        <div>
            <button>Agregar</button>
        </div>
        <div>
            {stock}
        </div>
        </>
    )
}

export default ItemCount
