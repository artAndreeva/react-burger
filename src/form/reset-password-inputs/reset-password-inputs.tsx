import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { TResetValues } from '../../types/types';

interface IResetPasswordInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TResetValues;
}

const ResetPasswordInputs: FunctionComponent<IResetPasswordInputsProps> = ({ onChange, values }) => {

  return (
    <>
      <PasswordInput
        onChange={onChange}
        value={values.password || ''}
        name={'password'}
        placeholder={'Введите новый пароль'}
      />

      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        onChange={onChange}
        value={values.token || ''}
        name={'token'}
      />
    </>
  )
}

export default ResetPasswordInputs;

