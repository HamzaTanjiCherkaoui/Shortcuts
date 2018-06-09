import React, { Component } from 'react';
import isModal from '../utils/HOCModal';
import {connect} from 'react-redux';
import {showModal} from '../../actions/ui';
import '../../styles/components/ShortcutModal.css';

@isModal('SHORTCUT')
class ShortcutModal extends Component {
    
    render () {
        const {loading , shortcut:{label,description,imageFile} ,hideModal } = this.props;
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
                <img src={imageFile} alt="shortcut overview" />
                
                </div>
                

                
            </div>
            <button onClick={()=>{this.props.dispatch(showModal('SUBSCRIBE'))}}>Rate this shortcut </button>
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