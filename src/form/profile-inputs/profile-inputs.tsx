import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState, useEffect } from 'react';
import { ChangeEvent, FunctionComponent } from 'react';

interface IProfileInputsProps {
  onChange: (arg0: ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
}

interface IValues {
  [name: string]: string;
}

const ProfileInputs: FunctionComponent<IProfileInputsProps> = ({ onChange, values }) => {

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef(null);

  const onIconClick = () => {
    setDisabled(false);
  }

  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleOnBlur = () => {
    setDisabled(true);
  }

  return (
    <>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={handleOnChange}
        value={values.name || ''}
        name={'name'}
        icon="EditIcon"
        ref={inputRef}
        onIconClick={onIconClick}
        disabled={disabled}
        onBlur={handleOnBlur}
      />

      <EmailInput
        onChange={onChange}
        value={values.email || ''}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
      />

      <PasswordInput
        onChange={onChange}
        value={values.password || ''}
        name={'password'}
        icon="EditIcon"
      />
    </>
  )
}

export default ProfileInputs;
