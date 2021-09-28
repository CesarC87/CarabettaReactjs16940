import ItemList from "../components/ItemList/ItemList"
import React from "react";


const ItemListContainer = ({greeting}) => {

    const [data, setData] = React.useState([]);

    React.useEffect(()=> {
        const url = "http://localhost:3001/products";

        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }else{
                throw response;
            }
        })
        .then((data) => setData(data))
        .then((data) => console.log(data))
        .catch((error) => console.log(`Error ${error.status}`))
        
    }, []);

    return (
        <>        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer
