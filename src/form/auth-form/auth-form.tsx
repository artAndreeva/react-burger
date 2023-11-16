import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './auth-form.module.css';
import { useLocation } from 'react-router-dom';
import AuthText from '../auth-text/auth-text';
import RegisterInputs from '../register-inputs/register-inputs';
import LoginInputs from '../login-inputs/login-inputs';
import ForgotPasswordInputs from '../forgot-password-inputs/forgot-password-inputs';
import ResetPasswordInputs from '../reset-password-inputs/reset-password-inputs';
import { useForm } from '../../hooks/use-form';
import { FormEvent, FunctionComponent } from 'react';

interface IAuthFormProps {
  title: string;
  buttonText: string;
  text: string;
  linkText: string;
  link: string;
  restoreText?: string;
  restoreLinkText?: string;
  restoreLink?: string;
  onSubmit: (values: any) => void;
}

const AuthForm: FunctionComponent<IAuthFormProps> = ({
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
              text={restoreText || ''}
              linkText={restoreLinkText || ''}
              link={restoreLink || ''}
            />
          }
        </div>

    </div>
  )
}

export default AuthForm;
