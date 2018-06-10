
import React from 'react';
import {connect} from 'react-redux';
import {setDisplayBy} from '../actions/ui';

class DisplayBySwitchButton extends React.Component {
   

    handleSwitchDisplayBy = () => {
        this.props.dispatch(setDisplayBy((this.props.displayBy ==='shortcuts')?'feature':'shortcuts'));
    }
    render() {
        return (
            <button className={this.props.displayBy ==='shortcuts'?'SwitchButton':'SwitchButton switch'} onClick={this.handleSwitchDisplayBy}> <i className="fas fa-angle-left"></i> {this.props.displayBy} <i className="fas fa-angle-right"></i></button>
        )
    }
}
const mapStateToProps = (state) => { 
    return {displayBy : state.ui.displayBy};
}
export default connect(mapStateToProps)(DisplayBySwitchButton);