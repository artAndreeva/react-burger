import AuthForm from '../../form/auth-form/auth-form';
import styles from './profile.module.css';

const Profile = () => {
  return (
    <main className={styles.main}>
      <AuthForm />
    </main>
  )
}

export default Profile;
