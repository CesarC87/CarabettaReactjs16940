import "./NavBar.css";
import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { loginWithGoogle } from "../../firebase/index";
import { ReactComponent as Logo } from '../../images/SVG/Logo/Logo3.svg';
import { Icon } from '@iconify/react';


const NavBar = () => {

    const {cart} = useContext(CartContext)

    return (        
            <nav className="nav">
                <div className="navContainer1">
                <Link to="/">
                    <Logo />
                </Link>                    
                </div>
                <div className="navContainer2">
                <Link to="/">
                    Home
                </Link>
                <Link to="/category/paquetes">
                    <div className="navContainer2__item">
                        <Icon className="navContainer2__item--icono" icon="fluent:luggage-20-regular" />
                        <label>Paquetes</label>
                    </div>
                </Link>
                <Link to="/category/vuelos">
                <div className="navContainer2__item">
                    <Icon className="navContainer2__item--icono" icon="iconoir:airplane" />
                    <label>Vuelos</label>
                </div>
                </Link>
                <Link to="/category/alojamientos">
                <div className="navContainer2__item">
                    <Icon className="navContainer2__item--icono" icon="bx:bx-hotel" />
                    <label>Alojamientos</label>
                </div>
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
