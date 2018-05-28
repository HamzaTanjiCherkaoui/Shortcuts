import React from 'react';
import '../styles/components/SearchBar.css';

export default() => (
    <div className="SearchBar">
        <input type="text" placeholder="Search for shorcuts (ex: Zoom-in , Zoom-out) " className="SearchBar__SearchInput"/>
        <select className="small-margin-left">
            <option>
                PhotoShop
            </option>
            <option>
                Illustrator
            </option>
        </select>

        <button className="small-margin-left SearchBar__Button">Search</button>
    </div>
)