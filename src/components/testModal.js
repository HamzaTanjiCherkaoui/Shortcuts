import React, { Component } from 'react';
import isModal from './utils/HOCModal';

@isModal

class TestModal extends Component {
    render () {
        return (<div>
             <p>hello Modal</p> 
             <button onClick={this.props.hideModal} >closeModal</button> 
             </div>)
    }
}
export default TestModal;