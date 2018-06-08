import React from 'react';
import {connect} from 'react-redux';
import {setOs} from '../actions/ui';
import '../styles/components/OsSwitchButton.css';
class OsSwitchButton extends React.Component {
   
    state = {switchOs : true};

    handleSwitchOs = () => {
        this.props.dispatch(setOs((this.props.currentOs ==='mac')?'win':'mac'));
    }
    render() {
        return (
            <button className={this.props.currentOs ==='mac'?'SwitchButton':'SwitchButton switch'} onClick={this.handleSwitchOs}> {this.props.currentOs} </button>
        )
    }
}
const mapStateToProps = (state) => { 
    return {currentOs : state.ui.currentOs};
}
export default connect(mapStateToProps)(OsSwitchButton);