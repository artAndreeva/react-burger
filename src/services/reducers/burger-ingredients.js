import {
  GET_BURGER_INGREDIENTS,
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT
} from '../actions/burger-ingredients';
import { TYPE } from '../../constants/constants';

const initialState = {
  endIngredients: {},
  middleIngredients: [],
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS: {
      return {
        ...state,
        endIngredients: {...action.ingredients.filter(item => item.type === TYPE.bun)[0]},
        middleIngredients: [...action.ingredients.filter(item => item.type !== TYPE.bun)],
      }
    }
    default: {
      return state
    }
  }
}
