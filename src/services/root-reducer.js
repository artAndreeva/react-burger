import { combineReducers } from 'redux';
import { ingredientsReducer } from './reducers/ingredients';
import { burgerIngredientsReducer } from './reducers/burger-ingredients';
import { orderReducer } from './reducers/order';
import { ingredientModalReducer } from './reducers/ingredient-modal';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  order: orderReducer,
  ingredientModal: ingredientModalReducer
});
