import React from 'react'
import "../components/ItemDetail.css"
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
    
           
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
                <ItemCount initialStock={20} count={0}/>
            </div>
        </div>
        </>          
    </div>
           )
        
}

export default ItemDetail

            
            