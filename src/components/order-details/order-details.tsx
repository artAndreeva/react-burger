import styles from './order-details.module.css';
import { useSelector } from '../../services/types/hooks';

const OrderDetails = () => {

  const { orderNumber, sendOrderRequest } = useSelector(store => store.order);

  return (
    <div className={styles.container} data-testid='order-modal'>
    {!sendOrderRequest
      ? <>
          <h3 className={`text text_type_digits-large mb-8 ${styles.glow}`}>{orderNumber}</h3>
          <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
          <div className={styles.image}></div>
          <p className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</p>
          <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </>
      : <span className='text text_type_main-medium mb-15'>...Загрузка...</span>
    }
    </div>
  )
}

export default OrderDetails;
