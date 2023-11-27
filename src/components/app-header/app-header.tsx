import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {

  //const setActive = ({isActive}) => `text text_type_main-default text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`;
  //const setActive = ({isActive}: {isActive: boolean}): string => `text text_type_main-default text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to='/'
                className={({isActive}) => `text text_type_main-default text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`}
              >
                {({isActive}) => (
                  <>
                    <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                    <span>
                      Конструктор
                    </span>
                  </>
                )}
              </NavLink>
            </li>

            <li className={styles.item}>
            <NavLink
                to='/feed'
                className={({isActive}) => `text text_type_main-default text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`}
              >
                {({isActive}) => (
                  <>
                    <ListIcon type={isActive ? 'primary' : 'secondary'} />
                    <span>
                      Лента заказов
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link to='/'>
          <Logo />
        </Link>

        <div className={styles.containerProfile}>
          <div className={styles.profile}>
            <NavLink
              to='/profile'
              className={({isActive}) => `text text_type_main-default text_color_inactive ${styles.link} ${isActive ? styles.active : ''}`}
            >
              {({isActive}) => (
                <>
                  <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
                  <span>
                    Личный кабинет
                  </span>
                </>
              )}
            </NavLink>
          </div>
        </div>

      </div>
    </header>
  )
}

export default AppHeader;
