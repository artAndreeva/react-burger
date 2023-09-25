import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={appHeaderStyles.header}>
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
      <Logo />
      <div className={appHeaderStyles.container}>
        <div className={appHeaderStyles.profile}>
          <a href='#' className={appHeaderStyles.link}>
            <ProfileIcon type="secondary" />
            <span className='text text_type_main-default text_color_inactive'>
            Личный кабинет
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;