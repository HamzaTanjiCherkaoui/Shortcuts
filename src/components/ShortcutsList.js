import React from 'react';
import {connect} from 'react-redux';

import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';
import ShortcutModal from './modals/ShortcutModal';
import {getShortcut} from '../actions/shortcuts';
import {showModal} from '../actions/ui';

@connect()
class ShortcutList extends React.Component{

    showShortcutModal = (id) => {
        this.props.dispatch(getShortcut(id));
        this.props.dispatch(showModal('SHORTCUT'));
    }
    
    render() {
        return  (
        <div className="ShortcutsList">
        <ShortcutModal className="Test"/>
            {this.props.shortcuts.map(shortcut=>(<ShortcutItem shortcut={shortcut} key={shortcut.id} handleShortcutItemClick={this.showShortcutModal}/>))}        
        </div>
    ) }
}

export default ShortcutList;
