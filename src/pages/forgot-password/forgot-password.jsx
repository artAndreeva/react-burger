import AuthForm from '../../form/auth-form/auth-form';
import styles from './forgot-password.module.css';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../services/actions/reset-password';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleResetPassword = (values) => {
    dispatch(resetPassword(values, redirect));
  }

  const redirect = () => {
    navigate('/reset-password');
  }

  return (
    <main className={styles.main}>
      <AuthForm
        title='Восстановление пароля'
        buttonText='Восстановить'
        text='Вспомнили пароль?'
        linkText='Войти'
        link='/login'
        onSubmit={handleResetPassword}
      />
    </main>
  )
}

export default ForgotPassword;
