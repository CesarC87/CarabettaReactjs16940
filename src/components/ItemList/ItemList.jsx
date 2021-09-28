import * as React from "react";
import Card from "../Card";

const ItemList = ({data}) => {

//     const [items, setItems] = React.useState([]);

//     React.useEffect ( () => {
//         getProductos().then((result) => setItems(result));
//     })
//     const getProductos = () => {
//         return new Promise( (resolve,reject) => {
//         setTimeout(() => { 
//             resolve(productos); 
//         }, 3000);
//     });  }
      

//  const productos = [{id:1 , nombre:"Auriculares"}, 
//                    {id:2 , nombre:"Micrófono"} , 
//                    {id:3 , nombre:"Teclado"}];
    
 return (
    <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {data?.map((producto) => {
                return (
                    <Card
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        productId={producto.id}
                        // comprar={comprarProducto}
                        />
                )
            })}
        </div>
           )
        
}

export default ItemList

