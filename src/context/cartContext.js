import { createContext }  from "react";
import { useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el provider
export const CartProvider = ({children}) => { // Pasamos como parámetro a children, 
                                              // que va a ser todo lo que esté dentro de provider.
    const [cart, setCart] = useState([]);

    const addItem = (product) => {
        setCart([...cart , product] )
    }
    
    return <CartContext.Provider value={{cart, addItem}}>
        {children}
    </CartContext.Provider>
}