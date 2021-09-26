import * as React from "react";

const ItemList = () => {

    const [items, setItems] = React.useState([]);

    React.useEffect ( () => {
        getProductos().then((result) => setItems(result));
    })
    const getProductos = () => {
        return new Promise( (resolve,reject) => {
        setTimeout(() => { 
            resolve(productos); 
        }, 3000);
    });  }
      

 const productos = [{id:1 , nombre:"Auriculares"}, 
                   {id:2 , nombre:"Micrófono"} , 
                   {id:3 , nombre:"Teclado"}];
    
 return (
    <ul>
        {items.map((prod) => {
        return <li key={prod.id}>{prod.nombre}</li>;
        })}       

    </ul>
           )
        
}

export default ItemList

