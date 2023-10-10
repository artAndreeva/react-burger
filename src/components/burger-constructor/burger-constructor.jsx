import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { GET_BURGER_INGREDIENTS } from '../../services/actions/burger-ingredients';

const BurgerConstructor = ({ onOrderClick }) => {

  const [orderTotal, setOrderTotal] = useState(0);

  const ingredients = useSelector(store => store.ingredients.ingredients)
  const { endIngredients, middleIngredients } = useSelector(store => store.burgerIngredients)
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch({
      type: GET_BURGER_INGREDIENTS,
      ingredients
    })
  }, [ingredients]);

  useEffect(()=> {
    setOrderTotal(countTotalPrice())
  }, [endIngredients, middleIngredients]);


  const countTotalPrice = () => {
    const totalPrice = middleIngredients.reduce(((previousValue, item) => previousValue + item.price), 0) +
    ((endIngredients.price * 2) || 0);
    return totalPrice;
  }

  return (
    <section className={burgerConstructorStyles.column}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${endIngredients.name} (верх)`}
            price={endIngredients.price}
            thumbnail={endIngredients.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
            {middleIngredients.map((item) => (
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
            text={`${endIngredients.name} (низ)`}
            price={endIngredients.price}
            thumbnail={endIngredients.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>{orderTotal}</span>
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
  onOrderClick: PropTypes.func.isRequired
};

export default BurgerConstructor;
