import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';

interface IResetPasswordInputsProps {
  onChange: (arg0: ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
}

interface IValues {
  [name: string]: string;
}

const ResetPasswordInputs: FunctionComponent<IResetPasswordInputsProps> = ({ onChange, values }) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default ResetPasswordInputs;

