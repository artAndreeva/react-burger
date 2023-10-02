import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import Card from '../card/card';
import { TYPE } from '../../constants/constants';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ ingredients, onIngredientClick }) => {

  const [current, setCurrent] = useState(TYPE.bun);

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
        <Tab value={TYPE.bun} active={current === TYPE.bun} onClick={setTab}>
         Булки
        </Tab>
        <Tab value={TYPE.sauce} active={current === TYPE.sauce} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value={TYPE.main} active={current === TYPE.main} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyles.ingredients}>
        <div className={burgerIngredientsStyles.buns}>
          <h2 className='text text_type_main-medium' id={TYPE.bun}>Булки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(TYPE.bun).map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card item={item} onIngredientClick={onIngredientClick}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.sauce}>
          <h2 className='text text_type_main-medium' id={TYPE.sauce}>Соусы</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(TYPE.sauce).map((item) => (
              <li key={item._id} className={burgerIngredientsStyles.item}>
                <Card item={item} onIngredientClick={onIngredientClick}/>
              </li>
            ))}
        </ul>
        </div>
        <div className={burgerIngredientsStyles.main}>
          <h2 className='text text_type_main-medium' id={TYPE.main}>Начинки</h2>
          <ul className={burgerIngredientsStyles.list}>
            {filterIngredients(TYPE.main).map((item) => (
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
  ingredients: PropTypes.arrayOf(INGREDIENS_PROP_TYPES).isRequired,
  onIngredientClick: PropTypes.func.isRequired
};

export default BurgerIngredients;
