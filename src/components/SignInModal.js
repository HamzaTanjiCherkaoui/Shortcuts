import React, { Component } from 'react';
import isModal from './utils/HOCModal';
import {connect} from 'react-redux';
@isModal
class SignInModal extends Component {
    
    render () {
        
        return ( <div>
            <h3> Sign In </h3>
             </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        showModal : state.shortcutsState.showSignInModal , 
     }
}
export default connect(mapStateToProps)(SignInModal);