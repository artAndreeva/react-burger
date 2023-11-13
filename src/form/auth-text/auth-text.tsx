import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './auth-text.module.css';
import { FunctionComponent } from 'react';

interface IAuthTextProps {
  text: string;
  linkText: string;
  link: string;
}

const AuthText: FunctionComponent<IAuthTextProps> = ({ text, linkText, link }) => {
  return (
    <div className={styles.text}>
      <span className="text text_type_main-default text_color_inactive">{text}</span>
      <Link to={link} >
        <Button htmlType="button" type="secondary" size="medium" extraClass={styles.button}>
          {linkText}
        </Button>
      </Link>
    </div>
  )
}

export default AuthText;
