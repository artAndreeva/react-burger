import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { TRegisterValues } from '../../types/types';

interface IRegisterInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TRegisterValues;
}

const RegisterInputs: FunctionComponent<IRegisterInputsProps> = ({ onChange, values }) => {

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={onChange}
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
