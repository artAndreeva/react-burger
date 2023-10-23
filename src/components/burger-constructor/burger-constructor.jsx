import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { TYPE, PLACEHOLDER_TEXT } from '../../constants/constants';
import { sendOrder } from '../../services/actions/order';
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { addBun, addIngredient } from '../../services/actions/burger-ingredients';
import ConstructorPlaceholder from '../constructor-placeholder/constructor-placeholder';

const BurgerConstructor = ({ onOrderClick }) => {

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      if(item.type === TYPE.bun) {
        dispatch(addBun(item))
      } else {
        dispatch(addIngredient({...item, uniqId: uuidv4()}))
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
          {Object.keys(buns).length !== 0
          ? <ConstructorElement
            type="top"
            isLocked={true}
            text={`${buns.name} (верх)`}
            price={buns.price}
            thumbnail={buns.image}
            />
          : <ConstructorPlaceholder top={true} text={PLACEHOLDER_TEXT.top}/>
          }
        </div>

        {ingredients.length !== 0
        ? <ul className={burgerConstructorStyles.list}>
            {ingredients.map((item, index) => (
              <ConstructorIngredient
                item={item}
                index={index}
                key={item.uniqId}
              />
            ))}
          </ul>
        : <ConstructorPlaceholder middle={true} text={PLACEHOLDER_TEXT.middle}/>
        }

        <div className={burgerConstructorStyles.end}>
        {Object.keys(buns).length !== 0
          ? <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns.name} (низ)`}
            price={buns.price}
            thumbnail={buns.image}
            />
          : <ConstructorPlaceholder bottom={true} text={PLACEHOLDER_TEXT.bottom}/>
          }
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>{orderTotal}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick} disabled={Object.keys(buns).length === 0 && ingredients.length === 0}>
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
