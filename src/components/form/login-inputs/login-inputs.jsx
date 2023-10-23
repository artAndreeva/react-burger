import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

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

export default LoginInputs;

