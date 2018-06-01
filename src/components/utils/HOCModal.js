import React  from 'react';
import Modal from './SimpleModal';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/ui';

@connect()
export default (modalName)=>(WrappedComponent) => {
    return class extends React.Component {
        state = {
            showModal: this.props.showModal
        }
        
         hideModal = () => {
            this.setState(() => {
                return {showModal: false}
            })
            this.props.dispatch(hideModal(modalName));
        }
        componentWillReceiveProps=(nextProps)=>  {
            this.setState(() => {
                return {showModal: nextProps.showModal}
            })
        }
        render() {
            return (
                <div>
                    {(this.state.showModal) &&
                        <Modal onCloseRequest={this.hideModal}>
                        <WrappedComponent hideModal={this.hideModal} {...this.props} />
                        </Modal>}
                </div>
            );
        }
    }
}
