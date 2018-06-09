import React from 'react';
import {connect} from 'react-redux';
import '../styles/components/SearchResult.css';
import ShortcutsList from './ShortcutsList';
import {fetchShortcuts} from '../actions/shortcuts';

const mapStateToProps = (state) => {
    const {shortcuts, fetching, fetched} = state.shortcutsState;
    return ({shortcuts, fetching, fetched})
};

@connect(mapStateToProps)
class SearchResult extends React.Component {
    state = {page:1};
     getNextShortcuts = ()=> {
        this
            .props
            .dispatch(fetchShortcuts({page:this.state.page,isNext:true}));
            this.setState((prevState)=>{return {page : prevState.page+1}});
    }
     getPreviousShortcuts = ()=> {
        this
            .props
            .dispatch(fetchShortcuts({page:this.state.page,isNext:false}));
            this.setState((prevState)=>{return {page : prevState.page-1}});
    }
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
                <div className="pagination" >
                {this.state.page!==0 &&<button onClick={this.getPreviousShortcuts}> prev </button>}
                <button onClick={this.getNextShortcuts}> next </button>
                </div>
            </div>
        )
    }
}



export default SearchResult;
