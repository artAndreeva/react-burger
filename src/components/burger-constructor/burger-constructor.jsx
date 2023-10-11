import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ADD_BUN, ADD_INGREDIENT } from '../../services/actions/burger-ingredients';
import { TYPE } from '../../constants/constants';
import { sendOrder } from '../../services/actions/order';
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';

const BurgerConstructor = ({ onOrderClick }) => {

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if(item.type === TYPE.bun) {
        dispatch({
          type: ADD_BUN,
          buns: item
        })
      } else {
        dispatch({
          type: ADD_INGREDIENT,
          ingredients: {...item, id: uuidv4()}
        })
      }
    }
  });

  const [orderTotal, setOrderTotal] = useState(0);

  const { buns, ingredients } = useSelector(store => store.burgerIngredients)
  const dispatch = useDispatch();

  useEffect(()=> {
    setOrderTotal(countTotalPrice())
  }, [buns, ingredients]);


  const countTotalPrice = () => {
    const totalPrice = ingredients.reduce(((previousValue, item) => previousValue + item.price), 0) +
    ((buns.price * 2) || 0);
    return totalPrice;
  }

  const handleOrderClick = () => {
    onOrderClick();
    dispatch(sendOrder([...ingredients, ...[buns]].map(item => item._id)));
  }

  return (
    <section className={burgerConstructorStyles.column} ref={dropTarget}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
          type="top"
          isLocked={true}
          text={`${buns.name} (верх)`}
          price={buns.price}
          thumbnail={buns.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
          {ingredients.map((item, index) => (
            <ConstructorIngredient
              item={item}
              index={index}
              key={item.id}
            />
          ))}
        </ul>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns.name} (низ)`}
            price={buns.price}
            thumbnail={buns.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>{orderTotal}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  onOrderClick: PropTypes.func.isRequired
};

export default BurgerConstructor;
