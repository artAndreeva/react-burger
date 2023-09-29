import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './card.module.css'

const Card = ({ item, onIngredientClick }) => {

  const handleIngredientClick = () => {
    onIngredientClick(item);
  }

  return (
    <div className={cardStyles.card} onClick={handleIngredientClick}>
      <Counter count={1} size="default" />
      <img src={item.image} alt={item.name} className={cardStyles.image}/>
      <div className={cardStyles.price}>
        <span className="text text_type_digits-default">{item.price}</span>
        <CurrencyIcon />
      </div>
      <p className='text text_type_main-default'>{item.name}</p>
    </div>
  );
};

const itemPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number
});

Card.propTypes = {
  item: itemPropTypes
};

export default Card;