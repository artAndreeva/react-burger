import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

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

export default ForgotPasswordInputs;

