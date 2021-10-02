import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/category/paquetes">
                    Paquetes
                </Link>
                <Link to="/category/vuelos">
                    Vuelos
                </Link>
                <div>Alojamiento</div>
                <div>Contacto</div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar
