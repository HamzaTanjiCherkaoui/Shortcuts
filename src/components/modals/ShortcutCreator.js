import React, { Component } from 'react';
import isModal from '../utils/HOCModal';

import '../../styles/components/ShortcutCreator.css';

@isModal('SHORTCUT_CREATOR') 
class ShortcutCreator extends Component {
    state ={shortcutButtons : [],creatorAreaselected:true} ;
    componentDidMount(){
        window.addEventListener('keyup',this.handleKeyUp,false);
        document.addEventListener('click',this.handleOutsideClick,false);
        
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click',this.handleOutsideClick,false);
      }

    handleKeyUp = (e) => {
        e.preventDefault();
        if(!this.state.creatorAreaselected) return;
        
        if(e.key==='Backspace' &&  this.state.shortcutButtons.length !== 0)  {
            this.setState((prevState)=>{
                prevState.shortcutButtons.pop()
                return {
                    shortcutButtons : prevState.shortcutButtons
                }
            })
        }
        else if(this.state.shortcutButtons.length < 3){
            this.setState((prevState)=>{
                return {
                    shortcutButtons : prevState.shortcutButtons.concat((e.key==='Control')?'Ctrl':e.key)
                }
            })
            
        }
        
    }
    handleOnCreatorAreaClick = () => {
        this.setState(()=>({creatorAreaselected:true}));   
    }
    handleOutsideClick= (e) => {
        console.log("handleOutsideClick");
    
        if (this.creatorArea) {
          if (!this.creatorArea.contains(e.target)) {
          
            this.setState(()=>({creatorAreaselected:false}));
          }
        }
      }


    render () {
        return ( 
            <div className="shortcutCreator">
            <h3> Create Yout Shortcut :  </h3>
            <p><i>Type your shortcut buttons one at a  time (use backspace to delete last shortcut button )</i></p>
            <div className={this.state.creatorAreaselected?"creatorArea areaSelected":"creatorArea"}  ref={node => (this.creatorArea=node)} onClick={this.handleOnCreatorAreaClick}>
            {this.state.shortcutButtons.map(button=>(<div className="shortcutButton" key={button}>{button}</div>))}
            </div>
            <div className="shortcutInfo">
            <label> Description : </label>
            <textarea></textarea>
            <label> Tags : </label>
            <textarea></textarea>
            
            </div>
            <div className="buttons">
            <button onClick={()=>{}} className="resetButton"> Reset </button>
            <button onClick={this.props.hideModal} className="creatorButton"> Submit </button>
            </div>
            </div>)
             
    }
}

export default ShortcutCreator;