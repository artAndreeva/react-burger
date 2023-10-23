import AuthForm from '../../form/auth-form/auth-form';
import styles from './register.module.css';

const Register = () => {
  return (
    <main className={styles.main}>
      <AuthForm
        title='Регистрация'
        buttonText='Зарегистрироваться'
        text='Уже зарегистрированы?'
        linkText='Войти'
        link='/login'
      />
    </main>
  )
}

export default Register;
