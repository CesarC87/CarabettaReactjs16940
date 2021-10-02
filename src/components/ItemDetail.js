import React from 'react'

const ItemDetail = ({product}) => {
    
           
 return (
    <div>             
        <>
        <ul key={product.id}>
            <li>Producto: {product.title}</li>
            <li>Descripción: {product.description}</li>
            <li>Precio: ${product.price}</li>
            <li><img src={product.image} alt={product.title}></img></li>
            <li>Stock disponible: {product.stock}</li>
        </ul>
        </>          
    </div>
           )
        
}

export default ItemDetail
