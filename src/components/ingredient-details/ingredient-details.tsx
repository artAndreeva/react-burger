import ingredientDetailStyles from './ingredient-details.module.css';
import { useSelector } from '../../services/types/hooks';
import { useParams } from 'react-router-dom';
import { TIngredient } from '../../types/types';

const IngredientsDetails = () => {
  const ingredients = useSelector(store => store.ingredients.ingredients);
  const { id } = useParams();

  const selectedIngredient = (ingredients.find((ingr: TIngredient) => ingr._id === id));

  return (
    <>
      {selectedIngredient &&
        <div className={ingredientDetailStyles.container} data-testid='ingredient-modal'>
          <img
            src={selectedIngredient.image}
            alt={selectedIngredient.name}
            className={ingredientDetailStyles.image}/>
          <p className='text text_type_main-medium'>
            {selectedIngredient.name}
          </p>
          <ul className={ingredientDetailStyles.list}>
            <li className={ingredientDetailStyles.item}>
              <span className='text text_type_main-default text_color_inactive'>Калории,ккал</span>
              <span className='text text_type_digits-default text_color_inactive'>{selectedIngredient.calories}</span>
            </li>
            <li className={ingredientDetailStyles.item}>
              <span className='text text_type_main-default text_color_inactive'>Белки, г</span>
              <span className='text text_type_digits-default text_color_inactive'>{selectedIngredient.proteins}</span>
            </li>
            <li className={ingredientDetailStyles.item}>
              <span className='text text_type_main-default text_color_inactive'>Жиры, г</span>
              <span className='text text_type_digits-default text_color_inactive'>{selectedIngredient.fat}</span>
            </li>
            <li className={ingredientDetailStyles.item}>
              <span className='text text_type_main-default text_color_inactive'>Углеводы, г</span>
              <span className='text text_type_digits-default text_color_inactive'>{selectedIngredient.carbohydrates}</span>
            </li>
          </ul>
        </div>
      }
    </>
  );
}

export default IngredientsDetails;
