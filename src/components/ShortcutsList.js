import React from 'react';
import ShortcutItem from './ShortcutItem';
import '../styles/components/ShortcutsList.css';

const ar = [1,2,3,4,5,6,7];

export default() => (
    <div className="ShortcutsList">
        {ar.map(a=>(<ShortcutItem key={a} />))}        
    </div>
)