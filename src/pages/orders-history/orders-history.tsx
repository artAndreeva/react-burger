import { useEffect } from 'react';
import OrderCard from '../../components/order-card/order-card';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { wsAuthConnectionEndAction, wsAuthConnectionStartAction } from '../../services/actions/ws';
import styles from './orders-history.module.css';
import { useLocation } from 'react-router-dom';
import { WS_URL } from '../../constants/constants';
import { getCookie } from '../../utils/cookie';

const OrdersHistory = () => {

  const { orders } = useSelector(store => store.wsOrders)
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const url = pathname;

  useEffect(() => {
    dispatch(wsAuthConnectionStartAction({ wsUrl: WS_URL, end: `?token=${getCookie('accessToken')}` }));
    return () => {
      dispatch(wsAuthConnectionEndAction());
    }
  }, [dispatch])

  return (
    <div className={styles.container}>
        <ul className={styles.orders}>
          {orders.map((order) => (
            <OrderCard
              order={order}
              key={order._id}
              url={url}
            />
          )).reverse()}
        </ul>
    </div>
  )
}

export default OrdersHistory;
