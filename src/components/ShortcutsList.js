import React from 'react';
import {connect} from 'react-redux';

import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';
import ShortcutModal from './ShortcutModal';
import {getShortcut} from '../actions/shortcuts';

class ShortcutList extends React.Component{
    state = {
        modalIsVisible: false,
        shortcut : undefined
    }

    showShortcutModal = (id) => {
        this.props.dispatch(getShortcut(id));
        this.setState((prevState)=>{
            return {
                modalIsVisible: true,
                
            
            }
        })
    }
    
    render() {
        return  (
        <div className="ShortcutsList">
        <ShortcutModal showModal={this.state.modalIsVisible} shortcut={this.state.shortcut} />
            {this.props.shortcuts.map(shortcut=>(<ShortcutItem shortcut={shortcut} key={shortcut.id} handleShortcutItemClick={this.showShortcutModal}/>))}        
        </div>
    ) }
}

export default connect()(ShortcutList);