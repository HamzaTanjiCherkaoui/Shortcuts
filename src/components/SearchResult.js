import React from 'react';
import {connect} from 'react-redux';
import '../styles/components/SearchResult.css';
import ShortcutsList from './ShortcutsList';


const SearchResult = (props) => (
    <div className="SearchResult">
        <ShortcutsList {...props} />           
    </div>
)

const mapStateToProps = (state) => ({shortcuts:state.shortcuts});

export default connect(mapStateToProps)(SearchResult);