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
                <Link to="/category/ropa">
                    Ropa
                </Link>
                <Link to="/category/accesorio">
                    Acesorios
                </Link>
                <div>Operaciones</div>
                <div>Contacto</div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar
