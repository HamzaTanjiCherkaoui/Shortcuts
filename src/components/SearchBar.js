import React from 'react';
import {connect} from 'react-redux';
import {fetchShortcuts} from '../actions/shortcuts';
import Picker from './common/Picker';
import OsSwitchButton from './OsSwitchButton';
import DisplayBySwitchButton from './DisplayBySwitchButton';
import '../styles/components/SearchBar.css';
class SearchBar extends React.Component {
    
    handleSearch = () => {
        this
            .props
            .dispatch(fetchShortcuts({text: 'zoom'}));
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input
                    type="text"
                    placeholder="Search for shorcuts (ex: Zoom-in , Zoom-out) "
                    className="SearchBar__SearchInput"/>
                <Picker
                    options={['Illustrator', 'Photoshop', 'SublimeText']}
                    onChange={(value) => {
                    console.log(value)
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