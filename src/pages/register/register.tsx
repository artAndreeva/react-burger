import AuthForm from '../../form/auth-form/auth-form';
import styles from './register.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../services/actions/auth';
import { TRegisterValues } from '../../types/types';

const Register = () => {

  const dispatch = useDispatch();

  const handleRegister = (values: TRegisterValues) => {
    dispatch<any>(register(values));
  }

  return (
    <main className={styles.main}>
      <AuthForm
        title='Регистрация'
        buttonText='Зарегистрироваться'
        text='Уже зарегистрированы?'
        linkText='Войти'
        link='/login'
        onSubmit={handleRegister}
      />
    </main>
  )
}

export default Register;
