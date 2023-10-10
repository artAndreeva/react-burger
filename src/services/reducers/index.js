import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { burgerIngredientsReducer } from '../reducers/burger-ingredients';
import { orderReducer } from '../reducers/order';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  order: orderReducer
})
