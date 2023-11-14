import overlayStyles from './modal-overlay.module.css';
import { FunctionComponent, SyntheticEvent } from 'react';

interface IModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay: FunctionComponent<IModalOverlayProps> = ({ onClose }) => {

  const handleOverlayClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={overlayStyles.background} onClick={handleOverlayClick}></div>
  );
}

export default ModalOverlay;
