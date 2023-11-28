import { FunctionComponent, useEffect, useState } from 'react';
import { TIngredient, TOrder } from '../../types/types';
import styles from './order-card.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/types/hooks';
import { Link, useLocation } from 'react-router-dom';

interface IOrderProps {
  order: TOrder,
  url: string
}

const OrderCard: FunctionComponent<IOrderProps> = ({ order, url }) => {

  const [ingredientsToRender, setIngredientsToRender] = useState<TIngredient[]>([]);
  const [itemPlus, setItemPlus] = useState<TIngredient[]>([]);
  const ingredients = useSelector(store => store.ingredients.ingredients)
  const location = useLocation();

  useEffect(()=>{
    getIngredientsToRender();
  }, [])

  const getIngredientsToRender = () => {
    const ingredientsWithoutNull = order.ingredients.filter((item) => item !== null);
    const singleIngredients = ingredientsWithoutNull.filter((item, index) => {return ingredientsWithoutNull.indexOf(item) === index});
    const foundedIngredients = singleIngredients.map((item: string) => ingredients.find((ingr: TIngredient) => ingr._id === item));
    setItemPlus(foundedIngredients as TIngredient[]);
    const slicedIngredients = foundedIngredients.slice(-6);
    setIngredientsToRender(slicedIngredients as TIngredient[])
  }

  const countTotalPrice = (): number => {
    const ingredientsWithoutNull = order.ingredients.filter((item) => item !== null);
    const foundedIngredients = ingredientsWithoutNull.map((item: string) => ingredients.find((ingr: TIngredient) => ingr._id === item));
    const buns = foundedIngredients.filter((item) => item?.type === 'bun');
    const otherIngredients = foundedIngredients.filter((item) => item?.type !== 'bun');
    const totalPrice = (otherIngredients as TIngredient[]).reduce(((previousValue: number, item: TIngredient) => previousValue + item.price), 0) +
    ((buns as TIngredient[]).reduce(((previousValue: number, item: TIngredient) => previousValue + item.price), 0) * 2);
    return totalPrice;
  }

  const getDate = () => {
    const dateFromServer = order.createdAt;
    return <FormattedDate date={new Date(dateFromServer)} />
  }

  const getStatus = (): string | undefined => {
    if (order.status === 'done') {
      return 'Выполнен';
    }
    if (order.status === 'pending') {
      return 'Готовится';
    }
    if (order.status === 'created') {
      return 'Создан';
    }
  }

  return (
    <Link to={`${url}/${order.number}`} className={styles.link} state={{ backgroundLocation: location }}>
      <li className={styles.container}>
        <div className={styles.numberAndDate}>
          <span className='text text_type_digits-default'>#{order.number}</span>
          <span className='text text_type_main-default text_color_inactive'>{getDate()}</span>
        </div>
        <div className={styles.nameAndStatus}>
          <h3 className='text text_type_main-medium'>{order.name}</h3>
          {url !== '/feed' &&
            <span className={`text text_type_main-small ${order.status === 'done' ? styles.status : ''}`}>{getStatus()}</span>
          }
        </div>
        <div className={styles.imagesAndPrice}>
          <ul className={styles.list}>
            {ingredientsToRender.map((item: TIngredient, index) => (
              <li className={styles.item} key={index}>
                <img src={item.image} alt={item.name} className={styles.image}/>
              </li>
            )).reverse()}
            {itemPlus.length >= 6
              ? <span className={`text text_type_main-small ${styles.plus}`}>+{itemPlus.length -5}</span>
              : null
            }
          </ul>
          <div className={styles.price}>
            <span className='text text_type_digits-default'>{countTotalPrice()}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  )
}

export default OrderCard;
