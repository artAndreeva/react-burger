import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import burgersData from '../../utils/data';
import Card from '../card/card';

const BurgerIngredients = () => {

  const [current, setCurrent] = useState('bun');

  const setTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={burgerIngredientsStyles.column}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={setTab}>
         Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyles.ingredients}>
        <div className={burgerIngredientsStyles.buns}>
          <h2 className='text text_type_main-medium' id='bun'>Булки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {burgersData.filter(item => item.type === 'bun').map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card {...item}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.sauce}>
          <h2 className='text text_type_main-medium' id='sauce'>Соусы</h2>
          <ul className={burgerIngredientsStyles.list}>
            {burgersData.filter(item => item.type === 'sauce').map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card {...item}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.main}>
          <h2 className='text text_type_main-medium' id='main'>Начинки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {burgersData.filter(item => item.type === 'main').map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card {...item}/>
              </li>
            ))}
        </ul>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients;