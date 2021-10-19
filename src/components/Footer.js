import React from 'react'
import "../components/Footer.css"
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__redes">
            <Link to="/">
                <FaFacebook/>
            </Link>
            <Link to="/">
                <FaInstagram/>
            </Link>
            <Link to="/">
                <FaTwitter/>
            </Link>
            </div>
        </footer>
    )
}

export default Footer
