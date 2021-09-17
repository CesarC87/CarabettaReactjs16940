import React from 'react'
import "./ItemCount.css";

const ItemCount = () => {
    let clicks = 0;
    function click() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    
    return (        
        <>
        <div className="masMenos">            
            <button onClick="click()">-</button>
            <p id="clicks">0</p>
            <button onClick="click()">+</button>            
        </div>
        <div>
            <button onClick="click()">Agregar</button>
        </div>
        </>
    )
}

export default ItemCount
