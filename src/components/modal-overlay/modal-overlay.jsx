import overlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClose }) => {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={overlayStyles.background} onClick={handleOverlayClick}></div>
  );
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
