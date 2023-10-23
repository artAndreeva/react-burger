import AuthForm from '../../form/auth-form/auth-form';
import styles from './reset-password.module.css';

const ResetPassword = () => {
  return (
    <main className={styles.main}>
      <AuthForm
        title='Восстановление пароля'
        buttonText='Сохранить'
        text='Вспомнили пароль?'
        linkText='Войти'
        link='/login'
      />
    </main>
  )
}

export default ResetPassword;
