import { combineReducers } from 'redux';
import { ingredientsReducer } from './reducers/ingredients';
import { burgerIngredientsReducer } from './reducers/burger-ingredients';
import { orderReducer } from './reducers/order';
import { ingredientModalReducer } from './reducers/ingredient-modal';
import { resetPasswordReducer } from './reducers/reset-password';
import { authReducer } from './reducers/auth';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  order: orderReducer,
  ingredientModal: ingredientModalReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer
});
