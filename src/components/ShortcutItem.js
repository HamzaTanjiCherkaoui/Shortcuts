import React from 'react';
import '../styles/components/ShortcutItem.css';
import ShortcutButtons from './ShortcutButtons';

export default({shortcut}) => (
    
    <div className="ShortcutItem">
    {shortcut.buttons.map((button,i,buttons)=>(
        <ShortcutButtons button={button} isLast={(buttons.length)!==i+1} key={i} />   
    ))}    
    </div>
)