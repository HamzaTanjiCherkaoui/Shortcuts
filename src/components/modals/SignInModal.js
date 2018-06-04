import React, { Component } from 'react';
import isModal from '../utils/HOCModal';

import '../../styles/components/SignInModal.css';

@isModal('SIGNIN') 
class SignInModal extends Component {
    
    render () {
        return ( <div>
            <h3> Sign In </h3>
            <button onClick={this.props.hideModal}> OK </button>
             </div>)
    }
}

export default SignInModal;