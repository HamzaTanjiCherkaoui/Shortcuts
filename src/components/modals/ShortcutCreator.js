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
    reverse(){
        let array = this;
        array.forEach((item,i)=>{
            if(i<(Math.floor(array.length-1)/2)) 
            {let temp = array[i];
            array[i] = array[array.length-i-1];
            array[array.length-i-1]=temp;
            console.log(array);
            }
            
        })
    }
    handleKeyUp = (e) => {
        e.preventDefault();
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
            <p><i>Type your shortcut in one time </i></p>
            <div className="creatorArea">
            <div class="creatorButtons">
            {this.state.shortcutButtons.map(button=>(<div className="shortcutButton" key={button}>{button}</div>))}
            </div> 
            </div>
            <div className="buttons">
            <button onClick={()=>{}} className="resetButton"> Reset </button>
            <button onClick={this.props.hideModal} className="creatorButton"> Create </button>
            </div>
            </div>)
             
    }
}

export default ShortcutCreator;