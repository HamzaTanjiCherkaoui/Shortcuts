import React from 'react';
import {connect} from 'react-redux';
import '../styles/components/SearchResult.css';
import ShortcutsList from './ShortcutsList';

const mapStateToProps = (state) => {
    const {shortcuts, fetching, fetched} = state.shortcutsState;
    return ({shortcuts, fetching, fetched})
};

@connect(mapStateToProps)
class SearchResult extends React.Component {
    render() {
        const {shortcuts, fetching, fetched} = this.props;
        return (
            <div className="SearchResult">
                {fetching && 
                    
              <div className="loading-placeholder">
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              <div className="animated-background shortcutLoader"></div>
              </div>
              
                }
                {fetched && <ShortcutsList shortcuts={shortcuts}/>}
            </div>
        )
    }
}



export default SearchResult;
