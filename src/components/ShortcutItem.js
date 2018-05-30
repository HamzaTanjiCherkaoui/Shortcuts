import React from 'react';
import '../styles/components/ShortcutItem.css';
import ShortcutButtons from './ShortcutButtons';

class ShortcutItem extends React.Component {
    handleShortcutItemClick = (id) => {
        console.log("displaying shortcut",id);
    }
    render() {
        const {shortcut} = this.props ;
        return(
            <div className="ShortcutItem" onClick={()=>(this.handleShortcutItemClick(shortcut.id))}>
            {shortcut.buttons.map((button,i,buttons)=>(
                <ShortcutButtons button={button} isLast={(buttons.length)!==i+1} key={i} />   
            ))}    
            </div>
        )
    }
}
export default ShortcutItem; 