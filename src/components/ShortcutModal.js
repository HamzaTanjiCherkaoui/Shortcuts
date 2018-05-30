import React, { Component } from 'react';
import isModal from './utils/HOCModal';

@isModal
class ShortcutModal extends Component {
    
    render () {
        return (<div>
             <p>This is the shortcut modal </p> 
             <button onClick={this.props.hideModal} >Got it </button> 
             </div>)
    }
}
export default ShortcutModal;