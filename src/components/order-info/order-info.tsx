import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/types/hooks";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order-info.module.css';
import { useEffect, useState, useCallback } from 'react';
import { TIngredient } from "../../types/types";
import { getSelectedOrder } from "../../services/actions/selected-order";

const OrderInfo = () => {

  const { number } = useParams();
  const order = useSelector(store => store.selectedOrder.order)
  const ingredients = useSelector(store => store.ingredients.ingredients)
  const [ingredientsToRender, setIngredientsToRender] = useState<TIngredient[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedOrder(number));
  }, [dispatch, number])

  const getIngredientsToRender = useCallback(
    () => {
      const ingredientsWithoutNull = order.ingredients.filter((item) => item !== null);
      const singleIngredients = ingredientsWithoutNull.filter((item, index) => {return ingredientsWithoutNull.indexOf(item) === index});
      const foundedIngredients = singleIngredients.map((item: string) => ingredients.find((ingr: TIngredient) => ingr._id === item));
      setIngredientsToRender(foundedIngredients as TIngredient[])
    },
    [ingredients, order],
  )

  const countTotalPrice = useCallback(
    () => {
      const ingredientsWithoutNull = order.ingredients.filter((item) => item !== null);
      const foundedIngredients = ingredientsWithoutNull.map((item) => ingredients.find((ingr) => ingr._id === item));
      const buns = foundedIngredients.filter((item) => item?.type === 'bun');
      const otherIngredients = foundedIngredients.filter((item) => item?.type !== 'bun');
      const totalPrice = otherIngredients.reduce(((previousValue, item) => previousValue + item!.price), 0) +
      (buns.reduce(((previousValue, item) => previousValue + item!.price), 0) * 2);
      setTotalPrice(totalPrice);
    },
    [ingredients, order],
  )

  const getStatus = useCallback(
    () => {
      if (order.status === 'done') {
        setStatus('Выполнен');
      }
      if (order.status === 'pending') {
        setStatus('Готовится');
      }
      if (order.status === 'created') {
        setStatus('Создан');
      }
    },
    [order],
  )

  useEffect(() => {
    if (Object.keys(order).length !==0 && ingredients.length !== 0) {
      getIngredientsToRender();
      countTotalPrice();
      getStatus();
    }
  }, [order, countTotalPrice, getIngredientsToRender, getStatus, ingredients])

  const countIngredientQuantity = (id: string, type: string) => {
    if (type === 'bun') {
      return 2;
    } else {
      const quantity = order.ingredients.filter(item => item === id).length;
      return quantity;
    }
  }

  return (
    <div>
      {Object.keys(order).length !==0 && ingredients.length !== 0 &&
        <>
          <div className={styles.number}>
            <span className='text text_type_digits-default'>#{order.number}</span>
          </div>
          <h3 className={`text text_type_main-medium ${styles.title}`}>{order.name}</h3>
          <span className={`text text_type_main-small ${order.status === 'done' ? styles.status : ''}`}>{status}</span>
          <div className={styles.composition}>
            <h4 className='text text_type_main-medium'>Состав:</h4>
            <ul className={styles.list}>
              {ingredientsToRender.map((item, index) => (
                <li key={index}>
                  <div className={styles.item}>
                    <div className={styles.imageAndName}>
                      <div className={styles.border}>
                        <img src={item.image} alt={item.name} className={styles.image}/>
                      </div>
                      <span className='text text_type_main-small'>{item.name}</span>
                    </div>
                    <div className={styles.price}>
                      <span className='text text_type_digits-default'>{countIngredientQuantity(item._id, item.type)} x {item.price}</span>
                      <CurrencyIcon type="primary" />
                    </div>
                  </div>
                </li>
              )).reverse()}
            </ul>
          </div>
          <div className={styles.dataAndPrice}>
            <span className='text text_type_main-default text_color_inactive'>{<FormattedDate date={new Date(order.createdAt)} />}</span>
            <div className={styles.totalPrice}>
                <span className='text text_type_digits-default'>{totalPrice}</span>
                <CurrencyIcon type="primary" />
              </div>
          </div>
        </>
      }
    </div>
  )
}

export default OrderInfo;
