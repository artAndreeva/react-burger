import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const LoginInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
    onChange(e);
  }

  return (
    <>
      <EmailInput
        onChange={handleOnChange}
        value={values.email || ''}
        name={'email'}
        placeholder="E-mail"
      />

      <PasswordInput
        onChange={handleOnChange}
        value={values.password || ''}
        name={'password'}
      />
    </>
  )
}

LoginInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default LoginInputs;

