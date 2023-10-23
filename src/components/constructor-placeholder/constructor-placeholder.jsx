import styles from './constructor-placeholder.module.css';

const ConstructorPlaceholder = ({top, middle, bottom, text}) => {
  return (
    <div className={top ? styles.placeholderTop : middle ? styles.placeholderMiddle: bottom && styles.placeholderBottom}>
      <span className='text text_type_main-default'>{text}</span>
    </div>
  );
}

export default ConstructorPlaceholder;
