import React from 'react'

const ItemCount = () => {
    let clicks = 0;
    function click() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    
    return (        
        <div>
            <button onClick="click()">Agregar</button>
            <p id="clicks">0</p>
        </div>
    )
}

export default ItemCount
