import React from 'react';
import '../styles/components/Navigation.css';
export default() => (
    <div className="Navbar">
        <nav class="Navbar__Items">
            <div className="Navbar__Link Navbar__Link-brand">
            <i class="fas fa-ellipsis-v"></i> ShortCuts.io
            </div>
        </nav>
        <nav class="Navbar__Items Navbar__Items--right">
            <div class="Navbar__Link ">
                <a href="#">About</a>
            </div>
            <div class="Navbar__Link ">
                <a href="#">Sign In</a>
            </div>
            <div class=" Button">
                Sign Up
            </div>
        </nav>
    </div>
);