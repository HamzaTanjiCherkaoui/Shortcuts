import React  from 'react';
import Modal from './SimpleModal';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/ui';

export default (modalName)=>(WrappedComponent) => {
    
      class HOCModal extends React.Component {
        state = {
            showModal: this.props.showModal
        }
        
         hideModal = () => {
            this.setState(() => {
                return {showModal: false}
            })
            this.props.dispatch(hideModal(modalName));
        }
        componentWillReceiveProps=({showModal})=>  {
            this.setState(() => {
                return {showModal}
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
         static mapStateToProps = (state) => {
             const {displayModal} = state.ui;
             
            if(displayModal.find(modal => modal.name === modalName) === undefined) {
                return { showModal : false}
            }
            return {
                showModal : displayModal.find(modal => modal.name === modalName).show , 
             }
        }
    }
    return connect(HOCModal.mapStateToProps)(HOCModal);
}
