import React  from 'react';
import Modal from './SimpleModal';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/ui';

export default (modalName)=>(WrappedComponent) => {
    
      class HOC extends React.Component {
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
   
         static mapStateToProps = (state) => {
    
            if(state.ui.displayModal.find(modal => modal.name === modalName) === undefined) {
                return { showModal : false}
            }
            return {
                showModal : state.ui.displayModal.find(modal => modal.name === modalName).show , 
             }
        }
    }
    return connect(HOC.mapStateToProps)(HOC);
}
