import React from 'react';
import {connect} from 'react-redux';

import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';
import ShortcutModal from './modals/ShortcutModal';
import {getShortcut} from '../actions/shortcuts';
import {showModal} from '../actions/ui';

const mapStateToProps = (state) => {
    return {currentOs: state.ui.currentOs};
}
@connect(mapStateToProps)
class ShortcutList extends React.Component{

    showShortcutModal = (id) => {
        this.props.dispatch(getShortcut(id));
        this.props.dispatch(showModal('SHORTCUT'));
    }
    
    render() {
        return  (
        <div className="ShortcutsList">
        <ShortcutModal/>
        {(this.props.shortcuts.length===0 || this.props.shortcuts.every(shortcut => shortcut
            .buttons[this.props.currentOs] ===undefined )) && <p> no shortcuts to show for your request</p>}
            {this.props.shortcuts.map(shortcut=>(shortcut
                .buttons[this.props.currentOs] && <ShortcutItem shortcut={shortcut} key={shortcut.id} handleShortcutItemClick={this.showShortcutModal}/>))}        
        </div>
    ) }
}

export default ShortcutList;
