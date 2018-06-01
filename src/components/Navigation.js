import React from 'react';
import {connect} from 'react-redux';

import '../styles/components/Navigation.css';
import {showSignInModal} from '../actions/shortcuts';

@connect()
class Navigation extends React.Component {
    showSignInModal = () => {
        this.props.dispatch(showSignInModal());
    }
    render() {
        return (
            <div className="Navbar">
                <nav className="Navbar__Items">
                    <div className="Navbar__Link Navbar__Link-brand">
                    <i className="fas fa-keyboard"></i> ShortCuts.io
                    </div>
                </nav>
                <nav className="Navbar__Items Navbar__Items--right">
                    <div className="Navbar__Link ">
                        <a href="">About</a>
                    </div>
                    <div className="Navbar__Link ">
                        <a  onClick={this.showSignInModal}>Sign In</a>
                    </div>
                    <div className=" Button">
                        Sign Up
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navigation ;