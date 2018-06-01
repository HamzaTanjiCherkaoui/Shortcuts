import React from 'react';
import {connect} from 'react-redux';

import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';
import ShortcutModal from './ShortcutModal';
import {getShortcut} from '../actions/shortcuts';
import {showModal} from '../actions/ui';

class ShortcutList extends React.Component{

    showShortcutModal = (id) => {
        this.props.dispatch(getShortcut(id));
        this.props.dispatch(showModal('SHORTCUT'));
    }
    
    render() {
        return  (
        <div className="ShortcutsList">
        <ShortcutModal />
            {this.props.shortcuts.map(shortcut=>(<ShortcutItem shortcut={shortcut} key={shortcut.id} handleShortcutItemClick={this.showShortcutModal}/>))}        
        </div>
    ) }
}

export default connect()(ShortcutList);
