import React, { Component } from 'react';
import isModal from './utils/HOCModal';
import {connect} from 'react-redux';
@isModal
class ShortcutModal extends Component {
    
    render () {
        
        return ( <div>
            {this.props.loading && <h3>loading</h3>}
            {!this.props.loading && 
            <div>
             <h2> {this.props.shortcut.label}</h2> 
             <p>{this.props.shortcut.description}</p>
             <button onClick={this.props.hideModal} >Got it </button> 
            </div>}
             </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        shortcut : state.shortcutsState.selectedShortcut , 
        loading : state.shortcutsState.loadingSelectedShortcut
     }
}
export default connect(mapStateToProps)(ShortcutModal);