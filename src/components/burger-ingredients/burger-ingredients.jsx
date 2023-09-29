import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import Card from '../card/card';
import { tabs } from '../../constants/constants';
import { ingredientPropTypes } from '../../constants/constants';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ ingredients, onIngredientClick }) => {

  const [current, setCurrent] = useState(tabs.FIRST);

  const setTab = (tab) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const filterIngredients = (id) => {
    const filteredIngredients = ingredients.filter(item => item.type === id)
    return filteredIngredients;
  };

  return (
    <section className={burgerIngredientsStyles.column}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.tabs}>
        <Tab value={tabs.FIRST} active={current === tabs.FIRST} onClick={setTab}>
         Булки
        </Tab>
        <Tab value={tabs.SECOND} active={current === tabs.SECOND} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value={tabs.THIRD} active={current === tabs.THIRD} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyles.ingredients}>
        <div className={burgerIngredientsStyles.buns}>
          <h2 className='text text_type_main-medium' id={tabs.FIRST}>Булки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(tabs.FIRST).map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card item={item} onIngredientClick={onIngredientClick}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.sauce}>
          <h2 className='text text_type_main-medium' id={tabs.SECOND}>Соусы</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(tabs.SECOND).map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card item={item} onIngredientClick={onIngredientClick}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.main}>
          <h2 className='text text_type_main-medium' id={tabs.THIRD}>Начинки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(tabs.THIRD).map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card item={item} onIngredientClick={onIngredientClick}/>
              </li>
            ))}
        </ul>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onIngredientClick: PropTypes.func.isRequired
};

export default BurgerIngredients;