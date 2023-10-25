import styles from './profile.module.css';
import ProfileForm from '../../form/profile-form/profile-form';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../services/actions/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(redirect));
  }

  const redirect = () => {
    navigate('/login');
  }

  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink
              to='/profile'
              className={({isActive}) => `text text_type_main-medium text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to='/profile/orders'
              className={({isActive})=> `text text_type_main-medium text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`}
            >
              История заказов
            </NavLink>
          </li>
          <li className={styles.item}>
            <Link
              to='/profile'
              className={`text text_type_main-medium text_color_inactive ${styles.link}`}
              onClick={handleLogout}
            >
              Выход
            </Link>
          </li>
        </ul>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <div>
        <ProfileForm />
      </div>
    </main>
  )
}

export default Profile;
