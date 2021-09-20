import React from 'react'
import "./ItemCount.css";

const ItemCount = () => {
    let clicks = 0;
    let stock = 7;

    const aumentar = () => {
        if(clicks < stock){
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;}        
    };
    const disminuir = () => {
        if(clicks > 0){
            clicks -= 1;
            document.getElementById("clicks").innerHTML = clicks;} 
    };
    
    return (        
        <>
        <div className="masMenos">            
            <button onClick={disminuir}>-</button>
            <p id="clicks">0</p>
            <button onClick={aumentar}>+</button>            
        </div>
        <div>
            <button onClick={aumentar}>Agregar</button>
        </div>
        </>
    )
}

export default ItemCount
