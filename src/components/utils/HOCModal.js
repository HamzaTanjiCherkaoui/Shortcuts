import React  from 'react';
import Modal from './SimpleModal';

export default (WrappedComponent) => {
    return class extends React.Component {
        state = {
            showModal: this.props.showModal
        }
         hideModal = () => {
            this.setState(() => {
                return {showModal: false}
            })
        }
        componentWillReceiveProps=(nextProps)=>  {
            this.setState(() => {
                return {showModal: nextProps.showModal}
            })
        }
        render() {
            
            return (
                <div>
                    {(this.state.showModal) && <Modal onCloseRequest={this.hideModal}><WrappedComponent hideModal={this.hideModal} /></Modal>
}</div>
            );
        }
    }
}
