import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

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

export default RegisterInputs;
