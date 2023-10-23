import AuthForm from '../../form/auth-form/auth-form';
import styles from './forgot-password.module.css';

const ForgotPassword = () => {
  return (
    <main className={styles.main}>
      <AuthForm
        title='Восстановление пароля'
        buttonText='Восстановить'
        text='Вспомнили пароль?'
        linkText='Войти'
        link='/login'
      />
    </main>
  )
}

export default ForgotPassword;
