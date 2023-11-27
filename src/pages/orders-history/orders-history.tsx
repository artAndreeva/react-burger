import { useEffect } from 'react';
import OrderCard from '../../components/order-card/order-card';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { TOrder } from '../../types/types';
import { wsConnectionClosedAction, wsConnectionStartAction } from '../../services/actions/ws';
import styles from './orders-history.module.css';

const OrdersHistory = () => {

  const orders = useSelector(store => store.wsOrders.orders)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartAction());
    //return () => {
    //  dispatch(wsConnectionClosedAction(event));
    //}
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.orders}>
        {orders.map((order: TOrder) => (
          <OrderCard
            order={order}
            key={order._id}
          />
        )).reverse()}
      </ul>
    </div>
  )
}

export default OrdersHistory;
