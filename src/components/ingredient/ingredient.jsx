import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { useState, useEffect } from 'react';
import { TYPE } from '../../constants/constants';
import { Link, useLocation } from 'react-router-dom';

const Ingredient = ({ item }) => {

  const location = useLocation();

  const [quantity, setQuantity] = useState(0);
  const { buns, ingredients } = useSelector(store => store.burgerIngredients)

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item
  });

  useEffect(() => {
    const quantityArr = [...[buns], ...ingredients].filter((ingr) => ingr._id === item._id);
    if (item.type === TYPE.bun) {
      setQuantity(quantityArr.length * 2);
    } else {
      setQuantity(quantityArr.length);
    }
  }, [buns, ingredients])

  return (
    <Link to={`/ingredients/${item._id}`} className={styles.link} state={{ backgroundLocation: location }}>
      <div className={styles.card} ref={dragRef}>
        {quantity
        ? <Counter count={quantity} size="default" />
        : null
        }
        <img src={item.image} alt={item.name} className={styles.image}/>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{item.price}</span>
          <CurrencyIcon />
        </div>
        <p className='text text_type_main-default'>{item.name}</p>
      </div>
    </Link>
  );
};

Ingredient.propTypes = {
  item: INGREDIENS_PROP_TYPES.isRequired,
};

export default Ingredient;
