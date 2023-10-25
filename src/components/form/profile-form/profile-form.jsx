import styles from './profile-form.module.css';
import { useEffect, useState } from 'react';
import ProfileInputs from '../profile-inputs/profile-inputs';
import { useSelector } from 'react-redux';

const ProfileForm = ({ onSubmit }) => {

  const { user } = useSelector(store => store.auth);

  const [values, setValues] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  useEffect(() => {
    setValues({
      name: user.name,
      email: user.email,
      password: '******'
    })
  }, [user])

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
      </form>
    </div>
  )
}

export default ProfileForm;
