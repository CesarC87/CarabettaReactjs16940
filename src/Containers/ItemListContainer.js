import ItemList from "../components/ItemList/ItemList"


const ItemListContainer = ({greeting}) => {


    return (
        <>
        <div>
            <h3>{greeting}</h3>
        </div>
        <ItemList/>
        </>
    )
}

export default ItemListContainer
