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
            console.log(nextProps);
            this.setState(() => {
                return {showModal: nextProps.showModal}
            })
        }
        render() {
            
            return (
                <div>
                    {(this.state.showModal) && <Modal onCloseRequest={this.hideModal}><WrappedComponent hideModal={this.hideModal} {...this.props} /></Modal>
}</div>
            );
        }
    }
}
