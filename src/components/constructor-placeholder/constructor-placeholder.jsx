import styles from './constructor-placeholder.module.css';
import PropTypes from 'prop-types';

const ConstructorPlaceholder = ({top, middle, bottom, text}) => {
  return (
    <div className={top ? styles.placeholderTop : middle ? styles.placeholderMiddle: bottom && styles.placeholderBottom}>
      <span className='text text_type_main-default'>{text}</span>
    </div>
  );
}

ConstructorPlaceholder.propTypes = {
  top: PropTypes.bool,
  middle: PropTypes.bool,
  bottom: PropTypes.bool,
  text: PropTypes.string.isRequired
};


export default ConstructorPlaceholder;
