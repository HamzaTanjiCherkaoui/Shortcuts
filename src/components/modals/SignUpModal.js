import React, { Component } from 'react';
import isModal from '../utils/HOCModal';

import '../../styles/components/SignUpModal.css';

 
class SignUpModal extends Component {
    
    render () {
        return ( <div>
            <h3> Sign UP </h3>
            <button onClick={this.props.hideModal}> OK </button>
             </div>)
    }
}

export default isModal('SIGNUP')(SignUpModal);