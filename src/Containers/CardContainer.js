import React from 'react'
import Card from '../components/Card';

const CardContainer = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(()=> {
        const url = "http://localhost:3002/products";

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

    const comprarProducto = (product) => {
        console.log(`Compraste el producto: ${product}`);
    }
    return (
        <div>
            {data?.map((producto) => {
                return (
                    <Card
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image}
                        comprar={comprarProducto}
                        />
                )
            })}
        </div>
    )
}

export default CardContainer

const productos = [
    {
        id:0,
        title: "Teclado",
        description: "Teclado wi-fi última generación",
        image:"https://picodotdev.github.io/blog-bitix/2020/12/guia-basica-sobre-teclados-mecanicos-para-ordenador/images/ducky-one-2-tkl_hu354ab0c3d09f385c997f31ff19e237d6_461539_1040x0_resize_box_3.png"
    },
    {
        id:1,
        title: "Auriculares",
        description: "Auriculates blueTooth",
        image:"https://arsonyb2c.vteximg.com.br/arquivos/ids/274972-1000-1000/b789488955522f13ffb4778bd08465c6.jpg?v=637033504642200000"
    },
    {
        id:2,
        title: "Micrófono",
        description: "Micrófono para streaming",
        image:"https://m.media-amazon.com/images/I/31bSv5EqJGL._SL500_.jpg"
    },
    {
        id:3,
        title: "Casco VR",
        description: "Viscor de realidad virtual",
        image:"https://m.media-amazon.com/images/I/51wpK-7FfNL._AC_SX466_.jpg"
    }
]