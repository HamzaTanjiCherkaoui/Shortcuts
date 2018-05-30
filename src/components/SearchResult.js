import React from 'react';
import {connect} from 'react-redux';
import '../styles/components/SearchResult.css';
import ShortcutsList from './ShortcutsList';


class SearchResult extends React.Component {
    render() {
        const {shortcuts, fetching, fetched} = this.props;
        return (
            <div className="SearchResult">
                {fetching && <p>
                    loading ...
                </p>}
                {fetched && <ShortcutsList shortcuts={shortcuts}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {shortcuts, fetching, fetched} = state.shortcutsState;
    return ({shortcuts, fetching, fetched})
};

export default connect(mapStateToProps)(SearchResult);
