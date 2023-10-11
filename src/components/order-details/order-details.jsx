import orderDetailsStyles from './order-details.module.css';
import { useSelector } from 'react-redux';

const OrderDetails = () => {

  const orderNumber = useSelector(store => store.order.orderNumber);

  return (
    <div className={orderDetailsStyles.container}>
      <h3 className='text text_type_digits-large mb-8'>{orderNumber}</h3>
      <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
      <div className={orderDetailsStyles.image}></div>
      <p className='text text_type_main-default mt-15 mb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;
