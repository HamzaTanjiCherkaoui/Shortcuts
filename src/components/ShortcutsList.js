import React from 'react';
import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';

export default(props) => (
    <div className="ShortcutsList">
        {props.shortcuts.map(shortcut=>(<ShortcutItem shortcut={shortcut} key={shortcut.id} />))}        
    </div>
) 