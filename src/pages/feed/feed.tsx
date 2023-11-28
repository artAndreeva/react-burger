import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { TOrder } from '../../types/types';
import { wsConnectionEndAction, wsConnectionStartAction } from '../../services/actions/ws';
import styles from './feed.module.css';
import OrderCard from '../../components/order-card/order-card';
import { useLocation } from 'react-router-dom';

const Feed = () => {

  const { orders, total, totalToday } = useSelector(store => store.wsOrders)
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const url = pathname;

  useEffect(() => {
    dispatch(wsConnectionStartAction());
    return () => {
      dispatch(wsConnectionEndAction());
    }
  }, [dispatch])

  const countStatus = (status: string): TOrder[] => {
    return orders.filter(item => item.status === status);
  }

  return (
    <div className={styles.main}>
      <h1 className='text text_type_main-large'>Лента заказов</h1>
      <div className={styles.columns}>
        <section className={styles.leftColumn}>
        {Object.keys(orders).length !== 0 &&
          <ul className={styles.orders}>
            {orders.map((order: TOrder) => (
              <OrderCard
                order={order}
                key={order._id}
                url={url}
              />
            ))}
          </ul>
        }
        </section>
        <section className={styles.rightColumn}>
          <div className={styles.orderStatus}>
            <div>
              <h3 className='text text_type_main-medium mb-5'>Готовы:</h3>
              <ul className={styles.doneStatus}>
                {countStatus('done').slice(0, 15).map(((item, index) => (
                  <li className='text text_type_digits-default' key={index}>{item.number}</li>
                )))}
              </ul>
            </div>
            <div>
              <h3 className='text text_type_main-medium mb-5'>В работе:</h3>
              <ul className={styles.pendingStatus}>
                {countStatus('pending').slice(0, 15).map(((item, index) => (
                  <li className='text text_type_digits-default' key={index}>{item.number}</li>
                )))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
            <span className='text text_type_digits-large'>{total}</span>
          </div>
          <div>
            <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
            <span className='text text_type_digits-large'>{totalToday}</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Feed;
