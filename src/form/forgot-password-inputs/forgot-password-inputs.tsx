import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FunctionComponent } from 'react';

interface IForgotPasswordInputsProps {
  onChange: (arg0: ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
}

interface IValues {
  [name: string]: string;
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

