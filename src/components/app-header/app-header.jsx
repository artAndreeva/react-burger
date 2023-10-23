import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';
import { Link, useLocation } from 'react-router-dom';

const AppHeader = () => {

  const { pathname } = useLocation();

  return (
    <header className={appHeaderStyles.header}>
      <div className={appHeaderStyles.container}>
        <nav className={appHeaderStyles.menu}>
          <ul className={appHeaderStyles.list}>
            <li className={appHeaderStyles.item}>
              <a href='#' className={appHeaderStyles.link}>
                <BurgerIcon type="primary" />
                <span className='text text_type_main-default'>
                  Конструктор
                </span>
              </a>
            </li>
            <li className={appHeaderStyles.item}>
              <a href='#' className={appHeaderStyles.link}>
                <ListIcon type="secondary" />
                <span className='text text_type_main-default text_color_inactive'>
                  Лента заказов
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <Link to='/'>
          <Logo />
        </Link>
        <div className={appHeaderStyles.containerProfile}>
          <div className={appHeaderStyles.profile}>
            <Link to='/profile' className={appHeaderStyles.link}>
              <ProfileIcon type={pathname === '/profile' ? 'primary' : 'secondary'} />
              <span className={`text text_type_main-default ${pathname !== '/profile' ? 'text_color_inactive' : ''}`}>
              Личный кабинет
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;
