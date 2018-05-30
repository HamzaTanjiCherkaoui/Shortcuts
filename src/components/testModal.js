import React, { Component } from 'react';
import isModal from './utils/HOCModal';
class TestModal extends Component {
    render () {
        return (<div>
             <p>hello Modal</p> 
             <button onClick={this.props.hideModal} >closeModal</button> 
             </div>)
    }
}
export default isModal(TestModal);