import React from 'react'
import "../components/ItemDetail.css"
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

    const {addItem, cart} = useContext(CartContext);
    const [addToCart, setAddToCart] = useState([]);
    const [dirToCart, setDirToCart] = useState(false)

    const onAdd = (counter) => {
        setAddToCart(counter)
        setDirToCart(true)
        addItem(product)
    }

    console.log(cart)
           
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
                {
                    !dirToCart ? 
                    <ItemCount initialStock={20}  onAdd={onAdd}/>  :
                    <Link to="/cart">
                        <button>Continuar al carrito</button>
                    </Link>
                    }
                
            </div>
        </div>
        </>          
    </div>
           )
        
}

export default ItemDetail

            
            