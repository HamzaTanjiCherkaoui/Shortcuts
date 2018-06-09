import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addShortcut} from '../../actions/shortcuts';
import isModal from '../utils/HOCModal';
import '../../styles/components/ShortcutCreator.css';

@connect()@isModal('SHORTCUT_CREATOR')
class ShortcutCreator extends Component {
    state = {
        shortcutButtons: [],
        creatorAreaselected: true,
        description: "",
        label: "",
        visible: false,
        imageFile: null,
        selectedOs:'mac'
    };
    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);

    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleKeyUp = (e) => {
        e.preventDefault();
        if (!this.state.creatorAreaselected) 
            return;
        
        if (e.key === 'Backspace' && this.state.shortcutButtons.length !== 0) {
            this.setState((prevState) => {
                prevState
                    .shortcutButtons
                    .pop()
                return {shortcutButtons: prevState.shortcutButtons}
            })
        } else if (this.state.shortcutButtons.length < 3) {
            this.setState((prevState) => {
                return {
                    shortcutButtons: prevState
                        .shortcutButtons
                        .concat((e.key === 'Control')
                            ? 'Ctrl'
                            : e.key)
                }
            })

        }

    }
    handleOnCreatorAreaClick = () => {
        this.setState(() => ({creatorAreaselected: true}));
    }
    handleOutsideClick = (e) => {
        if (this.creatorArea) {
            if (!this.creatorArea.contains(e.target)) {
                this.setState(() => ({creatorAreaselected: false}));
            }
        }
    }
    resetShortcutButtons = () => {
        this.setState(() => ({shortcutButtons: [], description: '', label: '' , selectedOs : ''}));
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    createShortcut = (e) => {
        const {label, description, imageFile, visible , selectedOs} = this.state;
        e.preventDefault();
        this
            .props
            .dispatch(addShortcut({buttons: this.state.shortcutButtons, description, label, imageFile, visible , selectedOs}));
    }
    handleFileUpload = (e) => {
        const imageFile = e.target.files[0];
        this.setState(() => ({imageFile}));

    };
    render() {
        return (
            <div className="shortcutCreator">
                <h3>
                    Create Yout Shortcut :
                </h3>
                <form onSubmit={this.createShortcut} encType="multipart/form-data">
                    <div
                        className={this.state.creatorAreaselected
                        ? "creatorArea areaSelected"
                        : "creatorArea"}
                        ref={node => (this.creatorArea = node)}
                        onClick={this.handleOnCreatorAreaClick}>
                        {!this.state.creatorAreaselected && <p className="clickOnArea">
                            click on the area to type your shortcut
                        </p>}
                        {this.state.shortcutButtons.length === 0 && <p>
                            <i>start typing your shortcut buttons one at a time
                            </i>
                        </p>}
                        {this
                            .state
                            .shortcutButtons
                            .map(button => (
                                <div className="shortcutButton" key={button}>{button}</div>
                            ))}
                    </div>
                    <div className="shortcutInfo">
                        <label>
                            Description :
                        </label>
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}></textarea>
                        <label>
                            Label :
                        </label>
                        <textarea
                            name="label"
                            value={this.state.label}
                            onChange={this.handleInputChange}></textarea>
                        <label>
                            OS :
                        </label>
                        <select name="selectedOs" value={this.state.selectedOs} onChange={this.handleInputChange}>
                        <option value="win">Windows </option>
                        <option value="mac">MacOs </option>
                        </select>
                        <label>
                            Shortcut Gif :
                        </label>
                        <input type="file" onChange={this.handleFileUpload} accept="image/*"/>

                    </div>
                    <div className="buttons">
                        <button onClick={this.resetShortcutButtons} className="resetButton">
                            Reset
                        </button>
                        <button className="creatorButton">
                            Submit
                        </button>
                        
                    </div>
                </form>
                            
            </div>
        )

    }
}

export default ShortcutCreator;