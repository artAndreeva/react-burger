import { useEffect } from 'react';
import OrderCard from '../../components/order-card/order-card';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { TOrder } from '../../types/types';
import { wsAuthConnectionEndAction, wsAuthConnectionStartAction } from '../../services/actions/ws';
import styles from './orders-history.module.css';
import { useLocation } from 'react-router-dom';

const OrdersHistory = () => {

  const { orders, error} = useSelector(store => store.wsOrders)
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const url = pathname;

  useEffect(() => {
    dispatch(wsAuthConnectionStartAction());
    return () => {
      dispatch(wsAuthConnectionEndAction());
    }
  }, [dispatch])

  return (
    <div className={styles.container}>
      {Object.keys(orders).length !== 0 &&
        <ul className={styles.orders}>
          {orders.map((order: TOrder) => (
            <OrderCard
              order={order}
              key={order._id}
              url={url}
            />
          )).reverse()}
        </ul>
      }
    </div>
  )
}

export default OrdersHistory;
