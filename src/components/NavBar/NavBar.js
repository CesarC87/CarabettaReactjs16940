import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { loginWithGoogle } from "../../firebase/index";
const NavBar = () => {

    const {cart} = useContext(CartContext)

    return (        
            <nav className="nav">
                <div className="navContainer1">
                    Logo
                </div>
                <div className="navContainer2">
                <Link to="/">
                    Home
                </Link>
                <Link to="/category/paquetes">
                    Paquetes
                </Link>
                <Link to="/category/vuelos">
                    Vuelos
                </Link>
                <Link to="/category/alojamientos">
                    Alojamientos
                </Link>
                <Link to="/category/vuelos">
                    Contacto
                </Link>
                <Link to="/Cart" className="toCart">
                    <CartWidget />
                    {
                        cart.length !== 0 && <span className="h5 mx-1">{cart.length}</span>
                    }
                </Link>
                {/* <button onClick={loginWithGoogle} className="logIn">Ingresar</button> */}
                
                </div>
            </nav>
        
    )
}

export default NavBar
