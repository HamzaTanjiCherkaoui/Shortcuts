import React, { Component } from 'react';
import isModal from './utils/HOCModal';

@isModal
class ShortcutModal extends Component {
    
    render () {
        const {label,description} = this.props.shortcut;
        return (<div>
             <h2> {label}</h2> 
             
             <p>{description}</p>
             <button onClick={this.props.hideModal} >Got it </button> 
             </div>)
    }
}
export default ShortcutModal;