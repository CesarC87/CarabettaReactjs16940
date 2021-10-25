import ItemList from "../components/ItemList/ItemList"
import React from "react";
import { getFirestore } from "../firebase";
import CarouselHome from "../components/CarouselHome/CarouselHome";

const ItemListContainer = ({greeting}) => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(()=> {
        const db = getFirestore();
        const productsCollection = db.collection('products');

        setLoading(true);
        productsCollection
        .get()
        .then((querySnapshot) => {
            console.log(querySnapshot);
            if (querySnapshot.empty) {
                console.log("No hay productos para mostrar")
            } else {
                setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } )));
            }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

    }, []);

    return (
        <>
        <div className="carouselContainerHome">
            <CarouselHome />
        </div>        
          
        {loading && <p>Cargando...</p>}
        {error && (
            <p>
                Ha habido un error: {error.status} {error.statusText}
            </p>
        )}        
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer

// React.useEffect(()=> {
//     const url = "http://localhost:3001/products";

//     fetch(url).then((response) => {
//         if (response.ok) {
//             return response.json();
//         }else{
//             throw response;
//         }
//     })
//     .then((data) => setData(data))
//     .then((data) => console.log(data))
//     .catch((error) => console.log(`Error ${error.status}`))
    
// }, []);