import React from 'react';
import SimpleModal from './SimpleModal';

class ModalLauncher extends React.Component {
    constructor(props) {
        super(props);
        this.onCloseRequest = this.onCloseRequest.bind(this);
        this.state = {
            showModal: this.props.showModal || false,
          };
    }

    onCloseRequest() {
        
        this.setState(()=>({ showModal: false }));

    }
    render() {
        const {children} = this.props;
        return (
            <div>
            {(this.state.showModal) && 
                <SimpleModal onCloseRequest={this.onCloseRequest}>{children}</SimpleModal>
            }</div>
        );
    }
}

export default ModalLauncher;