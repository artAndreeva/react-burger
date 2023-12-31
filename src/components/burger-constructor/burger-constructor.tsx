import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { useEffect, useState, FunctionComponent, useCallback } from 'react';
import { useSelector, useDispatch } from '../../services/types/hooks';
import { useDrop } from 'react-dnd';
import { TYPE, PLACEHOLDER_TEXT } from '../../constants/constants';
import { sendOrder } from '../../services/actions/order';
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { addBun, addIngredient } from '../../services/actions/burger-ingredients';
import ConstructorPlaceholder from '../constructor-placeholder/constructor-placeholder';
import { useNavigate } from 'react-router-dom';
import { TIngredient } from '../../types/types';

interface IBurgerConstructorProps {
  onOrderClick: () => void;
}

const BurgerConstructor: FunctionComponent<IBurgerConstructorProps> = ({ onOrderClick }) => {

  const [orderTotal, setOrderTotal] = useState(0);
  const { buns, ingredients } = useSelector(store => store.burgerIngredients)
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item: TIngredient) {
      if(item.type === TYPE.bun) {
        dispatch(addBun(item))
      } else {
        dispatch(addIngredient({...item, uniqId: uuidv4()}))
      }
    }
  });

  const countTotalPrice = useCallback(
    (): number => {
      const totalPrice = ingredients.reduce(((previousValue, item) => previousValue + item.price), 0) +
      ((buns.price * 2) || 0);
      return totalPrice;
    },
    [ingredients, buns ],
  )

  useEffect(() => {
    setOrderTotal(countTotalPrice())
  }, [buns, ingredients, countTotalPrice]);


  const handleOrderClick = () => {
    if (isLoggedIn) {
      onOrderClick();
      dispatch(sendOrder([...ingredients, ...[buns]].map(item => item._id)));
    } else {
      navigate('/login');
    }
  }

  return (
    <section className={styles.column} ref={dropTarget} data-testid='constructor'>
      <div className={styles.container}>
        <div className={styles.end}>
          {Object.keys(buns).length !== 0
          ? <ConstructorElement
            type="top"
            isLocked={true}
            text={`${buns.name} (верх)`}
            price={buns.price}
            thumbnail={buns.image}
            extraClass={styles.color}
            />
          : <ConstructorPlaceholder top={true} text={PLACEHOLDER_TEXT.top}/>
          }
        </div>

        {ingredients.length !== 0
        ? <ul className={styles.list}>
            {ingredients.map((item, index) => (
              <ConstructorIngredient
                ingredient={item}
                index={index}
                key={item.uniqId}
              />
            ))}
          </ul>
        : <ConstructorPlaceholder middle={true} text={PLACEHOLDER_TEXT.middle}/>
        }

        <div className={styles.end}>
        {Object.keys(buns).length !== 0
          ? <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${buns.name} (низ)`}
            price={buns.price}
            thumbnail={buns.image}
            extraClass={styles.color}
            />
          : <ConstructorPlaceholder bottom={true} text={PLACEHOLDER_TEXT.bottom}/>
          }
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.price}>
          <span className='text text_type_digits-medium'>{orderTotal}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          data-testid='order-button'
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderClick}
          disabled={Object.keys(buns).length === 0 && ingredients.length === 0}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
