import React from 'react'

const ItemDetail = ({Item}) => {
    const [description, setDescription] = React.useState([]);

    React.useEffect(()=> {
        const url = "http://localhost:3002/products/0";

        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }else{
                throw response;
            }
        })
        .then((data) => setDescription(data))
        .then((data) => console.log(data))
        .catch((error) => console.log(`Error ${error.status}`))
        
    }, []);
           
 return (
    <div>             
        <>
        <ul>
            <li key={description.id}>{description.title}</li>
            <li key={description.id}>{description.description}</li>
            <li key={description.id}>{description.price}</li>
            <li key={description.id}>{description.image}</li>
        </ul>
        </>          
    </div>
           )
        
}

export default ItemDetail
