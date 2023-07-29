import React, { useState } from "react";
import '/public/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div>
                <div className="name">InTheNutss</div>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="">New Arrivals</a></li>
                    <li><a href="">Best Sellers</a></li>
                    <li><a href="">Clothing</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Quienes somos?</a></li>
                </ul>
            </nav>
        </header>
    );
};


export default Header;