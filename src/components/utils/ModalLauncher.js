import React from 'react';
import SimpleModal from './SimpleModal';

class ModalLauncher extends React.Component {
    state = {
        showModal: this.props.showModal || false,
      };
    
    hideModal = ()=> {
        this.setState(()=>({ showModal: false }));
    }
    
    render() {
        const {children} = this.props;
        return (
            <div>
            {(this.state.showModal) && 
                <SimpleModal onCloseRequest={this.hideModal}>{children}</SimpleModal>
            }</div>
        );
    }
}

export default ModalLauncher;