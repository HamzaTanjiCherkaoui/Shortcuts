import React from 'react';
import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';
import ShortcutModal from './ShortcutModal';

class ShortcutList extends React.Component{
    state = {
        modalIsVisible: false,
        shortcut : undefined
    }

    showShortcutModal = (id) => {

        this.setState((prevState)=>{
            return {
                modalIsVisible: true,
                shortcut : this.props.shortcuts[id]
            
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

export default ShortcutList;