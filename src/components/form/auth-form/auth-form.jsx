import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './auth-form.module.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import AuthText from '../auth-text/auth-text';
import RegisterInputs from '../../form/register-inputs/register-inputs';
import LoginInputs from '../../form/login-inputs/login-inputs';
import ForgotPasswordInputs from '../../form/forgot-password-inputs/forgot-password-inputs';
import ResetPasswordInputs from '../../form/reset-password-inputs/reset-password-inputs';

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

  const [values, setValues] = useState({});

  const { pathname } = useLocation();

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
  };

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
                onChange={handleOnChange}
              />
            }

            {pathname === '/register' &&
              <RegisterInputs
                values={values}
                onChange={handleOnChange}
              />
            }

            {pathname === '/forgot-password' &&
              <ForgotPasswordInputs
                values={values}
                onChange={handleOnChange}
              />
            }

            {pathname === '/reset-password' &&
              <ResetPasswordInputs
                values={values}
                onChange={handleOnChange}
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

export default AuthForm;
