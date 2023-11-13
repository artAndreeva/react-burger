import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import { useEffect, useState, FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { TYPE, PLACEHOLDER_TEXT } from '../../constants/constants';
import { sendOrder } from '../../services/actions/order';
import { v4 as uuidv4 } from 'uuid';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { addBun, addIngredient } from '../../services/actions/burger-ingredients';
import ConstructorPlaceholder from '../constructor-placeholder/constructor-placeholder';
import { useNavigate } from 'react-router-dom';

interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uniqId: number;
}

interface IBurgerConstructorProps {
  onOrderClick: () => void;
}

const BurgerConstructor: FunctionComponent<IBurgerConstructorProps> = ({ onOrderClick }) => {

  const [orderTotal, setOrderTotal] = useState(0);
  const { buns, ingredients } = useSelector((store: any) => store.burgerIngredients)
  const isLoggedIn = useSelector((store: any) => store.auth.isLoggedIn)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item: IIngredient) {
      if(item.type === TYPE.bun) {
        dispatch<any>(addBun(item))
      } else {
        dispatch<any>(addIngredient({...item, uniqId: uuidv4()}))
      }
    }
  });

  useEffect(() => {
    setOrderTotal(countTotalPrice())
  }, [buns, ingredients]);


  const countTotalPrice = (): number => {
    const totalPrice = ingredients.reduce(((previousValue: number, item: IIngredient) => previousValue + item.price), 0) +
    ((buns.price * 2) || 0);
    return totalPrice;
  }

  const handleOrderClick = () => {
    if (isLoggedIn) {
      onOrderClick();
      dispatch<any>(sendOrder([...ingredients, ...[buns]].map(item => item._id)));
    } else {
      navigate('/login');
    }
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
            {ingredients.map((item: IIngredient, index: number) => (
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
        <Button
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
