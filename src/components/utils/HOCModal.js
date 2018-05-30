import React, {Component} from 'react';
import Modal from './SimpleModal';

export default function Hoc(WrappedComponent) {
    return class extends React.Component {
        state = {
            showModal: this.props.showModal
        }
         hideModal = () => {
            this.setState(() => {
                return {showModal: false}
            })
        }
        render() {
            const {children} = this.props;
            return (
                <div>
                    {(this.state.showModal) && <Modal onCloseRequest={this.hideModal}><WrappedComponent hideModal={this.hideModal}/></Modal>
}</div>
            );
        }
    }
}
