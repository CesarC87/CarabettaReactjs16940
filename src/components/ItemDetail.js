import React from 'react'
import "../components/ItemDetail.css"
import ItemCount from './ItemCount'
import { useState } from 'react'

const ItemDetail = ({product}) => {

    const [addToCart, setAddToCart] = useState([]);

    const onAdd = (counter) => {
        setAddToCart(counter)
        console.log(addToCart)
    }
           
 return (
    <div>             
        <>
        <div className="ItemDetailCards" key={product.id}>
            <div className="ItemDetailCards__izq">
                <span>{product.title}</span>
               <img className="ItemDetailCards__izq--img" src={product.image} alt={product.title}></img>
            </div>
            <div className="ItemDetailCards__der">
                <p>{product.description}</p>
                <span>${product.price}</span>
                <ItemCount initialStock={20}  onAdd={onAdd}/>
            </div>
        </div>
        </>          
    </div>
           )
        
}

export default ItemDetail

            
            