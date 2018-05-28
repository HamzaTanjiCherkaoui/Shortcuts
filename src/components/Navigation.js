import React from 'react';
import '../styles/components/Navigation.css';
export default() => (
    <div className="Navbar">
        <nav className="Navbar__Items">
            <div className="Navbar__Link Navbar__Link-brand">
            <i className="fas fa-ellipsis-v"></i> ShortCuts.io
            </div>
        </nav>
        <nav className="Navbar__Items Navbar__Items--right">
            <div className="Navbar__Link ">
                <a href="#">About</a>
            </div>
            <div className="Navbar__Link ">
                <a href="#">Sign In</a>
            </div>
            <div className=" Button">
                Sign Up
            </div>
        </nav>
    </div>
);