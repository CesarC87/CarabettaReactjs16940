import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <div>Home</div>
                <div>La empresa</div>
                <div>Operaciones</div>
                <div>Contacto</div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar
