import React from 'react';
import {connect} from 'react-redux';

import '../styles/components/ShortcutItem.css';
import ShortcutButtons from './ShortcutButtons';

class ShortcutItem extends React.Component {
    render() {
        const {shortcut} = this.props ;
        return(
            <div className="ShortcutItem" onClick={()=>(this.props.handleShortcutItemClick(shortcut.id))}>
            {shortcut.buttons.map((button,i,buttons)=>(
                <ShortcutButtons button={button} isLast={(buttons.length)!==i+1} key={i} />   
            ))}    
            </div>
        )
    }
}
export default connect()(ShortcutItem); 