import React from 'react';
import {connect} from 'react-redux';

import '../styles/components/Navigation.css';
import ShortcutCreator from './modals/ShortcutCreator';
import SubscribeModal from './modals/SubscribeModal';
import {showModal} from '../actions/ui';

@connect()
class Navigation extends React.Component {
    showSignInModal = () => {
        this.props.dispatch(showModal('SIGNIN'));
    }
    showSignUpModal = () => {
        this.props.dispatch(showModal('SIGNUP'));
    }
    showSuggestionModal = () => {
        this.props.dispatch(showModal('SHORTCUT_CREATOR'));
    }
    render() {
        return (
            <div className="Navbar">
            <SubscribeModal/>
            <ShortcutCreator/>
                <nav className="Navbar__Items">
                    <div className="Navbar__Link Navbar__Link-brand">
                    <i className="fas fa-keyboard"></i> ShortCuts.io
                    </div>
                </nav>
                <nav className="Navbar__Items Navbar__Items--right">
                    <div className="Navbar__Link ">
                        <a href="">About</a>
                    </div>
                    
                    <a className=" Button" onClick={this.showSuggestionModal}>
                   Suggest a shortcut
                    </a>
                </nav>
            </div>
        );
    }
}
export default Navigation ;
// <div className="Navbar__Link ">
//                         <a  onClick={this.showSignInModal}>Sign In</a>
//                     </div>