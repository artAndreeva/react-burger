import styles from './profile-form.module.css';
import { useEffect, useState } from 'react';
import ProfileInputs from '../profile-inputs/profile-inputs';
import { useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUser } from '../../../services/actions/auth';
import { useDispatch } from 'react-redux';

const ProfileForm = () => {

  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const [values, setValues] = useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
    setIsButtonVisible(true);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === '******') {
      dispatch(updateUser({...values, password: ''}));
    } else {
      dispatch(updateUser(values));
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
