import React, { useState } from 'react'
import "./ItemCount.css";

const ItemCount = () => {
    
    let stock = 7;

    const [counter, setCounter] = useState(0);    

    const aumentar = () => {
        if(counter < stock){
            setCounter(counter + 1);
            }        
    };
    const disminuir = () => {
        if(counter > 0){
            setCounter(counter - 1);
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
        </>
    )
}

export default ItemCount
