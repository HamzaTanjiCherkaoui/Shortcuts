import React from 'react';
import '../../styles/components/utils/Modal.css';
class SimpleModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    componentDidMount(){
        window.addEventListener('keyup',this.handleKeyUp,false);
        document.addEventListener('click',this.handleOutsideClick,false);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    handleKeyUp(e) {
        const {onCloseRequest} = this.props;
        const keys = {
            27: () => {
              e.preventDefault();
              onCloseRequest(); 
              window.removeEventListener('keyup', this.handleKeyUp, false);
            },
          };
      
          if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;
    
        if (this.modal) {
          if (!this.modal.contains(e.target)) {
            onCloseRequest();
            document.removeEventListener('click', this.handleOutsideClick, false);
          }
        }
      }

    render() {
        const {children,onCloseRequest} = this.props;
       return ( <div className="modal__overlay">
            <div className="modal" ref={node => (this.modal=node)}>
            <div className="modal__content">
                {children}
            </div>
            <button className="modal__closeButton" onClick={onCloseRequest}>X</button>
            </div>
        </div>)
    }
}

export default SimpleModal ;