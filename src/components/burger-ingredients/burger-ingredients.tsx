import { useState, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import { TYPE } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = () => {
  const ingredients = useSelector((store: any) => store.ingredients.ingredients)
  const ingredientsRequest = useSelector((store: any) => store.ingredients.ingredientsRequest)

  const [bunRef, bunInView] = useInView({
    threshold: 0
  });
  const [sauceRef, sauceInView] = useInView({
    threshold: 0
  });
  const [mainRef, mainInView] = useInView({
    threshold: 0
  });

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

  useEffect(()=> {
    if (bunInView && sauceInView) {
      setCurrent(TYPE.bun);
    }
    if (!bunInView && sauceInView) {
      setCurrent(TYPE.sauce);
    }
    if (sauceInView && mainInView) {
      setCurrent(TYPE.sauce);
    }
    if (!sauceInView && mainInView) {
      setCurrent(TYPE.main);
    }
  }, [bunInView, sauceInView, mainInView]);

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
      {!ingredientsRequest &&
        <>
          <div className={burgerIngredientsStyles.ingredients}>
            <div className={burgerIngredientsStyles.buns}>
              <h2 className='text text_type_main-medium' id={TYPE.bun} ref={bunRef}>Булки</h2>
              <ul className={burgerIngredientsStyles.list}>
                {filterIngredients(TYPE.bun).map((item) => (
                  <li key={item._id} className={burgerIngredientsStyles.item}>
                    <Ingredient item={item} />
                  </li>
                ))}
            </ul>
            </div>
            <div className={burgerIngredientsStyles.sauce}>
              <h2 className='text text_type_main-medium' id={TYPE.sauce} ref={sauceRef}>Соусы</h2>
              <ul className={burgerIngredientsStyles.list}>
                {filterIngredients(TYPE.sauce).map((item) => (
                  <li key={item._id} className={burgerIngredientsStyles.item}>
                    <Ingredient item={item} />
                  </li>
                ))}
            </ul>
            </div>
            <div className={burgerIngredientsStyles.main}>
              <h2 className='text text_type_main-medium' id={TYPE.main} ref={mainRef}>Начинки</h2>
              <ul className={burgerIngredientsStyles.list}>
                {filterIngredients(TYPE.main).map((item) => (
                  <li key={item._id} className={burgerIngredientsStyles.item}>
                    <Ingredient item={item} />
                  </li>
                ))}
            </ul>
            </div>
          </div>
        </>
      }
    </section>
  );
}

export default BurgerIngredients;
