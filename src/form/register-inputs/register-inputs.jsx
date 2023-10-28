import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const RegisterInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
    onChange(e);
  }

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={handleOnChange}
        value={values.name || ''}
        name={'name'}
      />

      <EmailInput
        onChange={onChange}
        value={values.email || ''}
        name={'email'}
        placeholder="E-mail"
      />

      <PasswordInput
        onChange={onChange}
        value={values.password || ''}
        name={'password'}
      />
    </>
  )
}

RegisterInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired
};

export default RegisterInputs;
