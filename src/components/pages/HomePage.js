import React from 'react';
import {connect} from 'react-redux';
import {fetchShortcuts} from '../../actions/shortcuts';
import Header from '../Header';
import SearchBar from '../SearchBar';
import SearchResult from '../SearchResult';
import Modal from '../utils/ModalLauncher';
import TestModal from '../testModal';
class HomePage extends React.Component {
    // <Modal showModal={true}>Hello Modal</Modal>
    state = {
        ModalIsVisible: true
    }

    render() {
        return (
            <div>
                <TestModal showModal={this.state.ModalIsVisible}/>
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