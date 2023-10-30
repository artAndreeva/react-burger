import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './auth-form.module.css';
import { useLocation } from 'react-router-dom';
import AuthText from '../auth-text/auth-text';
import RegisterInputs from '../../form/register-inputs/register-inputs';
import LoginInputs from '../../form/login-inputs/login-inputs';
import ForgotPasswordInputs from '../../form/forgot-password-inputs/forgot-password-inputs';
import ResetPasswordInputs from '../../form/reset-password-inputs/reset-password-inputs';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/use-form';

const AuthForm = ({
  title,
  buttonText,
  text,
  linkText,
  link,
  restoreText,
  restoreLinkText,
  restoreLink,
  onSubmit
}) => {

  const { values, handleChange } = useForm();

  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>

        <form
          name='auth-form'
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <fieldset className={styles.fieldset}>

            {pathname === '/login' &&
              <LoginInputs
                values={values}
                onChange={handleChange}
              />
            }

            {pathname === '/register' &&
              <RegisterInputs
                values={values}
                onChange={handleChange}
              />
            }

            {pathname === '/forgot-password' &&
              <ForgotPasswordInputs
                values={values}
                onChange={handleChange}
              />
            }

            {pathname === '/reset-password' &&
              <ResetPasswordInputs
                values={values}
                onChange={handleChange}
              />
            }

          </fieldset>

          <Button htmlType="submit" type="primary" size="medium" >
            {buttonText}
          </Button>

        </form>

        <div className={styles.text}>
          <AuthText
            text={text}
            linkText={linkText}
            link={link}
          />
          {pathname === '/login' &&
            <AuthText
              text={restoreText}
              linkText={restoreLinkText}
              link={restoreLink}
            />
          }
        </div>

    </div>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  restoreText: PropTypes.string,
  restoreLinkText: PropTypes.string,
  restoreLink: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default AuthForm;
