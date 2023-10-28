import { Input, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProfileInputs = ({ onChange, values }) => {

  const handleOnChange = (e) => {
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

ProfileInputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
};

export default ProfileInputs;
