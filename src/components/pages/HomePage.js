import React from 'react';
import {connect} from 'react-redux';
import {setShortcuts} from '../../actions/shortcuts';
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
this.props.dispatch(setShortcuts());
    }
}

export default connect()(HomePage);