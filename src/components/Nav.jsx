import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg">
                <Link className="navbar-brand" to="/">SneakFashion</Link>
                <Link className="nav-sublink" to="/">New Arrivals</Link>
                <Link className="nav-sublink" to="/">Clothing</Link>
                <Link className="nav-sublink" to="/">Brands</Link>
                <Link className="nav-link-cart ml-auto" to="/Cart"><i className="fas fa-shopping-cart"></i></Link>
            </nav>
        </div>

    );

}

export default Nav;
