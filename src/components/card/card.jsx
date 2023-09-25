import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './card.module.css'

const Card = (item) => {
  return (
    <div className={cardStyles.card}>
      {/* <span className={`${cardStyles.quantity} text text_type_digits-default`}>1</span> */}
      <img src={item.image} alt={item.name} className={cardStyles.image}/>
      <div className={cardStyles.price}>
        <span className="text text_type_digits-default">{item.price}</span>
        <CurrencyIcon />
      </div>
      <p className='text text_type_main-default'>{item.name}</p>
    </div>
  );
}

export default Card;