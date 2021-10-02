import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (        
            <nav className="nav">
                <div className="navContainer">
                <Link to="/">
                    Home
                </Link>
                <Link to="/category/paquetes">
                    Paquetes
                </Link>
                <Link to="/category/vuelos">
                    Vuelos
                </Link>
                <Link to="/category/vuelos">
                    Alojamientos
                </Link>
                <Link to="/category/vuelos">
                    Contacto
                </Link>
                <Link to="/category/vuelos">
                    <CartWidget />
                </Link>
                
                </div>
            </nav>
        
    )
}

export default NavBar
