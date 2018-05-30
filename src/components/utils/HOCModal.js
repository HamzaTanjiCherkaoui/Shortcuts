import React,{Component} from 'react';
import Modal from './ModalLauncher.js';
export default function Hoc(WrappedComponent){
    return class extends Component{
        constructor(props) {
            super(props);
        }
        render(){
            return (
                <Modal showModal={this.props.showModal}>
                    <WrappedComponent/>
                </Modal>

            );
        }
    } 
}