import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './card.module.css';
import { ingredientPropTypes } from '../../constants/constants';

const Card = ({ item, onIngredientClick }) => {

  const handleIngredientClick = () => {
    onIngredientClick(item);
  };

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

Card.propTypes = {
  item: ingredientPropTypes.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default Card;