import React, { Component } from 'react';
import isModal from './utils/HOCModal';
import {connect} from 'react-redux';

@isModal('SHORTCUT')
class ShortcutModal extends Component {
    
    render () {
        const {loading , shortcut:{label,description} ,hideModal } = this.props;
        return ( <div>
            {loading && <h3>loading</h3>}
            {!loading && 
            <div>
                <h2> {label}</h2> 
                <p>{description}</p>
                <button onClick={hideModal} >Got it </button> 
            </div>}
             </div>)
    }
}

const mapStateToProps = (state) => {
    
    return {
        shortcut : state.shortcutsState.selectedShortcut , 
        loading : state.shortcutsState.loadingSelectedShortcut,
     }
}
export default connect(mapStateToProps)(ShortcutModal);