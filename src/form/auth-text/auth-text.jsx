import { Link } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './auth-text.module.css';
import PropTypes from 'prop-types';

const AuthText = ({ text, linkText, link }) => {
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

AuthText.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default AuthText;
