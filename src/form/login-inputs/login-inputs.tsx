import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { TLoginValues } from '../../types/types';

interface ILoginInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TLoginValues;
}

const LoginInputs: FunctionComponent<ILoginInputsProps> = ({ onChange, values }) => {

  return (
    <>
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

export default LoginInputs;

