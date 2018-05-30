import React, {Component} from 'react';
import Modal from './SimpleModal';

export default function Hoc(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                showModal: this.props.showModal
            }
            this.hideModal = this
                .hideModal
                .bind(this);
        }
        hideModal() {

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
