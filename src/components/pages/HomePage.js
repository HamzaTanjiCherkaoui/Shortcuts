import React from 'react';
import {connect} from 'react-redux';
import {fetchShortcuts} from '../../actions/shortcuts';
import Header from '../Header';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SearchBar/>
                <SearchResult/>
            </div>
        );
    }
    componentDidMount() {
        this
            .props
            .dispatch(fetchShortcuts());
    }
}

export default connect()(HomePage);