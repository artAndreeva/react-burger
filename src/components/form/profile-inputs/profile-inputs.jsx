import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';

const ProfileInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
    onChange(e);
  }

  const inputRef = useRef(null);

  const onIconClick = () => {
    inputRef.current.focus();
    inputRef.current.disabled = false;
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
        disabled={true}
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
