import React, { Component } from 'react';
import isModal from './utils/HOCModal';

class TestModal extends Component {
    constructor(props) {
        super(props);
    }    
    render () {
        return (<div>
             <p>hello Modal</p> 
             <button onClick={this.props.hideModal} >closeModal</button> 
             </div>)
    }
}
export default isModal(TestModal);