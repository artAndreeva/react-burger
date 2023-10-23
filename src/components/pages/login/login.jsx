import AuthForm from '../../form/auth-form/auth-form';
import styles from './login.module.css';

const Login = () => {
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
      />
    </main>
  )
}

export default Login;
