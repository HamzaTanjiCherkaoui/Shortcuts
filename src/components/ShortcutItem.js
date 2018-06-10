import React from 'react';
import {connect} from 'react-redux';

import '../styles/components/ShortcutItem.css';
import ShortcutButtons from './ShortcutButtons';

const mapStateToProps = (state) => {
    return {currentOs: state.ui.currentOs, displayBy: state.ui.displayBy};
}
@connect(mapStateToProps)
class ShortcutItem extends React.Component {
    render() {
        const {shortcut, handleShortcutItemClick, currentOs, displayBy} = this.props;

        return (
            <div
                className="ShortcutItem"
                onClick={() => (handleShortcutItemClick(shortcut.id))}>

                {displayBy === 'shortcuts'
                    ? (
                        <div className="flex">
                        <div className="software">
                        <img src = {"./images/softwaresIcons/"+shortcut.software+".png"} />
                        </div>
                        {shortcut
                                .buttons[currentOs]
                                .map((button, i, buttons) => (<ShortcutButtons button={button} isLast={(buttons.length) !== i + 1} key={i}/>))}</div>
                    )
                    : (<div>
                        <div className="software">
                        <img src = {"./images/softwaresIcons/"+shortcut.software+".png"} />
                        </div>
                        <div className="feature">{shortcut.label}</div>
                        </div>
                    )}
            </div>
        )
    }
}

export default ShortcutItem;