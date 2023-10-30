import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ResetPasswordInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
    onChange(e);
  }

  return (
    <>
      <PasswordInput
        onChange={handleOnChange}
        value={values.password || ''}
        name={'password'}
        placeholder={'Введите новый пароль'}
      />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={handleOnChange}
        value={values.token || ''}
        name={'token'}
      />
    </>
  )
}

ResetPasswordInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    password: PropTypes.string,
    token: PropTypes.string
  }).isRequired
};

export default ResetPasswordInputs;

