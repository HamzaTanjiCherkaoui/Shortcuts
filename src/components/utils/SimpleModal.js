import React from 'react';
import '../../styles/components/utils/Modal.css';
class SimpleModal extends React.Component {
    
    componentDidMount(){
        window.addEventListener('keyup',this.handleKeyUp,false);
        document.addEventListener('click',this.handleOutsideClick,false);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    handleKeyUp = (e) => {
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

    handleOutsideClick= (e) => {
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
            <button className="modal__closeButton" onClick={onCloseRequest}>X</button>
            <div className="modal__content">
                {children}
            </div>
            
            </div>
        </div>)
    }
}

export default SimpleModal ;