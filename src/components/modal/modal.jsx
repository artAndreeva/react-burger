import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ children, header, onClose }) => {

  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    (
    <ModalOverlay onClose={onClose}>
      <div className={modalStyles.modal}>
        <button className={modalStyles.button} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        <div className={modalStyles.container}>
          <h3 className='text text_type_main-large'>{header}</h3>
        </div>
          {children}
      </div>
    </ModalOverlay>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default Modal;
