import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';
import { TResetPasswordValues } from '../../types/types';

interface IForgotPasswordInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TResetPasswordValues;
}

const ForgotPasswordInputs: FunctionComponent<IForgotPasswordInputsProps> = ({ onChange, values }) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
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

