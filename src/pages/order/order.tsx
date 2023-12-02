import OrderInfo from "../../components/order-info/order-info";
import styles from './order.module.css';

const Order = () => {
  return (
    <main className={styles.container}>
      <OrderInfo />
    </main>
  )
}

export default Order;
