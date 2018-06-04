import React, { Component } from 'react';
import isModal from '../utils/HOCModal';

import '../../styles/components/ShortcutCreator.css';

@isModal('SHORTCUT_CREATOR') 
class ShortcutCreator extends Component {
    state ={shortcutButtons : []} ;
    componentDidMount(){
        window.addEventListener('keyup',this.handleKeyUp,false);
        
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }

    handleKeyUp = (e) => {
        e.preventDefault();
        if(this.state.shortcutButtons.length === 3) return;
        this.setState((prevState)=>{
            return {
                shortcutButtons : prevState.shortcutButtons.concat((e.key==='Control')?'Ctrl':e.key)
            }
        })
        
    }

    render () {
        return ( 
            <div className="shortcutCreator">
            <h3> Create Yout Shortcut :  </h3>
            <p><i>Type your shortcut buttons one at a  time </i></p>
            <div className="creatorArea">
            {this.state.shortcutButtons.map(button=>(<div className="shortcutButton" key={button}>{button}</div>))}
            </div>
            <div className="buttons">
            <button onClick={()=>{}} className="resetButton"> Reset </button>
            <button onClick={this.props.hideModal} className="creatorButton"> Submit </button>
            </div>
            </div>)
             
    }
}

export default ShortcutCreator;