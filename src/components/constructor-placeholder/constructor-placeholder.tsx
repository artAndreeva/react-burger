import styles from './constructor-placeholder.module.css';
import { FunctionComponent } from 'react';

interface IConstructorPlaceholderProps {
  top?: boolean;
  middle?: boolean;
  bottom?: boolean;
  text: string;
}

const ConstructorPlaceholder: FunctionComponent<IConstructorPlaceholderProps> = ({top = false, middle = false, bottom = false, text}) => {
  return (
    <div className={top ? styles.placeholderTop : middle ? styles.placeholderMiddle: bottom ? styles.placeholderBottom: ''}>
      <span className='text text_type_main-default'>{text}</span>
    </div>
  );
}

export default ConstructorPlaceholder;
