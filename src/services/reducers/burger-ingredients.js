import update from 'immutability-helper';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS
} from '../actions/burger-ingredients';

const initialState = {
  buns: {},
  ingredients: []
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        buns: action.buns,
      }
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredients],
      }
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(item => item.id !== action.id)
      }
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        ingredients: update(state.ingredients, {
          $splice: [
            [action.index.dragIndex, 1],
            [action.index.hoverIndex, 0, state.ingredients[action.index.dragIndex]],
          ],
        }),
      }
    }
    default: {
      return state
    }
  }
}
