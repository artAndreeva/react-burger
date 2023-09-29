import overlayStyles from './modal-overlay.module.css';
import { useEffect } from 'react';


const ModalOverlay = ({ children, onClose }) => {

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [])

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={overlayStyles.background} onClick={handleOverlayClick}>
      {children}
    </div>
  )
}

export default ModalOverlay;