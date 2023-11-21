import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState, useEffect, ChangeEvent, FunctionComponent } from 'react';
import { TProfileValues } from '../../types/types';

interface IProfileInputsProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  values: TProfileValues;
}

const ProfileInputs: FunctionComponent<IProfileInputsProps> = ({ onChange, values }) => {

  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    setDisabled(false);
  }

  useEffect(() => {
    if (!disabled && inputRef && inputRef.current) {
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
        onChange={onChange}
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
