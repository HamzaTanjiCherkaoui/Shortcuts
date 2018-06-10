import React, { Component } from 'react';
import isModal from '../utils/HOCModal';

import '../../styles/components/SubscribeModal.css';


class SubscribeModal extends Component {    
    render () {
        return ( <div>
            <h3> Subscribe to the next Version of Shortcuts :  </h3>
            <input placeholder="email" />
            <button onClick={this.props.hideModal}> keep me notifed </button>
             </div>)
    }
}
export default isModal('SUBSCRIBE') (SubscribeModal);