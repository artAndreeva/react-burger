import styles from './profile-form.module.css';
import { useEffect, useState } from 'react';
import ProfileInputs from '../profile-inputs/profile-inputs';
import { useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUser } from '../../services/actions/auth';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/use-form';
import { ChangeEvent, FormEvent } from 'react';

const ProfileForm = () => {

  const { user } = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();

  const { values, handleChange, setValues } = useForm();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setIsButtonVisible(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.password === '******') {
      dispatch<any>(updateUser({...values, password: ''}));
    } else {
      dispatch<any>(updateUser(values));
    }
    setIsButtonVisible(false);
  }

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
      password: '******'
    })
  }, [user])

  const handleRemoveEdits = () => {
    setValues({
      name: user.name,
      email: user.email,
      password: '******'
    });
    setIsButtonVisible(false);
  }

  return (
    <div className={styles.container}>
      <form
        name='auth-form'
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <fieldset className={styles.fieldset}>

          <ProfileInputs
            values={values}
            onChange={handleOnChange}
          />

        </fieldset>

        {isButtonVisible &&
          <div className={styles.buttons}>
            <Button htmlType="button" type="secondary" size="medium" onClick={handleRemoveEdits}>
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        }

      </form>
    </div>
  )
}

export default ProfileForm;
