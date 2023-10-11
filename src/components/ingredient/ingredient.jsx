import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './ingredient.module.css';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { GET_INGREDIENT } from '../../services/actions/ingredient-modal';
import { useDrag } from 'react-dnd';

const Ingredient = ({ item, onIngredientClick }) => {

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item
  });

  const dispatch = useDispatch();

  const handleIngredientClick = () => {
    onIngredientClick();
    dispatch({
      type: GET_INGREDIENT,
      selectedIngredient: item
    })
  };

  return (
    <div className={cardStyles.card} onClick={handleIngredientClick} ref={dragRef}>
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

Ingredient.propTypes = {
  item: INGREDIENS_PROP_TYPES.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
};

export default Ingredient;
