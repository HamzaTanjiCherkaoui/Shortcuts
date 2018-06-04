import React from 'react';

import '../styles/components/ShortcutItem.css';
import ShortcutButtons from './ShortcutButtons';

class ShortcutItem extends React.Component {
    render() {
        const {shortcut,handleShortcutItemClick} = this.props ;
        return(
            <div className="ShortcutItem" onClick={()=>(handleShortcutItemClick(shortcut.id))}>
            {shortcut.buttons.map((button,i,buttons)=>(
                <ShortcutButtons button={button} isLast={(buttons.length)!==i+1} key={i} />   
            ))}    
            </div>
        )
    }
}
export default ShortcutItem; 