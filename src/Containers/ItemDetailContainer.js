import React from 'react'
import ItemDetail from '../components/ItemDetail'
import Item from '../components/Item/Item'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [product, setProduct] = React.useState([]);

    const {id} = useParams()
    console.log(id)

    React.useEffect(()=> {
        const url = `http://localhost:3001/products/${id}`;

        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }else{
                throw response;
            }
        })
        .then((data) => setProduct(data))        
        .catch((error) => console.log(`Error ${error.status}`))
        
    }, []);
    console.log(product)
    return (
        <div>
             <ItemDetail product={product}/> 
        </div>
    )
}

export default ItemDetailContainer
