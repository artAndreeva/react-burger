import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ForgotPasswordInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
    onChange(e);
  }

  return (
    <>
      <EmailInput
        onChange={handleOnChange}
        value={values.email || ''}
        name={'email'}
        placeholder="Укажите e-mail"
      />
    </>
  )
}

ForgotPasswordInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default ForgotPasswordInputs;

