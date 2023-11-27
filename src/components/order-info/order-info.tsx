import { useParams } from "react-router-dom";
import { useSelector } from "../../services/types/hooks";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order-info.module.css';
import { useEffect, useState } from 'react';
import { TIngredient, TOrder } from "../../types/types";

const OrderInfo = () => {

  const orders = useSelector(store => store.wsOrders.orders)
  const { number } = useParams();
  const orderNumber = Number(number)

  const selectedOrder = orders.find((item) => item.number === orderNumber)

  const [ingredientsToRender, setIngredientsToRender] = useState<TIngredient[]>([]);
  const [itemPlus, setItemPlus] = useState<TIngredient[]>([]);
  const ingredients = useSelector(store => store.ingredients.ingredients)

  useEffect(()=>{
    getImages();
  }, [])

  const getImages = () => {
    const ingredientsWithoutNull = (selectedOrder as TOrder).ingredients.filter((item) => item !== null);
    const singleIngredients = ingredientsWithoutNull.filter((item, index) => {return ingredientsWithoutNull.indexOf(item) === index});
    const foundedIngredients = singleIngredients.map((item: string) => ingredients.find((ingr: TIngredient) => ingr._id === item));
    setItemPlus(foundedIngredients as TIngredient[]);
    const slicedIngredients = foundedIngredients.slice(-6);
    setIngredientsToRender(slicedIngredients as TIngredient[])
  }

  const countTotalPrice = (): number => {
    const ingredientsWithoutNull = (selectedOrder as TOrder).ingredients.filter((item) => item !== null);
    const foundedIngredients = ingredientsWithoutNull.map((item: string) => ingredients.find((ingr: TIngredient) => ingr._id === item));
    const buns = foundedIngredients.filter((item) => item?.type === 'bun');
    const otherIngredients = foundedIngredients.filter((item) => item?.type !== 'bun');
    const totalPrice = (otherIngredients as TIngredient[]).reduce(((previousValue: number, item: TIngredient) => previousValue + item.price), 0) +
    ((buns as TIngredient[]).reduce(((previousValue: number, item: TIngredient) => previousValue + item.price), 0) * 2);
    return totalPrice;
  }

  const getDate = () => {
    const dateFromServer = (selectedOrder as TOrder).createdAt;
    return <FormattedDate date={new Date(dateFromServer)} />
  }

  const getStatus = (): string | undefined => {
    if (selectedOrder?.status === 'done') {
      return 'Выполнен';
    }
    if (selectedOrder?.status === 'pending') {
      return 'Готовится';
    }
    if (selectedOrder?.status === 'created') {
      return 'Создан';
    }
  }

  return (
    <div>
      <span className='text text_type_digits-default'>#{selectedOrder?.number}</span>
      <h3 className='text text_type_main-medium'>{selectedOrder?.name}</h3>
      <span className={`text text_type_main-small ${selectedOrder?.status === 'done' ? styles.status : ''}`}>{getStatus()}</span>
      <h4>Состав:</h4>
      <div>

      </div>
      <div>
        <span className='text text_type_main-default text_color_inactive'>{getDate()}</span>
        <div className={styles.price}>
            <span className='text text_type_digits-default'>{countTotalPrice()}</span>
            <CurrencyIcon type="primary" />
          </div>
      </div>
    </div>
  )
}

export default OrderInfo;
