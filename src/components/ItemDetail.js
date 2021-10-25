import React from 'react'
import "../components/ItemDetail.css"
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Carousel2 from './Carousel2'



const ItemDetail = ({product}) => {

    const {addItem} = useContext(CartContext);
    const [addToCart, setAddToCart] = useState([]);
    const [dirToCart, setDirToCart] = useState(false)

    const onAdd = (counter) => {
        setAddToCart(counter)
        setDirToCart(true)
        addItem({...product , counter:counter})
    }

    console.log(product)
           
 return (
    <div>             
        <>   
        <div className="ItemDetailCards" key={product.id}>
            <div className="ItemDetailCards__izq">
                <span className="ItemDetailCards__izq--title">{product.title}</span>
                <Carousel2 />
               {/* <img className="ItemDetailCards__izq--img" src={product.image} alt={product.title}></img> */}
            </div>
            <div className="ItemDetailCards__der">
                <p className="ItemDetailCards__der--description">{product.description2}</p>
                <span>${product.price}</span>
                {
                    !dirToCart ? 
                    <ItemCount initialStock={20}  onAdd={onAdd} dirToCart={dirToCart}/>  :
                    <Link to="/cart">
                        <button className="btn-finalizar">Finalizar compra</button>
                    </Link>
                    }
                
            </div>
        </div>
        </>          
    </div>
           )
        
}

export default ItemDetail

            
            