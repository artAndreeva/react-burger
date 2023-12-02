import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, FunctionComponent, ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}

const Modal: FunctionComponent<IModalProps> = ({ children, header, onClose }) => {

  const modalRoot = document.getElementById("react-modals") as HTMLElement;

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  const handleEscClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    };
  }

  return ReactDOM.createPortal(
    (
      <>
        <div className={modalStyles.modal}>
          <button className={modalStyles.button} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          {header &&
          <div className={modalStyles.container}>
            <h3 className='text text_type_main-large'>{header}</h3>
          </div>
          }
            {children}
        </div>
        <ModalOverlay onClose={onClose}/>
      </>
    ),
    modalRoot
  );
}

export default Modal;
