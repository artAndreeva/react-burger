import styles from './profile.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';
import { logout } from '../../services/actions/auth';
import { useMatch } from 'react-router-dom';

const Profile = () => {

  const dispatch = useDispatch();
  const match = useMatch('/profile');

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <NavLink
              to='/profile'
              className={`text text_type_main-medium text_color_inactive ${styles.link} ${match ? styles.active : ''}`}
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
            <NavLink
              to='/profile'
              className={`text text_type_main-medium text_color_inactive ${styles.link}`}
              onClick={handleLogout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        {match &&
          <p className={`text text_type_main-default ${styles.text}`}>
            В этом разделе вы можете
            изменить свои персональные данные
          </p>
        }
      </nav>
      <div className={styles.rightColumn}>
        <Outlet />
      </div>
    </main>
  )
}

export default Profile;
