import AuthForm from '../../form/auth-form/auth-form';
import styles from './register.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../../services/actions/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (values) => {
    dispatch(register(values, redirect));
  }

  const redirect = () => {
    navigate('/');
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
