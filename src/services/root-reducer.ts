import { combineReducers } from 'redux';
import { ingredientsReducer } from './reducers/ingredients';
import { burgerIngredientsReducer } from './reducers/burger-ingredients';
import { orderReducer } from './reducers/order';
import { resetPasswordReducer } from './reducers/reset-password';
import { authReducer } from './reducers/auth';
import { wsReducer } from './reducers/ws';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  order: orderReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  wsOrders: wsReducer,
});
