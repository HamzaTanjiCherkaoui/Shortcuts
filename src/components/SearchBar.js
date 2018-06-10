import React from 'react';
import {connect} from 'react-redux';
import {fetchShortcuts} from '../actions/shortcuts';
import {setSearchQuery} from '../actions/ui';
import Picker from './common/Picker';
import OsSwitchButton from './OsSwitchButton';
import DisplayBySwitchButton from './DisplayBySwitchButton';
import '../styles/components/SearchBar.css';
class SearchBar extends React.Component {
    state = {software : 'illustrator' , searchQuery:''};
    handleSearch = () => {
        this
            .props
            .dispatch(fetchShortcuts({software: this.state.software}));
    }
    handleSearchQueryChanged = (event) => {
        this.props.dispatch(setSearchQuery(event));
    }
    handlePickerChange = (software) => {
        this.setState({software})
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input
                    type="text"
                    placeholder="Search for shorcuts (ex: Zoom-in , Zoom-out) "
                    className="SearchBar__SearchInput"   value={this.state.searchQuery} onChange={this.handleSearchQueryChanged}/>
                <Picker
                    options={['illustrator', 'photoshop', 'SublimeText']}
                    onChange={(value) => {
                    this.handlePickerChange(value)
                }}/>
                <button
                    className=" SearchBar__Button"
                    onClick={this.handleSearch}> <i className="fas fa-search"></i></button>
                <OsSwitchButton />
                <DisplayBySwitchButton/>
            </div>
        )
    }
}
export default connect()(SearchBar);