import React, { Component } from 'react';
import isModal from './utils/HOCModal';
import {connect} from 'react-redux';
import '../styles/components/SignInModal.css';

@isModal('SIGNIN') 
class SignInModal extends Component {
    
    render () {
        return ( <div>
            <h3> Sign In </h3>
             </div>)
    }
}

const mapStateToProps = (state) => {

    //TODO handle the undefined handling outiside the component or see how to get ride of it
    if(state.ui.displayModal.length === 0) {
        
        return { showModal : false}
    }
    return {
        showModal : state.ui.displayModal.find(modal => modal.name === 'SIGNIN').show || false, 
     }
}
export default connect(mapStateToProps)(SignInModal);