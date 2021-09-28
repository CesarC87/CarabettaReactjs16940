import React from 'react'
import { useParams } from 'react-router';
import ItemList from '../components/ItemList/ItemList';

const CategoryContainer = () => {
    const [data, setData] = React.useState([]);
    const {category} = useParams();

    React.useEffect(()=> {
        const url = "http://localhost:3001/products";

        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            }else{
                throw response;
            }
        })
        .then((data) => data.filter((product) => product.category === category))       
        .then((data) => setData(data)) 
        .catch((error) => console.log(`Error ${error.status}`))
        
    }, [category]);

    return (
        <>        
        <ItemList data={data}/>
        </>
    )
}

export default CategoryContainer
