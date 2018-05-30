import React from 'react';
import {connect} from 'react-redux';
import {fetchShortcuts} from '../../actions/shortcuts';
import Header from '../Header';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';
import ShortcutModal from '../ShortcutModal';

class HomePage extends React.Component {

    state = {
        modalIsVisible: true
    }

    displayModal = () => {
        this.setState((prevState)=>{
            return {modalIsVisible: true}
        })
    }
    render() {
        return (
            <div>
                <ShortcutModal showModal={this.state.modalIsVisible}/>
                <button onClick={this.displayModal} />
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