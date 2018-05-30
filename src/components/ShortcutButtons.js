import React from 'react';
import '../styles/components/ShortcutItem.css';

export default({button,isLast}) => (

    <div className="buttons">
        <div className="ShortcutItem__Button">{button}</div>
        {(isLast) && <div className="ShortcutItem__Separator">+</div>}
    </div>

)