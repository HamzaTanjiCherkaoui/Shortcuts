import React, { Component } from 'react';
import isModal from '../utils/HOCModal';
import {connect} from 'react-redux';

import '../../styles/components/ShortcutModal.css';

@isModal('SHORTCUT')
class ShortcutModal extends Component {
    
    render () {
        const {loading , shortcut:{label,description} ,hideModal } = this.props;
        return ( <div>
            {loading && <h3>loading</h3>}
            {!loading && 
                <div>
            <div className="ShortcutModalContent">
                <div className="shortcutDetails">
                <h2> {label}</h2> 
                <p>{description}</p>
                </div>
                <div className="shortcutOverview">
                <img src="./images/shortcut.png" alt="shortcut overview" />
                </div>

                
            </div>
            <button onClick={hideModal} className="ShortcutModalButton">Gotcha </button>
        </div> }

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