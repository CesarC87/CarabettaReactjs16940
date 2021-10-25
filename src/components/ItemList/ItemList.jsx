import * as React from "react";
import Card from "../Card/Card";
import "./ItemList.css";
import Slider from "react-slick"




const ItemList = ({data}) => {

 return (
    <div className="ItemList">
            {data?.map((producto) => {
                return (
                    <>   
                       
                    <Card
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        productId={producto.id}
                        // comprar={comprarProducto}
                        />
                    </>
                )
            })}
        </div>
           )
        
}

export default ItemList

