import AuthForm from '../../form/auth-form/auth-form';
import styles from './reset-password.module.css';
import { useDispatch } from '../../services/types/hooks';
import { reset } from '../../services/actions/reset-password';
import { useNavigate } from 'react-router-dom';
import { TResetValues } from '../../types/types';

const ResetPassword = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReset = (values: TResetValues) => {
    dispatch(reset(values, redirect));
  }

  const redirect = () => {
    navigate('/login', { replace: true });
  }

  return (
    <main className={styles.main}>
      <AuthForm
        title='Восстановление пароля'
        buttonText='Сохранить'
        text='Вспомнили пароль?'
        linkText='Войти'
        link='/login'
        onSubmit={handleReset}
      />
    </main>
  )
}

export default ResetPassword;
