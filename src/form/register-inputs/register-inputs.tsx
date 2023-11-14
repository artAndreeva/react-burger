import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { IInputValues } from '../../types/types';

interface IRegisterInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: IInputValues;
}

const RegisterInputs: FunctionComponent<IRegisterInputsProps> = ({ onChange, values }) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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
