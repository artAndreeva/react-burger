import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { TResetPasswordValues } from '../../types/types';

interface IForgotPasswordInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TResetPasswordValues;
}

const ForgotPasswordInputs: FunctionComponent<IForgotPasswordInputsProps> = ({ onChange, values }) => {

  return (
    <>
      <EmailInput
        onChange={onChange}
        value={values.email || ''}
        name={'email'}
        placeholder="Укажите e-mail"
      />
    </>
  )
}

export default ForgotPasswordInputs;

