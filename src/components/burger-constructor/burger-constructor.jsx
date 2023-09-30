import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import {useEffect, useState, useMemo } from  'react';
import PropTypes from 'prop-types';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';

const BurgerConstructor = ({ ingredients, onOrderClick }) => {

  const [endIngredient, setEndIngredient] = useState({});
  const [middleIngredient, setMiddleIngredient] = useState([]);

  useEffect(()=> {
    setEndIngredient(filterEndIngredient);
    setMiddleIngredient(filterMiddleIngredient);
  }, []);

  const filterEndIngredient = useMemo(
    () => {
      return ingredients.filter(item => item.name === 'Краторная булка N-200i')[0];
    },
    [ingredients]
  );

  const filterMiddleIngredient = useMemo(
    () => {
      return ingredients.filter(item => item.name !== 'Краторная булка N-200i');
    },
    [ingredients]
  );

  return (
    <section className={burgerConstructorStyles.column}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${endIngredient.name} (верх)`}
            price={endIngredient.price}
            thumbnail={endIngredient.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
            {middleIngredient.map((item) => (
              <li key={item._id} className={burgerConstructorStyles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            ))}
        </ul>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${endIngredient.name} (низ)`}
            price={endIngredient.price}
            thumbnail={endIngredient.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={onOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(INGREDIENS_PROP_TYPES).isRequired,
  onOrderClick: PropTypes.func.isRequired
};

export default BurgerConstructor;
