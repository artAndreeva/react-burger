import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';

interface ILoginInputsProps {
  onChange: (arg0: ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
}

interface IValues {
  [name: string]: string;
}

const LoginInputs: FunctionComponent<ILoginInputsProps> = ({ onChange, values }) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

