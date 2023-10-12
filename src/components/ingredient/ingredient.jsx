import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import cardStyles from './ingredient.module.css';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { openIngredient } from '../../services/actions/ingredient-modal';
import { useDrag } from 'react-dnd';
import { useState, useEffect } from 'react';

const Ingredient = ({ item, onIngredientClick }) => {

  const [quantity, setQuantity] = useState(0);
  const { buns, ingredients } = useSelector(store => store.burgerIngredients)
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item
  });

  const handleIngredientClick = () => {
    onIngredientClick();
    dispatch(openIngredient(item))
  };

  useEffect(() => {
    const quantityArr = [...[buns], ...ingredients].filter((ingr) => ingr._id === item._id);
    if (item.type === 'bun') {
      setQuantity(quantityArr.length * 2);
    } else {
      setQuantity(quantityArr.length);
    }
  }, [buns, ingredients])

  return (
    <div className={cardStyles.card} onClick={handleIngredientClick} ref={dragRef}>
      {quantity
      ? <Counter count={quantity} size="default" />
      : null
      }
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
