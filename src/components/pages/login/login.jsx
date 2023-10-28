import AuthForm from '../../form/auth-form/auth-form';
import styles from './login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../../services/actions/auth';

const Login = () => {

  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(login(values))
  }

  return (
    <main className={styles.main}>
      <AuthForm
        title='Вход'
        buttonText='Войти'
        text='Вы — новый пользователь?'
        linkText='Зарегистрироваться'
        link='/register'
        restoreText='Забыли пароль?'
        restoreLinkText='Восстановить пароль'
        restoreLink='/forgot-password'
        onSubmit={handleLogin}
      />
    </main>
  )
}

export default Login;
